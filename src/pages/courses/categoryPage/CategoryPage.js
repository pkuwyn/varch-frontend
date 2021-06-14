import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local
import { categoryConfig } from "../config";
import { CourseCard } from "../components";
import CategoryIntro from "./CategoryIntro";
import {
  useMinimalCoursesOfCategoryCount,
  useFirstLevelCoursesByCategory,
} from "../../../utils/hooks";

import { userVar } from "../../../gql";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    transform: "translateY(-150px)",
    marginBottom: "-132px",
  },
}));

export default function CategoryPage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);

  const courseFinished = (id) =>
    user
      ? user.coursesFinished.map((course) => course.id).indexOf(id) !== -1
      : false;

  const { category } = useParams();
  const categoryData = categoryConfig.find(
    ({ urlName }) => urlName === category
  );

  const { data: coursesCountOfCategory } = useMinimalCoursesOfCategoryCount(
    categoryData.type
  );

  const { data: fistLevelCoursesOfCategory } = useFirstLevelCoursesByCategory(
    categoryData.type
  );

  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  return coursesCountOfCategory ? (
    <Box css={{ userSelect: "none" }} mb={[2, 4]}>
      <CategoryIntro
        user={user}
        categoryData={categoryData}
        totalCourses={coursesCountOfCategory._allCoursesMeta.count}
      ></CategoryIntro>
      {fistLevelCoursesOfCategory && (
        <Container
          maxWidth="lg"
          disableGutters
          className={classes.cardContainer}
        >
          {fistLevelCoursesOfCategory.allCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              finished={courseFinished(course.id)}
            ></CourseCard>
          ))}
        </Container>
      )}
    </Box>
  ) : null;
}
