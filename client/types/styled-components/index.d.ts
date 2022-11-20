import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      GhostWhite: string;
      FriarGrey: string;
      DarkCerulean: string;
      Platinum: string;
      RiverBed: string;
      AquaHaze: string;
      PattensBlue: string;
      Iron: string;
    };
    fonts: {
      fontsFamily: string;
      scale: {
        BigTitle: string;
      };
    };
  }
}
