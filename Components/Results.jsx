import React from "react";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => {
        return <div>{result.original_title}</div>;
      })}
    </div>
  );
}

export default Results;
