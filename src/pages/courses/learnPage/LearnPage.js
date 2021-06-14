import React from "react";

import { Link as RouterLink, useParams, Redirect } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui

//style
import { makeStyles } from "@material-ui/core/styles";

//icons

// utils

// local
import { categoryConfig } from "../config";
import { CourseCard } from "../components";
import LearnIntro from "./LearnIntro";
import { useCourseById } from "../../../utils/hooks";
import MinimalCourseContent from "./MinimalCourseContent";
import FatherCourseContent from "./FatherCourseContent";
import { userVar } from "../../../gql";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

export default function CategoryPage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);

  const { id } = useParams();

  const courseFinished = (id) =>
    user
      ? user.coursesFinished.map((course) => course.id).indexOf(id) !== -1
      : false;

  const { data: course, error } = useCourseById(id);

  if (error) {
    console.log(error);
    return <Redirect to="/courses"></Redirect>;
  }

  return course ? (
    <Box css={{ userSelect: "none" }} mb={[2, 4]}>
      <LearnIntro
        user={user}
        course={course.Course}
        finished={courseFinished(id)}
      ></LearnIntro>

      {course.Course.isMinimal ? (
        <MinimalCourseContent
          course={course.Course}
          finished={courseFinished(id)}
        ></MinimalCourseContent>
      ) : (
        <FatherCourseContent
          courses={course.Course.children}
        ></FatherCourseContent>
      )}
      {/* <Container maxWidth="lg" disableGutters className={classes.cardContainer}>
        {course.allCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            finished={courseFinished(course.id)}
          ></CourseCard>
        ))}
      </Container> */}
    </Box>
  ) : null;
}
