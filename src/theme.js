import { amber, indigo, brown, lightGreen } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { zhCN } from "@material-ui/core/locale";

//color defination

let theme = createMuiTheme(
  {
    palette: {
      // type: "dark",
      primary: brown,
      // primary: {
      //   main: "#BB9D81",
      // },

      secondary: indigo,
      tertiary: {
        main: lightGreen[500],
        light: lightGreen[200],
        dark: lightGreen[800],
      },
      footer: {
        bg: "#584C33",
        text: "white",
      },
    },
    mixins: {
      footer: {},
      learnButton: {
        borderRadius: 100,
        textTransform: "none",
        borderWidth: 2,
      },
      blockMargin: {
        marginTop: "2rem",
      },
    },
    typography: {
      fontFamily: `"Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif`,
      htmlFontSize: 16,
      // fontSize: 20,
      // h3: {
      //   fontSize: "1.6rem",
      //   fontWeight: 300,
      // },
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontSize: "1rem",
      },
      tab: {
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
      },
      // tabMenu: {
      //   fontFamily: "Raleway",
      //   fontWeight: 400,
      //   fontSize: "0.8rem",
      //   textTransform: "none",
      // },
      estimate: {
        fontSize: "1rem",
        fontWeight: 300,
        textTransform: "none",
        color: "white",
      },
    },
    props: {
      // MuiToolbar: {
      //   disableGutters: true,
      // },
      MuiButton: {
        // variant: "outlined",
      },
      MuiTypography: {
        gutterBottom: true,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          a: {
            color: "inherit",
            textDecoration: "none",
          },
        },
      },

      MuiButton: {
        root: { borderRadius: "500px" },
      },
    },

    borders: {},
    shape: {
      round: "50%",
    },
  },
  zhCN
);

theme = responsiveFontSizes(theme);
theme.mixins.accountManageButton = {
  fontWeight: 700,
  letterSpacing: "4px",
  background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light});`,
  borderRadius: "100px",
};
theme.borders.smBorder = `1px solid ${theme.palette.grey[300]}`;
theme.borders.bigDownBorder = `4px solid ${theme.palette.primary.main}`;

theme.mixins.buttonLabelWithArrow = {
  position: "relative",
  "&:after": {
    transition: "opacity 0.5s",
    position: "absolute",
    right: -20,
    content: `">"`,
    opacity: 0,
  },
  "&:hover:after": {
    opacity: 1,
  },
};
// console.log(theme.breakpoints);
// console.log(theme.props.MuiToolbar.root);
export default theme;
