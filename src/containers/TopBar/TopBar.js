import React, { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { WrapperStyle } from "./TopBar.style";
import Link from "../../lib/Link";
import Button from "../../lib/Button";
import { THEME } from "../../constants/theme";
import { UI_ROUTES } from "../../constants/routes";
import { useVerticalParallax } from "../../utils/hooks/use-vertical-parallax";
import { selectIsRootPage } from "../../redux/router/selectors";
import { isLoggedInSelector, userSelector } from "../../redux/auth/selector";
import { logout } from "../../redux/auth/actions";
import { DropMenu } from "./DropMenu";

const TopBar = ({ styleClass, button }) => {
  let wrapperRef = useRef();
  const dispatch = useDispatch();
  const { isRootPage } = useSelector(selectIsRootPage);
  const { loggedIn } = useSelector(isLoggedInSelector);
  const { user } = useSelector(userSelector);

  useVerticalParallax(() => wrapperRef.current);

  const signOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

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
      width: 196.03px;
      border: #399343 solid 0.5px;
    }
  `;
  return (
    <WrapperStyle ref={wrapperRef} className={styleClass}>
      <div className="left">
        <Link to={UI_ROUTES.root} className="link-wrapper-by-logo">
          <div className="logos-wrapper">
            <div className="logo" />
          </div>
        </Link>
      </div>

      <div className="right">
        {isRootPage &&
          (!loggedIn ? (
            <>
              <LibButton className="btn header-button">
                <a
                  href="https://coraway.typeform.com/to/Ttjs8g"
                  className="btn header-button"
                  type="submit"
                >
                  Get Started
                </a>
              </LibButton>
              {/* <Link to={UI_ROUTES.signUp} className="link">
                Sign up
              </Link>
              <Link to={UI_ROUTES.login} className="link">
                Login
              </Link> */}
            </>
          ) : (
            <>
              <DropMenu user={user} signOut={signOut} />
            </>
          ))}
      </div>
    </WrapperStyle>
  );
};

export default TopBar;
export { TopBar };
