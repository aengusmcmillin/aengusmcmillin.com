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
  padding: 4px 0px 4px 30px;
  font-size: 10pt;
`;

export default () => (
    <Footer>
        <Copyright>
            © 2020 Aengus McMillin
        </Copyright>
    </Footer>
);