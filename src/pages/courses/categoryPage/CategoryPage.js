import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui

import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// utils

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
  fab: {
    ...theme.mixins.returnFab,
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

  return coursesCountOfCategory ? (
    <Box css={{ userSelect: "none" }} mb={[2, 4]}>
      <Fab
        aria-label="返回上一级"
        className={classes.fab}
        color="primary"
        component={RouterLink}
        size="small"
        to="/courses"
      >
        <ArrowBackIcon></ArrowBackIcon>
      </Fab>
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
