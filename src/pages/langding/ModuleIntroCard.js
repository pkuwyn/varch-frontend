import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "auto",
  },
  avatar: {
    color: (props) => props.color,
    backgroundColor: theme.palette.common.white,
  },
  cardMedia: {
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },

    "@media (max-width:400px)": {
      height: 200,
    },

    backgroundImage: (props) =>
      `linear-gradient(to bottom, ${props.color + "10"}, ${
        props.color + "10"
      }), url(${props.headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    transition: "all 0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  featureText: {
    display: "block",
    paddingTop: 10,
    "&:not(:last-child)": {
      borderBottom: theme.borders.smBorder,
      paddingBottom: 10,
    },
  },

  cardActionRoot: {
    backgroundColor: (props) => props.color,
    justifyContent: "flex-end",
  },
  mainActionButton: {
    color: theme.palette.common.white,
    fontWeight: 700,
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  },
}));

export default function ModuleIntroCard({
  title,
  subtitle,
  features,
  link,
  headerImage,
  color,
  iconComponent,
}) {
  const classes = useStyles({ headerImage, color });
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {iconComponent}
          </Avatar>
        }
        title={title}
        subheader={subtitle}
        titleTypographyProps={{
          variant: "h6",
        }}
      />
      <Box
        className={classes.cardMedia}
        onClick={() => {
          history.push(link);
        }}
      ></Box>
      <CardContent>
        {features.map((feature) => (
          <Typography
            variant="body2"
            color="textPrimary"
            key={feature}
            align="center"
            gutterBottom
            className={classes.featureText}
          >
            {feature}
          </Typography>
        ))}
      </CardContent>
      <CardActions
        classes={{
          root: classes.cardActionRoot,
        }}
      >
        <Button
          // variant="contained"
          className={classes.mainActionButton}
          component={RouterLink}
          to={link}
          endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
        >
          开始学习
        </Button>
      </CardActions>
    </Card>
  );
}
