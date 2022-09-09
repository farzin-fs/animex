import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      border: string;
      textPrimary: string;
      textSecondary: string;
      accent: string;
      accentWithAlpha: string;
    };
  }
}
