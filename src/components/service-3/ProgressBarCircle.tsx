"use client"
import React from "react";
import { Circle } from "rc-progress";

interface Props {
  percent: number;
}

const ProgressBarCircle: React.FC<Props> = ({ percent }) => {
  // Customize the colors and stroke width
  const circleStyle = {
    strokeWidth: 4,
    strokeColor: "#E6E6E6",
    
  };

  return (
    <>
      {/* Add animation with CSS transition */}
      <style>
        {`
          .circle-animation {
            transition: stroke-dashoffset 0.5s ease-in-out;
          }
        `}
      </style>
      <div className="item position-relative">
        <Circle
          className="circle-animation"
          percent={percent}
          {...circleStyle}
        />
         <div className="indicator-volume circular-progress">
                <span><i className="far fa-heart"> </i></span>
            </div>
      </div>
    </>
  );
};

export default ProgressBarCircle;

