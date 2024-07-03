// mui icons
import BarChart from '@mui/icons-material/BarChart'
import Brightness4 from '@mui/icons-material/Brightness4'
import Brightness7 from '@mui/icons-material/Brightness7'
import Business from '@mui/icons-material/Business'
import Check from '@mui/icons-material/Check'
import Search from '@mui/icons-material/Search'
import ThreeSixty from '@mui/icons-material/ThreeSixty'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
// import ErrorOutline from '@mui/icons-material/ErrorOutline'
import LockOutlined from '@mui/icons-material/LockOutlined'
import Menu from '@mui/icons-material/Menu'
import PhoneInTalkOutlined from '@mui/icons-material/PhoneInTalkOutlined'
// fontawesome brands icons
import {
  faCcAmex as BrandCcAmex,
  faCcDiscover as BrandCcDiscover,
  faCcMastercard as BrandCcMastercard,
  faCcVisa as BrandCcVisa,
  faFacebookF as BrandFaceBookF,
  faInstagram as BrandInstagram,
  faPaypal as BrandPaypal,
  faXTwitter as BrandTwitter,
} from '@fortawesome/free-brands-svg-icons'
// fontawesome light icons
import {
  faArrowRight as LightArrowRight,
  faBorderAll as LightBorderAll,
  faCalendarAlt as LightCalendarAlt,
  faCalendarCheck as LightCalendarCheck,
  faCampground as LightCampground,
  faChevronCircleDown as LightChevronCircleDown,
  faChevronCircleUp as LightChevronCircleUp,
  faCircleMinus as LightCircleMinus,
  faCirclePlus as LightCirclePlus,
  faClock as LightClock,
  faCompass as LightCompass,
  faCopy as LightCopy,
  faEnvelope as LightEnvelope,
  faFileInvoice as LightFileInvoice,
  faGlobe as LightGlobe,
  faHeart as LightHeart,
  faImage as LightImage,
  faInfoCircle as LightInfoCircle,
  faLocationDot as LightLocationDot,
  faMap as LightMap,
  faMapPin as LightMapPin,
  faPencil as LightPencil,
  faQuestionCircle as LightQuestionCircle,
  faSearch as LightSearch,
  faShoppingCart as LightShoppingCart,
  faSquareList as LightSquareList,
  faTicket as LightTicket,
  faTimes as LightTimes,
  faTrashAlt as LightTrashAlt,
  faUserFriends as LightUserFriends,
  faUserGroup as LightUserGroup,
  faCircleInfo as LightCircleInfo,
  faTree as LightTree,
} from '@fortawesome/pro-light-svg-icons'
// fontawesome regular icons
import {
  faAngleDown as RegularAngleDown,
  faAngleLeft as RegularAngleLeft,
  faAngleRight as RegularAngleRight,
  faAngleUp as RegularAngleUp,
  faArrowRight as RegularArrowRight,
  faBars as RegularBars,
  faCampground as RegularCampground,
  faCheckCircle as RegularCheckCircle,
  faChevronLeft as RegularChevronLeft,
  faChevronRight as RegularChevronRight,
  faEnvelope as RegularEnvelope,
  faHandPaper as RegularHandPaper,
  faHourglass as RegularHourglass,
  faLinkHorizontal as RegularLinkHorizontal,
  faMapMarkerAlt as RegularMapMarkerAlt,
  faMapSigns as RegularMapSigns,
  faPlayCircle as RegularPlayCircle,
  faSearch as RegularSearch,
  faShoppingCart as RegularShoppingCart,
  faSnowflake as RegularSnowflake,
  faTicketAlt as RegularTicketAlt,
  faUser as RegularUser,
  faXmark as RegularXmark,
} from '@fortawesome/pro-regular-svg-icons'
// fontawesome solid icons
import {
  faCheck as SolidCheck,
  faCheckCircle as SolidCheckCircle,
  faCircle as SolidCircle,
  faEclipseAlt as SolidEclipseAlt,
  faExclamationTriangle as SolidExclamationTriangle,
  faHeart as SolidHeart,
  faIcons as SolidIcons,
  faInfoCircle as SolidInfoCircle,
  faLocationDot as SolidLocationDot,
  faSnowflake as SolidSnowflake,
  faStar as SolidStar,
  faSun as SolidSun,
  faUserCircle as SolidUserCircle,
  faWheelchair as SolidWheelchair,
  faCaretUp as SolidCaretUp,
} from '@fortawesome/pro-solid-svg-icons'

