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

const initValue = {
  search: ""
};

const FindPropertyManagers = ({ placeholder, button, sectionType }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(searchActions.search(values));
    actions.setSubmitting(false);
  };

  return (
    <FindPropertyManagersStyled className={sectionType}>
      <Formik enableReinitialize initialValues={initValue} onSubmit={onSubmit}>
        {() => (
          <div id="mc_embed_signup">
            <form
              action="https://facebook.us15.list-manage.com/subscribe/post?u=e168ea73f1bf8e6eddbf8a430&amp;id=8e3f993c77"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div
                id="mc_embed_signup_scroll"
                style={{ width: "80vw", paddingTop: 20 }}
              >
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_fdcb5a4b4a6cbb9721227a48f_fa1a88a0d0"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Request a demo"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    style={{
                      width: 300,
                      backgroundColor: "#039d03",
                      padding: 10,
                      borderRadius: 7,
                      color: "white",
                      fontSize: 20,
                      borderColor: "#008000"
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </FindPropertyManagersStyled>
  );
};

export default FindPropertyManagers;
export { FindPropertyManagers };
