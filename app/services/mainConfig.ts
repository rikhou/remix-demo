import { isEmptyObj } from "utils/GeneralUtils";
import {
  setBrand,
  setContracts,
  setCountryAndState,
  thunkActions as sharedThunkActions,
} from "redux/reducers/sharedSlice";
import type { AppStore } from "redux/store";
import contractJson from "mockData/contract.json";
import countries from "mockData/countries.json";
import { defaultLanguage, initCurrentLocale } from "i18n";

export default async function getMainConfig(store: AppStore) {
  const brand = "MT";
  const state = store.getState();
  const { dispatch } = store;

  // common data
  await dispatch(sharedThunkActions.initCommonData());

  // contracts info
  let contracts = [];
  if (isEmptyObj(state.shared.contracts)) {
    contracts = contractJson;
    dispatch(setContracts(contracts || []));
  }

  if (isEmptyObj(state.shared.countryAndState)) {
    // country
    const country = countries;
    dispatch(setCountryAndState(country?.countryList || []));

    // brand
    dispatch(
      setBrand({
        data: {
          ...brand,
          brand: contracts[0]?.name,
        },
      })
    );
  } else {
    dispatch(setBrand({ data: brand }));
  }

  initCurrentLocale(defaultLanguage);

  return { success: true };
}
