import React from "react";
import { Redirect } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui
import Container from "@material-ui/core/Container";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import { categoryConfig } from "../config";
import { useMinimalCoursesCount } from "../../../utils/hooks";
import { userVar } from "../../../gql";
import CoursesIntro from "./CoursesIntro";
import CategoryCard from "./CategoryCard";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    transform: "translateY(-150px)",
    marginBottom: "-132px",
  },
}));

export default function CoursesIndexPage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);

  //获取最小教学单元总数量
  const { data: coursesCountData, error } = useMinimalCoursesCount();

  if (error) {
    console.log(error);
    return <Redirect to="/"></Redirect>;
  }
  return coursesCountData ? (
    <Box css={{ userSelect: "none" }} mb={[2, 4]}>
      <CoursesIntro
        user={user}
        totalCourses={coursesCountData._allCoursesMeta.count}
      ></CoursesIntro>
      <Container maxWidth="lg" disableGutters className={classes.cardContainer}>
        {categoryConfig.map((category) => (
          <CategoryCard key={category.type} category={category}></CategoryCard>
        ))}
      </Container>
    </Box>
  ) : null;
}
