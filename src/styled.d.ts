// styled.d.ts
import "styled-components";
import { Theme } from "./infrastructure/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}
