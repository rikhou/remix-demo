import {CSSProperties} from 'react'
import {TypographyVariantsOptions} from '@mui/material/styles'
import {TypographyStyleOptions} from '@mui/material/styles/createTypography'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h16: CSSProperties
    d1: CSSProperties
    d2: CSSProperties
    d3: CSSProperties
    leadBody: CSSProperties
    body: CSSProperties
    bodySmall: CSSProperties
    menu: CSSProperties

    // TODO: Remove the following properties
    h7: CSSProperties
    subtitle0: CSSProperties
    subtitle3: CSSProperties
    subtitle4: CSSProperties
    subtitle5: CSSProperties
    subtitle6: CSSProperties
    bodyl1: CSSProperties
    bodyl0: CSSProperties
    body3: CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h16: CSSProperties
    d1?: CSSProperties
    d2?: CSSProperties
    d3?: CSSProperties
    leadBody?: CSSProperties
    body?: CSSProperties
    bodySmall?: CSSProperties
    menu?: CSSProperties
    buttonSmall?: CSSProperties
    buttonStandard?: CSSProperties
    buttonLarge?: CSSProperties

    // TODO: Remove the following properties
    h7?: CSSProperties
    subtitle0?: CSSProperties
    subtitle3?: CSSProperties
    subtitle4?: CSSProperties
    subtitle5?: CSSProperties
    subtitle6?: CSSProperties
    bodyl1?: CSSProperties
    bodyl0?: CSSProperties
    body3?: CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h16: true
    d1: true
    d2: true
    d3: true
    leadBody: true
    body: true
    bodySmall: true
    menu: true
    buttonSmall: true
    buttonStandard: true
    buttonLarge: true
    // TODO: Remove the following properties
    h7: true
    subtitle0: true
    subtitle3: true
    subtitle4: true
    subtitle5: true
    subtitle6: true
    bodyl1: true
    bodyl0: true
    body3: true
  }
}

const fontFamily: CSSProperties['fontFamily'] = ['Inter', 'sans-serif'].join(',')
const bodyFonts: TypographyStyleOptions = {
  fontFamily,
  fontWeight: 'normal',
}

const buttonFonts: TypographyStyleOptions = {
  fontFamily,
  fontWeight: 500,
}

const titleFonts: TypographyStyleOptions = {
  fontFamily,
  fontWeight: 600,
}

const subTitleFonts: TypographyStyleOptions = {
  fontFamily,
  fontWeight: 500,
}

const typographyVariantsOptions: TypographyVariantsOptions = {
  fontFamily,
  d1: {
    ...titleFonts,
    fontSize: 102,
  },
  d2: {
    ...titleFonts,
    fontSize: 64,
  },
  d3: {
    ...titleFonts,
    fontSize: 46,
  },
  h1: {
    ...titleFonts,
    fontSize: 48,
  },
  h2: {
    ...titleFonts,
    fontSize: 36,
  },
  h3: {
    ...titleFonts,
    fontSize: 28,
  },
  h4: {
    ...titleFonts,
    fontSize: 18,
  },
  h16: {
    ...titleFonts,
    fontSize: 16,
  },
  leadBody: {
    ...bodyFonts,
    fontSize: 18,
  },
  body: {
    ...bodyFonts,
    fontSize: 16,
  },
  bodySmall: {
    ...bodyFonts,
    fontSize: 14,
  },
  caption: {
    ...bodyFonts,
    fontSize: 12,
  },
  overline: {
    ...bodyFonts,
    fontSize: 12,
  },
  menu: {
    ...subTitleFonts,
    fontSize: 16,
  },
  buttonSmall: {
    ...buttonFonts,
    fontSize: 14,
  },
  buttonStandard: {
    ...buttonFonts,
    fontSize: 16,
  },
  buttonLarge: {
    ...buttonFonts,
    fontSize: 18,
  },
  button: {
    textTransform: 'none',
  },

  // TODO: Remove the following properties
  h5: {
    ...titleFonts,
    fontSize: 20,
  },
  h6: {
    ...titleFonts,
    fontSize: 18,
  },
  h7: {
    ...titleFonts,
    fontSize: 16,
  },
  subtitle0: {
    ...subTitleFonts,
    fontSize: 28,
  },
  subtitle1: {
    ...subTitleFonts,
    fontSize: 24,
  },
  subtitle2: {
    ...subTitleFonts,
    fontSize: 22,
  },
  subtitle3: {
    ...subTitleFonts,
    fontSize: 18,
  },
  subtitle4: {
    ...subTitleFonts,
    fontSize: 14,
  },
  subtitle5: {
    ...subTitleFonts,
    fontSize: 12,
  },
  subtitle6: {
    ...subTitleFonts,
    fontSize: 10,
  },
  bodyl1: {
    ...bodyFonts,
    lineHeight: 1.5,
    fontSize: 20,
  },
  bodyl0: {
    ...bodyFonts,
    lineHeight: 1.5,
    fontSize: 18,
  },
  body1: {
    ...bodyFonts,
    lineHeight: 1.5,
    fontSize: 16,
  },
  body2: {
    ...bodyFonts,
    lineHeight: 1.5,
    fontSize: 14,
  },

  body3: {
    ...bodyFonts,
    lineHeight: 1.5,
    fontSize: 12,
  },
}

export default typographyVariantsOptions
