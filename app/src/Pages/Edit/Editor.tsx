import React from "react";
import styled from "styled-components";
import { PageState } from "./store";
import MarkdownEditor from "Components/MarkdownEditor";

const StyledTitleInput = styled.input`
  padding: 10px;
  border: 2px dashed transparent;

  outline: none;
  font: inherit;
  width: 100%;
  font-size: 50px;
  &:hover,
  &:focus {
    border-color: #ddd;
  }
`;

const StyledEditor = styled.div`
  margin: 10px -10px;
`;

export default () => {
  const page = PageState.useStoreState(state => state.page);
  const updatePage = PageState.useStoreActions(actions => actions.updatePage);
  if (!page) return null;
  return (
    <StyledEditor>
      <h1>
        <StyledTitleInput
          placeholder="Title"
          value={page.title}
          onChange={e => updatePage({ title: e.target.value })}
        />
      </h1>
      <MarkdownEditor
        value={page.content || ""}
        onChange={(content: string) => updatePage({ content })}
      />
    </StyledEditor>
  );
};
