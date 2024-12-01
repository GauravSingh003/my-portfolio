// import React, { useEffect, useState } from "react";

// const Progress = ({value = 0}) => {

//     const [percent, setPercent] = useState(value);
//     useEffect(() => {
//         setPercent(Math.min(100, Math.max(value, 0)))
//     }, [value])
//   return (
//     <>
//       <div className="rounded" id="progress">
//         <span className="fixed font-semibold">{percent.toFixed()}%</span>
//         <div style={{width: `${percent}%`}}/>
//       </div>
//     </>
//   );
// };

// export default Progress;

import React, { useEffect, useState } from "react";

const Progress = ({ value = 0 }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Set the percentage, ensuring it's between 0 and 100
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="relative rounded bg-gray-200 h-4 overflow-hidden">
      {/* Display the percentage inside the bar */}
      <span className="absolute text-center w-full text-black font-semibold">
        {percent.toFixed()}%
      </span>
      {/* Progress fill */}
      <div
        style={{
          width: `${percent}%`,
          backgroundColor: '#4caf50', // Green color for the progress fill
          height: '100%',
          transition: 'width 0.5s ease', // Smooth transition for width change
        }}
      />
    </div>
  );
};

export default Progress;

