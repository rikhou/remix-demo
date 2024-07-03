import {PaletteOptions} from '@mui/material/styles'
import critical from '../colors/critical'
import interactive from '../colors/interactive'
import success from '../colors/success'
import grey from '../colors/grey'
import {paletteNeutrals} from '../shared'
import warning from '../colors/warning'
import highlight from '../colors/highlight'

declare module '@mui/material/styles' {
  interface Palette {
    icon: {
      blue: string
      green: string
      red: string
      orange: string
      dayUseColor: string
    }
    payment: {
      paymentDisableIconColor: string
      visaCardColor: string
      MasterCardColor: string
      DiscoverCardColor: string
      AMEXCardColor: string
      PaypalCardColor: string
    }
    popperWithArrow: {
      backgroundColor: string
      closeBtnTextColor: string
    }
    footer: {
      bg: string
      bg1: string
    }
    facility: {
      infoBackground: string
      businessesInfoBackground: string
      nearByInfoTextColor: string
      tabSelectedBackground: string
    }
    campsiteDetail: {
      loopIconColor: string
      maxPeopleIconColor: string
    }
    cart: {
      priceBackground: string
      orderNumberBG: string
    }
    dayPicker: {
      dayRangeBackgroundColor: string
    }
    cartCountTimer: {
      bgColor: string
    }
    default: {
      main: string
      dark: string
      light?: string
      contrastText?: string
    }
    interactive: {
      main: string
      dark: string
      light: string
    }
    numberBox: {
      minusButtonColor: string
      addButtonColor: string
    }
    availabilityStatus: {
      available: {
        bgColor: string
        iconColor: string
        textColor: string
      }
      notAvailable: {
        bgColor: string
        iconColor: string
        textColor: string
      }
      common: {
        bgColor: string
        iconColor: string
        textColor: string
      }
    }
  }

  interface PaletteColor {
    25?: string
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }
  interface PaletteOptions {
    icon?: {
      blue: string
      green: string
      red: string
      orange: string
      dayUseColor: string
    }
    payment?: {
      paymentDisableIconColor?: string
      visaCardColor?: string
      MasterCardColor?: string
      DiscoverCardColor?: string
      AMEXCardColor?: string
      PaypalCardColor?: string
    }
    popperWithArrow?: {
      backgroundColor: string
      closeBtnTextColor: string
    }
    header?: {
      bg: string
    }
    footer?: {
      bg: string
      bg1: string
    }
    facility?: {
      infoBackground: string
      businessesInfoBackground: string
      nearByInfoTextColor?: string
      tabSelectedBackground?: string
    }
    campsiteDetail?: {
      loopIconColor: string
      maxPeopleIconColor: string
    }
    cart?: {
      priceBackground: string
      orderNumberBG: string
    }
    dayPicker?: {
      dayRangeBackgroundColor: string
    }
    cartCountTimer?: {
      bgColor: string
    }
    default?: {
      main: string
      dark: string
      light?: string
      contrastText?: string
    }
    interactive?: {
      main: string
      dark: string
      light: string
    }
    numberBox?: {
      minusButtonColor: string
      addButtonColor: string
    }
    availabilityStatus?: {
      available?: {
        bgColor?: string
        iconColor?: string
        textColor?: string
      }
      notAvailable?: {
        bgColor?: string
        iconColor?: string
        textColor?: string
      }
      common?: {
        bgColor?: string
        iconColor?: string
        textColor?: string
      }
    }
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true
  }
}

const paletteOptions: PaletteOptions = {
  common: paletteNeutrals,
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
  grey,
  success: {
    main: success[500],
    dark: success[700],
  },
  warning: {
    main: warning[500],
    dark: warning[700],
  },
  error: {
    main: critical[500],
    dark: critical[700],
  },
  info: {
    main: highlight[500],
  },
  interactive: {
    main: interactive[800],
    light: interactive[700],
    dark: interactive[900],
  },
  default: {
    main: grey[900],
    contrastText: paletteNeutrals.white,
    dark: grey[800],
  },
  icon: {
    blue: '#283593',
    green: '#00838F',
    red: '#AD1457',
    orange: '#D84315',
    dayUseColor: '#00695C',
  },
  payment: {
    paymentDisableIconColor: grey[800],
    visaCardColor: '#113F99',
    MasterCardColor: '#FCB132',
    DiscoverCardColor: '#F6841B',
    AMEXCardColor: '#00838F',
    PaypalCardColor: '#AD1457',
  },
  popperWithArrow: {
    backgroundColor: grey[300],
    closeBtnTextColor: grey[900],
  },
  dayPicker: {
    dayRangeBackgroundColor: '#dcfcf1',
  },
  cartCountTimer: {
    bgColor: warning[800],
  },
  numberBox: {
    minusButtonColor: critical[600],
    addButtonColor: success[700],
  },
  availabilityStatus: {
    available: {
      bgColor: success[100],
      iconColor: success[600],
      textColor: success[900],
    },
    notAvailable: {
      bgColor: critical[100],
      iconColor: critical[600],
      textColor: critical[900],
    },
    common: {
      bgColor: warning[100],
      iconColor: warning[600],
      textColor: warning[900],
    },
  },
}

export default paletteOptions
