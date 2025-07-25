import React from "react";

import { useLogin } from '../hooks/useLogin';

const LoginButton = () => {
  const { performLogin } = useLogin();

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center">
          <p>Please <a className="link-underline-none link-underline-hover cursor-pointer" onClick={performLogin}>Login</a> to proceed...</p>
        </div>
      </div>
    </>
  );
};

export default LoginButton;
