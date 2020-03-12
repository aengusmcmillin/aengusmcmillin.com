import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Site from "./Site";
import SEO from "./SEO";

export default ({ children, className = "" }) => [
  <SEO />,
  <GlobalStyles />,
  <Site>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Site>,
];
