import React from "react";

const ErrorMsg = ({ error }: any) => {
  return (
    <>
      <p style={{ color: "red", marginTop: "6px", fontSize: "12px" }}>{error}</p>
    </>
  );
};

export default ErrorMsg;
