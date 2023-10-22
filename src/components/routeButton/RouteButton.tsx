import React from "react";
import { Link } from "react-router-dom";
import "./routeButton.sass";

export type propsType = {
  linkTo: string;
  buttonType: string;
  buttonText: string;
};

export default function RouteButton({
  linkTo,
  buttonType,
  buttonText,
}: propsType) {
  return (
    <>
      <Link to={`/${linkTo}`}>
        <div className={`Button ${buttonType}`}>{buttonText}</div>
      </Link>
    </>
  );
}
