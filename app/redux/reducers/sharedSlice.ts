/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { AppThunk } from "redux/store";
import commonData from "mockData/commondata.json";
import { isEmptyObj } from "utils/GeneralUtils";
import type { ThemeOptions } from "@mui/material/styles";

export interface Address {
  icon: string;
  text: string;
}
export interface Government {
  link: string;
  logo: string;
  text: string;
}
interface TextItem {
  name: string;
  value: string;
}
export interface Phones {
  icon: string;
  text: TextItem[];
}
export interface Contacts {
  address: Address;
  government: Government;
  phones: Phones;
}
interface LinkItem {
  label: string;
  path: string;
}
interface CustomerLinks {
  links: LinkItem[];
  title: string;
}
interface Payments {
  discover: boolean;
  mastercard: boolean;
  paypal: boolean;
  visa: boolean;
}
export type Introduction = {
  explore: LinkItem;
  mapUrl: string;
  parkDesc: string;
};
export type NewsLetter = {
  title: string;
  message: string;
  collectEmail: string;
};

interface Information {
  title: string;
  links: LinkItem[];
}
export interface Footer {
  logo: string;
  logoLink: string;
  newsLetter: NewsLetter | null;
  copyRight: string;
  contacts: Contacts;
  payments: Payments | [];
  customerLinks: CustomerLinks;
  introduction: Introduction;
  information: Information;
}
interface ShoppingCartTimer {
  almostExpiredMsg: string;
  expiredMsg: string;
  expiredMsgInCart: string;
  status: string | null;
  timeLeft: string | null;
  timeLeftInMilisec: number;
  timerEndDate: number;
}
interface LineOfBusinessToLabelMap {
  CAMPING: string;
  DAYUSE: string;
}
interface AvailabilityCodeMap {
  AVAILABLE: string;
  CALL_CENTER: string;
  NOT_AVAILABLE: string;
  NO_DATE: string;
  WALK_UP: string;
  CALL_THE_PARK: string;
}

interface CartLabel {
  checkout: string;
  continueShopping: string;
}
interface Header {
  bgImageUrl: string;
  logo: { path: string; targetLink: string };
}
interface SearchCriteria {
  interestedIns: {
    interestedIns: {
      title: string;
      value: string;
    }[];
  };
  searchConfig: {
    nearbySearch: { active: boolean; landSearchArea: number };
  };
  searchLabel: {
    date: string;
    guest: string;
    interestedIn: string;
    location: string;
    noMatchingLocations: string;
  };
}
interface Data {
  siteTypeLabelText?: string;
  siteTypeLabelOnFacilitySearch?: string;
  siteTypeDisplayGroupMappings?: [];
  siteTypeDisplayGroupLabelTextForPlural?: string;
  siteTypeDisplayGroupLabelText?: string;
  shoppingCartTimer?: ShoppingCartTimer;
  footer?: Footer;
  lineOfBusinessToLabelMap?: LineOfBusinessToLabelMap;
  availabilityCodeMap?: AvailabilityCodeMap;
  itemCount?: number;
  allSitesLabelOnFacilitySearch?: string;
  cartLabel?: CartLabel;
  firstLevelMenuItems?: null;
  header?: Header;
  searchCriteria?: SearchCriteria;
  toggleBackButtonLabelText?: string;
  LabelsCommonFacilitysearchEmpty?: string;
  tourTicketsSoldAtFacilityOnlyLabelText?: string;
  toursAndTicketsLabelText?: string;
}
interface BrandOptions {
  brand: string;
  domain: string;
  themePath: string;
  facilityName?: string;
}

export interface Contract {
  code: string;
  name: string;
  lat: string;
  lon: string;
}
export interface SharedState {
  brand: BrandOptions;
  data: Data;
  theme: {
    themeOptionsList: {
      dark?: ThemeOptions;
      light?: ThemeOptions;
    };
  };
  user: any;
  contracts: Contract[];
  countryAndState: [];
  simpleDialog: object;
}

const initialState: SharedState = {
  brand: { brand: "", domain: "", themePath: "", facilityName: "" },
  data: {},
  theme: {
    themeOptionsList: {},
  },
  user: {},
  contracts: [],
  countryAndState: [],
  simpleDialog: {},
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setBrand(state, { payload }) {
      Object.assign(state.brand, payload.data);
    },
    setSharedData(state, { payload }) {
      state.data = payload.data;
    },
    setContracts(state, action) {
      state.contracts = action.payload;
    },
    setCountryAndState(state, action) {
      state.countryAndState = action.payload;
    },
    setThemeOptionsList(state, action) {
      state.theme.themeOptionsList = action.payload;
    },
  },
});

export const {
  setBrand,
  setSharedData,
  setContracts,
  setCountryAndState,
  setThemeOptionsList,
} = sharedSlice.actions;

const initCommonData = (): AppThunk => async (dispatch, getState) => {
  const state = getState();
  const isCommonDataInitialized = !isEmptyObj(state.shared.data);
  if (isCommonDataInitialized) return;

  const responseData = commonData;
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

const thunkActions = {
  initCommonData,
};
const { actions } = sharedSlice;

export { thunkActions, actions };
export default sharedSlice.reducer;