// fontawesome duotone icons
import {faUserFriends as DuotoneUserFriends} from '@fortawesome/pro-duotone-svg-icons'
import {useMemo, FC} from 'react'
import {SvgIconProps} from '@mui/material'
// custom icons
import {Sample} from './customIcons'
import faToSvgIcon from './utils/faToSvgIcon'

/* sort ascending */
const faSolidIcons = {
  SolidCheck: faToSvgIcon(SolidCheck),
  SolidCheckCircle: faToSvgIcon(SolidCheckCircle),
  SolidCircle: faToSvgIcon(SolidCircle),
  SolidEclipseAlt: faToSvgIcon(SolidEclipseAlt),
  SolidExclamationTriangle: faToSvgIcon(SolidExclamationTriangle),
  SolidHeart: faToSvgIcon(SolidHeart),
  SolidIcons: faToSvgIcon(SolidIcons),
  SolidInfoCircle: faToSvgIcon(SolidInfoCircle),
  SolidLocationDot: faToSvgIcon(SolidLocationDot),
  SolidSnowflake: faToSvgIcon(SolidSnowflake),
  SolidStar: faToSvgIcon(SolidStar),
  SolidSun: faToSvgIcon(SolidSun),
  SolidUserCircle: faToSvgIcon(SolidUserCircle),
  SolidWheelchair: faToSvgIcon(SolidWheelchair),
  SolidCaretUp: faToSvgIcon(SolidCaretUp),
}

/* sort ascending */
const faRegularIcons = {
  RegularAngleDown: faToSvgIcon(RegularAngleDown),
  RegularAngleLeft: faToSvgIcon(RegularAngleLeft),
  RegularAngleRight: faToSvgIcon(RegularAngleRight),
  RegularAngleUp: faToSvgIcon(RegularAngleUp),
  RegularArrowRight: faToSvgIcon(RegularArrowRight),
  RegularBars: faToSvgIcon(RegularBars),
  RegularCampground: faToSvgIcon(RegularCampground),
  RegularCheckCircle: faToSvgIcon(RegularCheckCircle),
  RegularChevronLeft: faToSvgIcon(RegularChevronLeft),
  RegularChevronRight: faToSvgIcon(RegularChevronRight),
  RegularEnvelope: faToSvgIcon(RegularEnvelope),
  RegularHandPaper: faToSvgIcon(RegularHandPaper),
  RegularHourglass: faToSvgIcon(RegularHourglass),
  RegularLinkHorizontal: faToSvgIcon(RegularLinkHorizontal),
  RegularMapMarkerAlt: faToSvgIcon(RegularMapMarkerAlt),
  RegularMapSigns: faToSvgIcon(RegularMapSigns),
  RegularPlayCircle: faToSvgIcon(RegularPlayCircle),
  RegularSearch: faToSvgIcon(RegularSearch),
  RegularShoppingCart: faToSvgIcon(RegularShoppingCart),
  RegularSnowflake: faToSvgIcon(RegularSnowflake),
  RegularTicketAlt: faToSvgIcon(RegularTicketAlt),
  RegularUser: faToSvgIcon(RegularUser),
  RegularXmark: faToSvgIcon(RegularXmark),
}

