import React from "react";
import Derma from "./Derma";
import Muscles from "./Muscles";

const MassageOrBody = () => {
  return (
    <>
      <div>
        {" "}
        <h1>2. ВОЗДЕЙСТВИЕ МАССАЖА НА ОРГАНИЗМ</h1>
        <p>
          <span>Массаж</span> — это дозированное механическое воздействие на
          поверхность тела человека или какого-либо органа, осуществляемое
          руками массажиста с помощью определенных приемов или специальных
          аппаратов и проводимое с лечебной или профилактической целью.{" "}
        </p>
      </div>
      <Derma />
      <Muscles />
    </>
  );
};
export default MassageOrBody;
