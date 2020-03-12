import React from 'react';
import styled from "@emotion/styled";
import { colors } from "../tokens";

const Footer = styled("footer")`
  background-color: ${colors.footer};
  box-shadow: 2px -1px #dddddd;
  flex-shrink: 0;
`;

const Copyright = styled("div")`
  display: block;
  padding: 10px;
`;

export default () => (
    <Footer>
        <Copyright>
            © 2020 Aengus McMillin
        </Copyright>
    </Footer>
);