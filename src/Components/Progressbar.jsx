import React, { useEffect, useState } from "react";

const Progress = ({value = 0}) => {

    const [percent, setPercent] = useState(value);
    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
    }, [value])
  return (
    <>
      <div className="rounded" id="progress">
        <span className="fixed font-semibold">{percent.toFixed()}%</span>
        <div style={{width: `${percent}%`}}/>
      </div>
    </>
  );
};

export default Progress;
