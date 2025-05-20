import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: {
      red: string;
      brown: string;
      green: string;
      white: string;
    };
  }
}
