import Typography from "typography"
import TypographyTheme from "typography-theme-lincoln"

/* TypographyTheme.overrideStyles = () => {
  return {
    headerFontFamily: ,
    
  }
}
 */
delete TypographyTheme.googleFonts
TypographyTheme.headerFontFamily = ["Quicksand", "sans-serif"];
TypographyTheme.bodyFontFamily = ["Open Sans", "sans-serif"];

const typography = new Typography(TypographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  //typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
