import * as styledComponents from 'styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<styledComponents.DefaultTheme>;

export * from './darkTheme';
export * from './lightTheme';
export { css, ThemeProvider };
export default styled;
