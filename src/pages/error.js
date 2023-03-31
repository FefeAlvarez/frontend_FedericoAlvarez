import { Link } from "react-router-dom";
import { Fragment } from "react";

export const Error = () => {
  return (
    <Fragment>
      <h1> ERROR: THIS PAGE IS NOT FOUND</h1>

      <Link to="/"> Back Home </Link>
    </Fragment>
  );
};
