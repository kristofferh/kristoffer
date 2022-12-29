import React from "react";

interface Props {
  width?: number;
  height?: number;
}

export const KHLogo: React.FC<Props> = ({ width = 528, height = 240 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 528 240"
    fill="black"
    preserveAspectRatio="xMidYMid meet"
  >
    <g className="kh-logo--k">
      <path d="M20 0H0V240H20V0Z" />
      <path d="M60 0H40V56L60 76V0Z" />
      <path d="M60 104L40 84V240H60V104Z" />
      <path d="M140.763 0L62.5 78.5L76.5 92.5L169 0H140.763Z" />
      <path d="M60 131L168 240L196.142 240L60 104L60 131Z" />
      <path d="M118 106L104.5 92.5L196.5 0H225L118 106Z" />
      <path d="M90.5 106.5L224 240L252 240L104.5 92.5L90.5 106.5Z" />
    </g>
    <g>
      <path d="M332.264 0H312.264V240H332.264V0Z" />
      <path d="M372.264 157H352.264V240H372.264V157Z" />
      <path d="M372.264 0H352.264V117H372.264V0Z" />
      <path d="M487.264 0H467.264V117H487.264V0Z" />
      <path d="M487.264 157H467.264V240H487.264V157Z" />
      <path d="M372.264 97V117H467.264V97H372.264Z" />
      <path d="M352.264 137V157H487.264V137H352.264Z" />
      <path d="M527.264 0H507.264V240H527.264V0Z" />
    </g>
  </svg>
);
