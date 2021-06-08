import React from "react";
import {
  useQuery,
  useMutation,
  useLazyQuery,
  useReactiveVar,
} from "@apollo/client";
import { userVar } from "./gql";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useRemoteUser } from "./utils/hooks";

import Box from "@material-ui/core/Box";

import { Header } from "./ui/header";
import { Footer } from "./ui/footer";

//pages import
import { LandingPage } from "./pages/langding";
import { Account } from "./pages/account";
import { Courses } from "./pages/courses";
import { Vtours } from "./pages/vtours";
import { VirtualExcavationPage } from "./pages/virtual-excavation";

//dev Only
import DesignSystem from "./DesignSystem";

export default function App(props) {
  //call userInit Hook
  useRemoteUser();
  const user = useReactiveVar(userVar);
  return (
    user && (
      <Box display="flex" flexDirection="column">
        <Header></Header>
        <div>
          <Switch>
            <Route path="/account">
              <Account></Account>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/vtours">
              <Vtours></Vtours>
            </Route>
            <Route path="/virtual-excavation">
              <VirtualExcavationPage></VirtualExcavationPage>
            </Route>

            {/* dev Only */}
            <Route exact path="/d">
              <DesignSystem></DesignSystem>
            </Route>

            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>

            <Redirect to="/"></Redirect>
          </Switch>
        </div>
        {/* <Footer></Footer> */}
      </Box>
    )
  );
}
