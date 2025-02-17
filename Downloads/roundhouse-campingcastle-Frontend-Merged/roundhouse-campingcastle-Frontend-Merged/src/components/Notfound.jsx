import React from "react";
import notfound from "../assets/notfound.svg";

const Notfound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={notfound} alt="notfound" />
      <h1 className="font-semibold text-2xl">404 | Not found</h1>
    </div>
  );
};

export default Notfound;
