import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import ShareIcon from "@material-ui/icons/Share";

// utils
import clsx from "clsx";

// local
import { iconSet } from "../config";

//box import for high priority
import Box from "@material-ui/core/Box";

const iconColorMap = { pano: "primary", model: "secondary", html: "tertiary" };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardMedia: {
    flexBasis: "40%",
    height: 300,
    cursor: "pointer",
    clipPath: `polygon(0 0, 100% 0%, 90% 100%, 0% 100%)`,
    transition: "all 0.5s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  avatar: {
    color: (props) => theme.palette[iconColorMap[props.tourType]].main,
    backgroundColor: theme.palette.common.white,
  },
  summaryText: {
    textIndent: "2em",
    flexGrow: 1,
  },
  readMore: {
    marginLeft: "auto",
    fontWeight: 700,
    letterSpacing: "2px",
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

export default function VtourCard({ vtour }) {
  const { id, learningTime, order, name, summary, tourType, tourImage, url } =
    vtour;
  console.log(vtour);
  const classes = useStyles({ tourType });
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();
  return (
    <Box
      color="secondary.light"
      width={1}
      px={{
        xs: 1,
        sm: 2,
        md: 4,
        lg: 6,
      }}
      mb={4}
    >
      <Card className={classes.root}>
        <CardMedia
          image={`${process.env.REACT_APP_MEDIA_URI}${tourImage.publicUrl}`}
          className={classes.cardMedia}
          onClick={() => {
            history.push(`./vtours/${id}`);
          }}
        ></CardMedia>

        <Box
          flexBasis="60%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          height={300}
        >
          <CardHeader
            avatar={
              <Avatar aria-label={tourType} className={classes.avatar}>
                {iconSet[tourType]}
              </Avatar>
            }
            titleTypographyProps={{
              variant: "h5",
            }}
            action={
              <IconButton aria-label="share">
                <ShareIcon></ShareIcon>
              </IconButton>
            }
            title={name}
            subheader={`大约需要${learningTime}分钟`}
          />

          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              className={classes.summaryText}
            >
              {summary}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              className={classes.readMore}
              variant="outlined"
              color="primary"
            >
              开始学习
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
