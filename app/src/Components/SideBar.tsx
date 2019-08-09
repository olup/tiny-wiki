import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import { getPagesSideBar } from "./__generated__/getPagesSideBar";
import { useQuery } from "@apollo/react-hooks";

const SideBar = styled.div`
  width: 350px;
  background-color: #f4f5f4;
`;

const NavSection = styled.div`
  padding: 10px 30px;
`;

const NavHeader = styled.div`
  padding: 20px 30px;
  font-size: 20px;
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 10px 30px;
  font-size: 19px;
  color: #464646;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: #eaebea;
    color: #464646;
  }
`;

const GET_PAGES = gql`
  query getPagesSideBar {
    findManyPage {
      title
      slug
    }
  }
`;

export default () => {
  const { data } = useQuery<getPagesSideBar>(GET_PAGES, { variables: {} });
  const pages = (data && data.findManyPage) || [];
  return (
    <SideBar>
      <NavHeader>
        <h1>Tiny Wiki</h1>
      </NavHeader>
      <div>
        {pages.map(page => (
          <NavItem key={page.slug} to={`/page/${page.slug}`}>
            {page.title}
          </NavItem>
        ))}
        <NavSection>
          <Link to={`/page/create`}>
            <Button minimal icon="plus">
              Add Page
            </Button>
          </Link>
          <Link to={`/settings`}>
            <Button minimal icon="cog">
              Settings
            </Button>
          </Link>
        </NavSection>
      </div>
    </SideBar>
  );
};
