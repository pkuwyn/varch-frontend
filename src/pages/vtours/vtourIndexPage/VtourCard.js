import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// utils

// local
import { iconSet, iconColorMap } from "../config";
import { QRShare } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(4),
    },
  },
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardMedia: {
    flexBasis: "40%",
    minHeight: 300,
    cursor: "pointer",
    clipPath: `polygon(0 0, 100% 0%, 90% 100%, 0% 100%)`,
    transition: "all 0.5s",

    "&:hover": {
      transform: "scale(1.05)",
    },

    [theme.breakpoints.down("sm")]: {
      clipPath: "unset",
    },
  },
  avatar: {
    color: (props) => theme.palette[iconColorMap[props.tourType]].main,
    backgroundColor: theme.palette.common.white,
  },
  summaryText: {
    textIndent: "2em",
    flexGrow: 1,
    wordBreak: "break-all",
  },
  readMore: {
    marginLeft: "auto",
    fontWeight: 700,
    letterSpacing: "2px",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: (props) =>
        theme.palette[iconColorMap[props.tourType]].main,
      color: theme.palette.common.white,
    },
  },
}));

export default function VtourCard({ vtour, finished }) {
  const { id, learningTime, order, name, summary, tourType, tourImage, url } =
    vtour;
  const classes = useStyles({ tourType, finished });
  const theme = useTheme();
  const matchSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  //cardMedia in different places
  const cardImage = (
    <CardMedia
      image={`${process.env.REACT_APP_MEDIA_URI}${tourImage.publicUrl}`}
      className={classes.cardMedia}
      onClick={() => {
        history.push(`./vtours/${id}`);
      }}
    ></CardMedia>
  );

  const history = useHistory();
  return (
    <Box
      width={1}
      mx="auto"
      px={[1, 2, 4, 8]}
      maxWidth={[500, 600, 1]}
      className={classes.container}
    >
      <Card className={classes.root}>
        <>
          {matchSmDown || cardImage}

          <Box
            flexBasis="60%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
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
              action={<QRShare title="扫码实习" url={url} />}
              title={name}
              subheader={
                <>
                  {`大约需要${learningTime}分钟`}
                  {finished && (
                    <Box
                      color="success.main"
                      display="flex"
                      alignItems="center"
                    >
                      <CheckCircleIcon fontSize="inherit"></CheckCircleIcon>
                      已完成
                    </Box>
                  )}
                </>
              }
            />

            {matchSmDown && cardImage}

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
                component={RouterLink}
                to={`/vtours/${id}`}
              >
                开始实习
              </Button>
            </CardActions>
          </Box>
        </>
      </Card>
    </Box>
  );
}
