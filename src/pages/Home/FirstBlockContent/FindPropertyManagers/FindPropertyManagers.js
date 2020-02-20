import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { UI_ROUTES } from "../../../../constants/routes";
import { FindPropertyManagersStyled } from "./FindPropertyManagers.style";
import Input from "../../../../lib/Input/Input";
import { Button } from "../../../../lib/Button";
import searchActions from "../../../../redux/search/actions";
import Link from "../../../../lib/Link";
import { CONTEXT } from "../../../../constants/context";
import { THEME } from "../../../../constants/theme";
import styled from "styled-components";

const initValue = {
  search: ""
};

const { bg, text, colors } = THEME;
const LibButton = styled.button`
  background-color: ${bg.button};
  color: ${text.invert};
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }

  &.FIND_MANAGER_TODAY {
    background: ${colors.grayLight};
    font-weight: 500;
    color: ${colors.success};
  }

  &.header-button {
    width: 266.03px;
    padding: 10px;
    border: #399343 solid 0.5px;
    -webkit-appearance: none;
  }
`;

const FindPropertyManagers = ({ placeholder, button, sectionType }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(searchActions.search(values));
    actions.setSubmitting(false);
  };

  return (
    <LibButton className="btn header-button">
      <a
        href="https://coraway.typeform.com/to/Ttjs8g"
        className="btn header-button"
        type="submit"
        style={{ color: "#ffffff", fontSize: 20, WebkitAppearance: "none" }}
      >
        Get Started
      </a>
    </LibButton>
  );
};

export default FindPropertyManagers;
export { FindPropertyManagers };
