import React from "react";

interface Prop {
  name?: string;
}

const CodeName = ({ name = "HTML" }: Prop) => {
  return (
    <div className="flex items-center justify-center w-full">
      <h1 className="text-xl">{name}</h1>
    </div>
  );
};

export default CodeName;
