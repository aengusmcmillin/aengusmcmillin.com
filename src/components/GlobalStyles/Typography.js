import React from "react";
import { Global, css } from "@emotion/core";
import { colors, media, fonts } from "../../tokens";

export default () => {
  return (
    <Global
      styles={css`
        html,
        body {
          color: ${colors.text};
          font-family: ${fonts.default};
          font-size: ${fonts.sizeSm};
          line-height: 1.5;
          text-decoration-skip: ink;
          @media ${media.medium} {
            font-size: ${fonts.sizeSm};
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${colors.darkText};
          margin: 35px auto 10px;
          border-bottom: 2px dashed #ebebeb;
          font-family: ${fonts.heading};
          line-height: 1.4;
        }

        h1 {
          border-bottom: 3px dashed #ededed;
        }

        h1 {
          font-size: 1.75rem;
        }
        h2 {
          font-size: 1.5625rem;
        }
        h3 {
          font-size: 1.25rem;
        }
        h4 {
          font-size: 1.125rem;
        }
        h5 {
          font-size: 1rem;
        }
        h6 {
          font-size: 0.875rem;
        }

        pre {
          background: ${colors.gray700};
          color: ${colors.gray100};
          padding: 20px;
          border-radius: 5px;
          font-size: ${fonts.code};
        }

        a {
          text-decoration: none;
          color: ${colors.orange900};

          &:hover {
            color: ${colors.orange500};
          }
        }

        li + li {
          margin-top: 0.5rem;
        }

        pre {
          width: 100%;
          max-width: 600px;
          overflow-x: auto;
        }

        pre:hover,
        pre:focus {
          min-width: min-content;
        }

        code {
          font-family: Consolas, "Andale Mono WT", "Andale Mono",
            "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
            "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L",
            Monaco, "Courier New", Courier, monospace;
        }
      `}
    />
  );
};
