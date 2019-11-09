import React from "react";
import styled from "styled-components";

const Button = styled.div<{ block?: boolean }>`
  display: ${props => (props.block ? "block" : "inline-block")};
  margin-right: ${props => (props.block ? 0 : 10)}px;
  margin-bottom: ${props => (props.block ? 10 : 0)}px;
  border-bottom: 1px dashed;
  color: #000;
  opacity: 0.5;
  padding-bottom: 5px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default Button;
