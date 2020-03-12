import React from "react";
import styled from "@emotion/styled";
import NavItems from "../config/NavItems.js";
import { Link } from "gatsby";
import { colors } from "../tokens";

const Header = styled("header")`
  background-color: ${colors.header};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  box-shadow: 2px 1px;
  z-index: 99;
`;

const Nav = styled.nav`
  height: 90px;
  display: flex;
  max-width: 800px;
  margin: auto;

  align-items: center;
  justify-content: space-between;
`;

const NavItemContainer = styled.div`
  display: flex;
  margin: 0;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px;
  align: center;
  margin-top: 0;
`;

const TitleLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const TitleText = styled('span')`
  display: block;
  font-size: 1.3rem;
  margin: 0;
  font-weight: 550;
`;

const Square = styled("div")`
  display: block;
  background: ${colors.orange800};
  align: center;
  width: 15px;
  height: 15px;
  margin: 10px;
  border-radius: 2px;

  ${TitleLink}:hover & {
    background: ${colors.orange400};
  }
`;


export default () => (
  <Header>
    <Nav>
      <TitleLink href="/">
        <Square />
        <TitleText>Aengus McMillin</TitleText>
      </TitleLink>
      <NavItemContainer>
        {NavItems.map(({ name, location }) => (
          <NavLink key={name} to={location}>
            {name}
          </NavLink>
        ))}
      </NavItemContainer>
    </Nav>
  </Header>
);
