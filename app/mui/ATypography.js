import React from "react";
import { Typography } from "@mui/material";

/**
 * @template P
 * @typedef {import('@mui/material').TypographyTypeMap<P>} TypographyTypeMap
 */

/**
 * @template M
 * @typedef {import('@mui/material/OverridableComponent').OverridableComponent<M>} OverridableComponent
 */

/**
 * @typedef {object} InnerProps
 * @prop {string} [dataRef] - automation testing reference id
 * @prop {boolean} [w6]   - 600 by default
 * @prop {boolean} [w7]   - 700 by default
 * @typedef {InnerProps} Props
 */

/**
 * Core-UI ATypography Component
 *
 * Demos from material-ui:
 *
 * - [Typography](https://material-ui.com/components/typography/)
 * - [Breadcrumbs](https://material-ui.com/components/breadcrumbs/)
 *
 * API reference from material-ui:
 *
 * - [Typography Component API](https://material-ui.com/api/typography/)
 * @type {OverridableComponent<TypographyTypeMap<Props>>}
 */
const ATypography = React.forwardRef(
  (
    {
      dataRef = null,
      // ss1 = false,
      // ss2 = false,
      // ss3 = false,
      // s0 = false,
      // s1 = false,
      // s2 = false,
      // s3 = false,
      // s4 = false,
      // s5 = false,
      // s6 = false,
      // s7 = false,
      // s8 = false,
      // s9 = false,
      w6 = false,
      w7 = false,
      ...props
    },
    ref
  ) => {
    let size;
    let weight;
    // if (s0) {
    //   size = '1rem' // 16px
    // } else
    // if (s1) {
    //   size = '1.125rem' // 18px
    // } else
    // if (s2) {
    //   size = '1.25rem' // 20px
    // } else
    // if (s3) {
    //   size = '1.5rem' // 24px
    // } else
    // if (s4) {
    //   size = '1.75rem' // 28px
    // } else
    // if (s5) {
    //   size = '2rem' // 32px
    // } else
    // if (s6) {
    //   size = '2.25rem' // 36px
    // } else if (s7) {
    //   size = '2.5rem' // 40px
    // } else if (s8) {
    //   size = '3rem' // 48px
    // } else if (s9) {
    //   size = '3.5rem' // 56px
    // }
    // else if (ss1) {
    //   size = '0.875rem' // 14px
    // }
    // else if (ss2) {
    //   size = '0.75rem' // 12px
    // }
    // else if (ss3) {
    //   size = '0.625rem' // 10px
    // }
    if (w6) {
      weight = 600;
    } else if (w7) {
      weight = 700;
    }

    const { sx = {}, component } = props;
    const fontSx = { ...sx };
    const overrideComp = component || "p";
    if (size) {
      fontSx.fontSize = size;
    }
    if (weight) {
      fontSx.fontWeight = weight;
    }

    return (
      <Typography
        data-ref={dataRef}
        {...props}
        ref={ref}
        sx={fontSx}
        component={overrideComp}
      />
    );
  }
);

ATypography.displayName = "ATypography";

export default ATypography;
