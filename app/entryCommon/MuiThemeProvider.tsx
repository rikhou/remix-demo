import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FC, ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import appSelector from "redux/selectors/shared";
import { combineThemeOptions } from "theme/utils";
import { lightThemeOptions } from "theme/options";
import { Provider } from "react-redux";
import { store } from "redux/store";

interface ThemeProviderProps {
  children: ReactNode;
}

const MuiThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const themesOptions = useSelector(appSelector.getThemeOptionsList);
  const themeOptions = useMemo(
    () => ({
      light: createTheme(
        themesOptions.light
          ? combineThemeOptions(lightThemeOptions, themesOptions.light)
          : lightThemeOptions
      ),
    }),
    [themesOptions]
  );

  return <ThemeProvider theme={themeOptions.light}>{children}</ThemeProvider>;
};

const MultiProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </Provider>
  );
};

export default MultiProvider;
