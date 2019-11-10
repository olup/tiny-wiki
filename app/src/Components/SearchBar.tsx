import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const SearchInput = styled.input`
  padding: 10px;
  border: none;
  background-color: #eee;
  padding-left: 30px;
  width: 100%;
  margin-bottom: 10px;
  font-family: inherit;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
  transition: 0.2s;
  &:focus {
    box-shadow: -2px 2px 0px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
`;

export default () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && search) {
      history.push(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <div>
      <SearchInput
        placeholder="Search"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
