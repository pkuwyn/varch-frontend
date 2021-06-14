import React from "react";
import { useReactiveVar } from "@apollo/client";

//mui
import Container from "@material-ui/core/Container";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import { CourseCard } from "../components";

import { userVar } from "../../../gql";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    transform: "translateY(-150px)",
    marginBottom: "-132px",
  },
}));

export default function FatherCourseContent({ courses }) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);

  const courseFinished = (id) =>
    user
      ? user.coursesFinished.map((course) => course.id).indexOf(id) !== -1
      : false;

  return (
    <Box css={{ userSelect: "none" }} mb={[2, 4]}>
      <Container maxWidth="lg" disableGutters className={classes.cardContainer}>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            finished={courseFinished(course.id)}
          ></CourseCard>
        ))}
      </Container>
    </Box>
  );
}
