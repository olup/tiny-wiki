import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "react-autosize-textarea";
import getCaretPosition from "textarea-caret";
import slugify from "slugify";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
  mdEditorSearchPages,
  mdEditorSearchPagesVariables
} from "./__generated__/mdEditorSearchPages";

const SEARCH_PAGES = gql`
  query mdEditorSearchPages($search: String!) {
    pages(
      where: {
        title: { contains: $search }
        OR: { slug: { contains: $search } }
      }
    ) {
      title
      slug
    }
  }
`;

const Container = styled.div`
  position: relative;
`;

const Suggestions = styled.div`
  position: absolute;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const Suggestion = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
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

/** @TODO type this better and componentalize it */
const SuggestionList = ({
  search = "",
  position = [0, 0],
  onSelect = (choice: { label: string; key: string }) => {}
}) => {
  const { data } = useQuery<mdEditorSearchPages, mdEditorSearchPagesVariables>(
    SEARCH_PAGES,
    {
      variables: { search }
    }
  );

  const suggestions =
    (data &&
      data.pages
        .slice(0, 5)
        .map(page => ({ label: page.title, key: page.slug }))) ||
    [];

  const returnNewPage = () => {
    onSelect({ label: search, key: slugify(search, { lower: true }) });
  };
  return (
    <Suggestions style={{ top: position[0] - 7, left: position[1] + 10 }}>
      {data &&
        suggestions.map(suggestion => (
          <Suggestion onClick={() => onSelect(suggestion)}>
            {suggestion.label}
          </Suggestion>
        ))}
      {search && (
        <Suggestion onClick={returnNewPage}>New : {search}</Suggestion>
      )}
    </Suggestions>
  );
};

export default ({
  value,
  onChange: onChangeParent
}: {
  value: string;
  onChange: (content: string) => void;
}) => {
  const trigger = "@";
  const [suggest, setSuggest] = useState(false);
  const [search, setSearch] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [caretPosition2d, setCaretPosition2d] = useState([0, 0]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    const content = textarea.value;
    const caretPosition = textarea.selectionStart;

    const contentAtCaretPosition = content.slice(0, caretPosition);

    if (contentAtCaretPosition.endsWith(trigger)) {
      setSuggest(true);
    }
    if (suggest) {
      setSearch(
        content.slice(
          contentAtCaretPosition.lastIndexOf(trigger) + trigger.length,
          caretPosition
        )
      );
    }
    const position = getCaretPosition(textarea, caretPosition);
    setCaretPosition2d([position.top, position.left]);
    setCursorPosition(caretPosition);
    onChangeParent(content);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (suggest && e.keyCode === 27) {
      e.preventDefault();
      setSuggest(false);
    }
    if (suggest && !search && e.keyCode === 8) {
      e.preventDefault();
      setSuggest(false);
    }
  };

  const insertPageLink = (selection: { label: string; key: string }) => {
    if (suggest) {
      const link = `[${selection.label}](@${selection.key})`;
      const replaceEnd = cursorPosition;
      const replaceStart = value.slice(0, replaceEnd).lastIndexOf(trigger);
      const content =
        value.slice(0, replaceStart) + link + value.slice(replaceEnd);
      onChangeParent(content);
      setSuggest(false);
    }
  };

  return (
    <Container>
      <StyledContentInput
        placeholder="Write markdown ..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {suggest && (
        <SuggestionList
          position={caretPosition2d}
          search={search}
          onSelect={insertPageLink}
        />
      )}
    </Container>
  );
};
