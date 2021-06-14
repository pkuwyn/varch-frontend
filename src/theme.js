import { indigo, brown, lightGreen } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
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
      returnFab: {
        position: "fixed",
        top: 100,
        left: 16,
        zIndex: 1000,
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
  background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
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

//子元素除了最后一个向下margin
theme.mixins.childrenMargin = {
  "& > *:not(:last-child)": {
    marginBottom: theme.spacing(4),
  },
};
//全局配置所见即所得文章内容显示方式
theme.tinymce = {
  "& *": {
    fontFamily: `"Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif`,
  },
  "& table": {
    maxWidth: "100% ",
    tableLayout: "fixed",
    wordBreak: "break-all",
  },
  "& img": {
    maxWidth: 960,
    width: "85%",
    height: "unset",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  "& a": {
    color: "blue",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[1],
    },
  },
  "& h1": {
    fontSize: "2rem",
  },
  "& h3": {
    fontSize: "1.5rem",
  },
  "& h6": {
    lineHeight: 0,
    marginTop: "2px",

    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },

    fontWeight: 700,
    color: theme.palette.grey[500],
  },
  "& p,li": {
    fontSize: "1.25rem",
    textIndent: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  "& li": {
    color: theme.palette.grey[600],
    textIndent: 0,
  },
};

export default theme;
