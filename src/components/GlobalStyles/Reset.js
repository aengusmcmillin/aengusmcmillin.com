import React from "react";
import { Global, css } from "@emotion/core";

export default () => (
  <Global
    styles={css`
      body {
        min-height: 100vh;
      }
      #___gatsby, #gatsby-focus-wrapper {
        min-height: 100vh;
      }
      * {
        box-sizing: border-box;
        margin: 0;
      }
      * + * {
        margin-top: 1rem;
      }
    `}
  />
);
