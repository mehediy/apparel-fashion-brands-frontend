import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[300px]">
      <div className="lds-ring">
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
