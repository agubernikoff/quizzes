import React from "react";
import { useState, useEffect } from "react";

function Loading() {
  const [index, setIndex] = useState(13);
  const loading = "...Loading...";
  const loadingArray = loading.split("");
  console.log(index);
  useEffect(() =>
    setTimeout(() => {
      let a = index > -13 ? setIndex(index - 1) : null;
      if (index === -13) setIndex(12);
    }, 111)
  );
  return (
    <div>
      <h4>
        {loadingArray.splice(index)}
        {loadingArray}
      </h4>
    </div>
  );
}

export default Loading;
