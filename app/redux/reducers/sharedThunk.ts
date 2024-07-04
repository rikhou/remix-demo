import type { AppStore, AppThunk } from "redux/store";
import getCommonData from "services/shared/commonData";
import { isEmptyObj } from "utils/GeneralUtils";
import {
  setBrand,
  setContracts,
  setCountryAndState,
  setSharedData,
  setThemeOptionsList,
} from "./sharedSlice";
import getCountries from "services/shared/countries";
import getContract from "services/shared/contract";
import { defaultLanguage, initCurrentLocale } from "i18n";

const initCommonData = (): AppThunk => async (dispatch, getState) => {
  const state = getState();
  const isCommonDataInitialized = !isEmptyObj(state.shared.data);
  if (isCommonDataInitialized) return;

  const responseData = await getCommonData();
  const {
    theme,
    firstLevelMenuItems,
    bannerAlert,
    searchCriteria,
    maxLengthOfStay,
    searchingDateWindow,
    ...restResponseData
  } = responseData;

  const themeOptionsList = {
    light: theme?.light,
    dark: theme?.dark,
  };
  dispatch(setThemeOptionsList(themeOptionsList));
  dispatch(setSharedData({ data: { ...restResponseData, searchCriteria } }));
};

const initCountriesAndBrand =
  (contracts): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const brand = "MT";

    if (isEmptyObj(state.shared.countryAndState)) {
      // country
      const country = await getCountries();
      dispatch(setCountryAndState(country?.countryList || []));

      // brand
      dispatch(
        setBrand({
          data: {
            brand: contracts[0]?.name,
          },
        })
      );
    } else {
      dispatch(setBrand({ data: brand }));
    }
  };

const initContracts = (): AppThunk => async (dispatch, getState) => {
  const state = getState();

  // contracts info
  let contracts = [];
  if (isEmptyObj(state.shared.contracts)) {
    contracts = await getContract();
    dispatch(setContracts(contracts || []));
  }

  return contracts;
};

const initMainConfig = (): AppThunk => async (dispatch) => {
  // common data
  await dispatch(initCommonData());

  // contracts info
  const contracts = await dispatch(initContracts());

  // country, brand
  await dispatch(initCountriesAndBrand(contracts));

  // Locale
  initCurrentLocale(defaultLanguage);
};

const getMainConfig = async (store: AppStore) => {
  const { dispatch } = store;

  // common data
  await dispatch(initCommonData());

  // contracts info
  const contracts = await dispatch(initContracts());

  // country, brand
  await dispatch(initCountriesAndBrand(contracts));

  // Locale
  initCurrentLocale(defaultLanguage);
};

const thunkActions = {
  initMainConfig,
  getMainConfig,
};

export default thunkActions;
