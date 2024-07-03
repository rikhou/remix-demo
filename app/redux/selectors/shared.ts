import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";

const getSharedState = (state: RootState) => state.shared;
const getContracts = createSelector(
  getSharedState,
  (shared) => shared.contracts
);
const getCountryAndState = createSelector(
  getSharedState,
  (shared) => shared.countryAndState
);

const getFooterData = createSelector(
  getSharedState,
  (shared) => shared.data?.footer
);
const getThemeOptionsList = createSelector(
  getSharedState,
  (shared) => shared.theme.themeOptionsList
);
const getHeaderSwitchSiteLabel = createSelector(
  getSharedState,
  (shared) => shared.data?.toggleBackButtonLabelText
);

const selectors = {
  getContracts,
  getCountryAndState,
  getFooterData,
  getThemeOptionsList,
  getHeaderSwitchSiteLabel,
};

export default selectors;
