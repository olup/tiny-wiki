import { H1 } from "@blueprintjs/core";
import React from "react";
import Textarea from "react-autosize-textarea";
import styled from "styled-components";
import { PageState } from "./store";

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

const StyledContentInput = styled(Textarea)`
  padding: 10px;
  border: 2px dashed transparent;
  outline: none;
  width: 100%;
  font: inherit;
  line-height: 1.8;
  resize: none;
  overflow: hidden;
  &:hover,
  &:focus {
    //background-color: #f9f9f9;
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
      <H1>
        <StyledTitleInput
          placeholder="Title"
          value={page.title}
          onChange={e => updatePage({ title: e.target.value })}
        />
      </H1>
      <StyledContentInput
        placeholder="Write markdown ..."
        value={page.content || ""}
        onChange={(e: any) => updatePage({ content: e.target.value })}
      />
    </StyledEditor>
  );
};
