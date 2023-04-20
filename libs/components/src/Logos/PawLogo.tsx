import React, { FC } from "react";

export interface PawLogoProps {
   color: string;
   size: number;
}

export const PawLogo: FC<PawLogoProps> = ({ color, size = 30 }) => {
   return (
      <svg
         version="1.0"
         xmlns="http://www.w3.org/2000/svg"
         width={`${size}px`}
         height={`${size}px`}
         viewBox="0 0 48.000000 48.000000"
         preserveAspectRatio="xMidYMid meet"
      >
         <g
            transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
            fill={color}
            stroke="none"
         >
            <path
               d="M126 434 c-35 -35 -2 -134 44 -134 49 0 62 83 19 129 -24 25 -42 27
-63 5z"
            />
            <path
               d="M291 426 c-40 -42 -27 -126 18 -126 52 0 86 116 42 140 -28 14 -35
13 -60 -14z"
            />
            <path
               d="M16 314 c-43 -43 23 -132 69 -94 23 19 19 76 -7 94 -28 20 -43 20
-62 0z"
            />
            <path
               d="M400 310 c-36 -36 -21 -100 22 -100 46 0 75 72 42 104 -21 21 -40 20
-64 -4z"
            />
            <path
               d="M195 258 c-36 -19 -96 -82 -116 -120 -24 -47 -24 -70 1 -93 16 -14
28 -16 67 -10 65 10 128 10 186 0 40 -6 51 -5 68 11 28 25 20 71 -21 127 -57
78 -134 113 -185 85z"
            />
         </g>
      </svg>
   );
};