const faLightIcons = {
  LightArrowRight: faToSvgIcon(LightArrowRight),
  LightBorderAll: faToSvgIcon(LightBorderAll),
  LightCalendarAlt: faToSvgIcon(LightCalendarAlt),
  LightCalendarCheck: faToSvgIcon(LightCalendarCheck),
  LightCampground: faToSvgIcon(LightCampground),
  LightChevronCircleDown: faToSvgIcon(LightChevronCircleDown),
  LightChevronCircleUp: faToSvgIcon(LightChevronCircleUp),
  LightCircleMinus: faToSvgIcon(LightCircleMinus),
  LightCirclePlus: faToSvgIcon(LightCirclePlus),
  LightClock: faToSvgIcon(LightClock),
  LightCompass: faToSvgIcon(LightCompass),
  LightCopy: faToSvgIcon(LightCopy),
  LightEnvelope: faToSvgIcon(LightEnvelope),
  LightFileInvoice: faToSvgIcon(LightFileInvoice),
  LightGlobe: faToSvgIcon(LightGlobe),
  LightHeart: faToSvgIcon(LightHeart),
  LightImage: faToSvgIcon(LightImage),
  LightInfoCircle: faToSvgIcon(LightInfoCircle),
  LightLocationDot: faToSvgIcon(LightLocationDot),
  LightMap: faToSvgIcon(LightMap),
  LightMapPin: faToSvgIcon(LightMapPin),
  LightPencil: faToSvgIcon(LightPencil),
  LightQuestionCircle: faToSvgIcon(LightQuestionCircle),
  LightSearch: faToSvgIcon(LightSearch),
  LightShoppingCart: faToSvgIcon(LightShoppingCart),
  LightSquareList: faToSvgIcon(LightSquareList),
  LightTicket: faToSvgIcon(LightTicket),
  LightTimes: faToSvgIcon(LightTimes),
  LightTrashAlt: faToSvgIcon(LightTrashAlt),
  LightUserFriends: faToSvgIcon(LightUserFriends),
  LightUserGroup: faToSvgIcon(LightUserGroup),
  LightCircleInfo: faToSvgIcon(LightCircleInfo),
  LightTree: faToSvgIcon(LightTree),
}

const faDuotoneIcons = {
  DuotoneUserFriends: faToSvgIcon(DuotoneUserFriends),
}

const faBrandIcons = {
  BrandCcAmex: faToSvgIcon(BrandCcAmex),
  BrandCcDiscover: faToSvgIcon(BrandCcDiscover),
  BrandCcMastercard: faToSvgIcon(BrandCcMastercard),
  BrandCcVisa: faToSvgIcon(BrandCcVisa),
  BrandFaceBookF: faToSvgIcon(BrandFaceBookF),
  BrandInstagram: faToSvgIcon(BrandInstagram),
  BrandPaypal: faToSvgIcon(BrandPaypal),
  BrandTwitter: faToSvgIcon(BrandTwitter),
}

/* sort ascending */
const materialIcons = {
  BarChart,
  Brightness4,
  Brightness7,
  Business,
  Check,
  // ErrorOutline,
  LockOutlined,
  Menu,
  PhoneInTalkOutlined,
  Search, // this on is fit for search form, fa LightSearch is for attribute filter
  ThreeSixty,
  VisibilityOffOutlined,
  VisibilityOutlined,
}

const customIcons = {
  Sample,
}

const icons = {
  ...faSolidIcons,
  ...faRegularIcons,
  ...faLightIcons,
  ...faDuotoneIcons,
  ...faBrandIcons,
  ...materialIcons,
  ...customIcons,
}

export type IconID = keyof typeof icons

interface AIconProps extends SvgIconProps {
  icon: IconID
}

const AIcon: FC<AIconProps> = (props) => {
  const {icon, ...svgIconProps} = props

  const IconComponent = useMemo(() => icons[icon], [icon])

  return <IconComponent {...svgIconProps} />
}

export default AIcon
