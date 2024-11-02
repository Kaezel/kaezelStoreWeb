import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { ToS } from "./ToS";
import { Footer } from "../common/Footer";
import { ScrollToTopButton } from "../common/ScrollToTopButton";

export const Pages = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== "/terms-of-service" && <Header />}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/terms-of-service" component={ToS}></Route>
      </Switch>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
