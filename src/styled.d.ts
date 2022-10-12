import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      colors: {
      primary: string;
      secondary: string;
      tetriary: string;
      active_primary: string;
    };
      weight: {
      bold: string;
      semibold: string;
      medium: string;
      normal: string;
    };
  }
}