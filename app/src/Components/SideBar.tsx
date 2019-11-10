import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { NavLink, Link } from "react-router-dom";
import Button from "Components/Button";
import { getPagesSideBar } from "./__generated__/getPagesSideBar";
import { useQuery } from "@apollo/react-hooks";
import { useSimpleStore } from "Libs/simpleStore";
import { GoFile } from "react-icons/go";
import SearchBar from "Components/SearchBar";

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
  h1 {
    display: inline-block;
    padding: 10px 15px;
    color: #eee;
    background: #222;
    border-radius: 3px;
    font-size: 20px;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-size: 19px;
  color: #464646;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: #eaebea;
    color: #464646;
  }
  svg {
    margin-right: 10px;
  }
`;

const GET_PAGES = gql`
  query getPagesSideBar {
    listPages {
      title
      slug
    }
  }
`;

export default () => {
  const { data } = useQuery<getPagesSideBar>(GET_PAGES, { variables: {} });
  const pages = (data && data.listPages) || [];
  const { roles } = useSimpleStore();
  return (
    <SideBar>
      <NavHeader>
        <h1>Tiny Wiki</h1>
      </NavHeader>
      <SearchBar />
      <div>
        {pages.map(page => (
          <NavItem key={page.slug} to={`/page/${page.slug}`}>
            <GoFile /> {page.title}
          </NavItem>
        ))}
        <NavSection>
          <Link to={`/create-page`}>
            <div style={{ marginBottom: 10 }}>
              <Button>Add Page</Button>
            </div>
          </Link>
          {roles.includes("admin") && (
            <Link to={`/settings`}>
              <div style={{ marginBottom: 10 }}>
                <Button>Settings</Button>
              </div>
            </Link>
          )}
          <Link to={`/logout`}>
            <div>
              <Button>Log out</Button>
            </div>
          </Link>
        </NavSection>
      </div>
    </SideBar>
  );
};
