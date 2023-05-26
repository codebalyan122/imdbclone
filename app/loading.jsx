import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center h-96">
      <Image src={"/spinner.svg"} alt="loading..." height={36} width={36} />
    </div>
  );
}

export default Loading;
