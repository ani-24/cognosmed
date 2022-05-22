import React from "react";

const JumpToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="jump-to-top" onClick={scrollTop}>
      <i className="fas fa-caret-up jump-to-top__icon"></i>
    </div>
  );
};

export default JumpToTop;
