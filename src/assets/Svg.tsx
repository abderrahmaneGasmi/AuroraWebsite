import React, { MouseEventHandler } from "react";
interface svgProps {
  id?: string;
  click?: MouseEventHandler;
  classlist?: string;
  view?: string;
  path?: string;
  pathlist?: string[];
  style?: React.CSSProperties;
}
export default function Svg(props: svgProps) {
  return (
    <svg
      id={props.id}
      onClick={props.click}
      className={props.classlist}
      viewBox={props.view}
      style={props.style}
    >
      <g>
        {props.pathlist &&
          props.pathlist.map((path, id) => {
            return <path key={id} d={path}></path>;
          })}
        {props.path && <path d={props.path}></path>}
      </g>
    </svg>
  );
}
