import React from "react";

type Props = {
  url: string;
};

const Image = ({ url }: Props) => {
  return (
    <div>
      <img src={url} />
    </div>
  );
};

export default Image;
