import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PaidIcon = (props: SvgProps) => (
  <Svg width={props.height} height={props.width} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.75 5.333C10.86 5.333 6.083 10.11 6.083 16S10.86 26.667 16.75 26.667 27.417 21.89 27.417 16 22.64 5.333 16.75 5.333ZM3.417 16c0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.75 2.667c.736 0 1.333.597 1.333 1.333v11.479l7.647 8.283a1.333 1.333 0 0 1-1.96 1.81l-8-8.668a1.334 1.334 0 0 1-.353-.904V4c0-.736.597-1.333 1.333-1.333Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.417 16c0-.736.597-1.333 1.333-1.333h12a1.333 1.333 0 1 1 0 2.666h-12A1.333 1.333 0 0 1 15.417 16Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(PaidIcon);
