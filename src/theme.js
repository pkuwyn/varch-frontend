import { amber, indigo, red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { zhCN } from "@material-ui/core/locale";

//color defination

let theme = createMuiTheme(
  {
    palette: {
      // type: "dark",
      primary: amber,
      // primary: {
      //   main: "#584C33",
      // },
      secondary: indigo,
      tertiary: {
        main: red[500],
        light: red[200],
        dark: red[800],
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
      // MuiToolbar: {
      //   root: {
      //     paddingLeft: "0 !important",
      //   },
      // },
      // MuiAppBar: {
      //   root: {
      //     border: "5px solid green",
      //   },
      // },

      MuiButton: {
        root: { borderRadius: "500px" },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: "200px",
        },
      },
    },
    borders: {
      bigBorder: "5px solid red",
    },
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
// console.log(theme.breakpoints);
// console.log(theme.props.MuiToolbar.root);
export default theme;
