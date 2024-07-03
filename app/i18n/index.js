import { useState } from "react";
import Intl from "react-intl-universal";
import Cookies from "js-cookie";
import { isBrowser } from "browser-or-node";
import useDeepCompareEffect from "hooks/useDeepCompareEffect";
// import translate from "services/translation";
import _ from "lodash";
import en from "./en";

/**
 * TODO:
 * Caching
 */

const locales = {
  en: { ...en },
  fr: {},
};
const supportedLanguages = Object.keys(locales);
const defaultLanguage = "en";
const PLAIN_TEXT = "PlainText";

let sourceLocale = { [PLAIN_TEXT]: {} };
let currentLanguage;

function initCurrentLocale(locale) {
  currentLanguage = locale;

  Intl.init({
    currentLocale: locale,
    locales,
    fallbackLocale: defaultLanguage,
  });
}

/* init the browser environment */
if (isBrowser) {
  let lang = Cookies.get("lang");

  if (!lang) {
    lang = defaultLanguage;
    Cookies.set("lang", defaultLanguage);
  }

  initCurrentLocale(lang);
}

// async function translateFromServer(source) {
//   // TODO handle error
//   const translatedResult = await translate(
//     defaultLanguage,
//     currentLanguage,
//     source
//   );
//   Intl.load({ [currentLanguage]: translatedResult });

//   /* testing
//   console.log({translatedResult, source, isBrowser, options: Intl.getInitOptions()}) */
// }

// const debouncedTranslateFromServer = _.debounce(async (resolve) => {
//   await translateFromServer(sourceLocale);
//   resolve();
//   /* testing
//   console.log({translationQueue, sourceLocale}) */
//   sourceLocale = { [PLAIN_TEXT]: {} };
// }, 0);

/**
 * @param {Options} options
 */
function getTranslatedTextFromLocal(options) {
  const { k, text, variables } = options;

  if (text) {
    if (currentLanguage === defaultLanguage) {
      return text;
    }

    return locales?.[currentLanguage]?.[PLAIN_TEXT]?.[text] || "";
  }

  if (k) {
    return Intl.get(k, variables);
  }

  return null;
}

/**
 * @param {Options} options
 * @returns {boolean}
 */
function checkIfTheTextDataExist(options) {
  const { k, text } = options;

  if (currentLanguage === defaultLanguage) {
    return true;
  }

  if (text) {
    return !!locales?.[currentLanguage]?.[PLAIN_TEXT]?.[text];
  }

  if (k) {
    return !!_.get(locales[currentLanguage], k, false);
  }

  return false;
}

/**
 * @typedef {object} Options
 * @prop {string} k - The string representing key in locale data file
 * @prop {string} [text] - The raw text
 * @prop {object} [variables] - Variables in message
 */

/**
 * The function will not be called on server side rendering
 * @param {Options} options
 */
const prepareTextDataForClientSide = (() => {
  let promise;
  let promiseResolve;

  return async (options) => {
    const { k, text } = options;

    if (!promise) {
      promise = new Promise((resolve) => {
        promiseResolve = resolve;
      }).finally(() => {
        promise = null;
      });
    }

    /* testing
    const result = getTranslatedTextFromLocal(options)
    console.log({result, options, ifTextExist: checkIfTheTextDataExist(options)}) */

    if (checkIfTheTextDataExist(options)) {
      return Promise.resolve();
    }

    if (text) {
      if (!sourceLocale[PLAIN_TEXT]) sourceLocale[PLAIN_TEXT] = {};
      sourceLocale[PLAIN_TEXT][text] = text;
    }

    if (k) {
      _.set(sourceLocale, k, _.get(locales[defaultLanguage], k));
    }

    // debouncedTranslateFromServer(promiseResolve);

    return promise;
  };
})();

/**
 * @param {Options} options
 */
async function t(options) {
  const { k, text, variables } = options;

  if (currentLanguage !== defaultLanguage) {
    await prepareTextDataForClientSide({ k, text, variables });
  }

  const translatedText = getTranslatedTextFromLocal({ k, text, variables });

  return translatedText;
}

/**
 * @param {Options} options
 */
const useT = ({ k, text, variables }) => {
  const lang = null;
  const [content, setContent] = useState(
    checkIfTheTextDataExist({ k, text, variables })
      ? getTranslatedTextFromLocal({ k, text, variables })
      : null
  );

  useDeepCompareEffect(() => {
    let isMounted = true;

    async function getTranslatedText() {
      const result = await t({ text, k, variables });

      if (isMounted) {
        setContent(result);
      }
    }

    getTranslatedText();

    return () => {
      isMounted = false;
    };
  }, [k, text, variables, lang]);

  return content;
};

/**
 * @typedef {Options} Props
 *
 * @param {Props} props
 */
const T = (props) => {
  const { k, text, variables } = props;

  const content = useT({ k, text, variables });

  return content;
};

export { supportedLanguages, defaultLanguage, initCurrentLocale, t, useT, T };
