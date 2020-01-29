import React, { useEffect } from "react";
import firebase from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { StyledFirebaseAuth } from "react-firebaseui";

import { loginAction } from "../../../redux/auth/actions";
import AuthForm from "../Form/Form";
import { CONTEXT } from "../../../constants/context";
import { overlayActions } from "../../../redux/overlay/actions";
import { OVERLAY_STYLE_CLASSES } from "../../../constants/overlay";
import { AuthWrapper } from "../AuthWrapper.style";
import AuthNavigation from "../Navigation/AuthNavigation";
import Button from "../../../lib/Button/Button";
import { UI_ROUTES } from "../../../constants/routes";
import Link from "../../../lib/Link";
import { selectIsOpenGuestModal } from "../../../redux/guestModal/selectors";
import GuestModal from "../GuestModal/GuestModal";
import { guestModalActions } from "../../../redux/guestModal/actions";
import uiConfig from "../../../firebase/uiFbConfig";

const MailChimpForm = () => {
  const dispatch = useDispatch();
  const { MAIL_CHIMP } = CONTEXT;
  const { isOpen } = useSelector(selectIsOpenGuestModal);

  const handleSignIn = (values, actions) => {
    const credentials = {
      ...values
    };

    dispatch(loginAction(credentials));
  };

  useEffect(() => {
    dispatch(overlayActions.show(OVERLAY_STYLE_CLASSES.AUTH));

    return () => {
      dispatch(overlayActions.hide());
    };
  }, [dispatch]);

  const onOpenGuestModal = () => {
    dispatch(guestModalActions.show());
  };

  return (
    <AuthNavigation>
      {isOpen ? <GuestModal /> : null}

      <div className="body">
        <h1>{MAIL_CHIMP.title}</h1>

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
              style={{ width: "50vw", height: "50vh", paddingTop: 20 }}
            >
              <h3>
                Thanks for your interest in Coraway! You will be contacted
                regarding your property management needs momentarily!
              </h3>

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
              <div className="clear" style={{ paddingTop: 70 }}>
                <input
                  type="submit"
                  value="Request a demo"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  style={{
                    width: 300,
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 7,
                    color: "white",
                    fontSize: 20
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthNavigation>
  );
};

export default MailChimpForm;
export { MailChimpForm };
