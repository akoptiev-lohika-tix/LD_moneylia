import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UserIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM8 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-8a8 8 0 0 0-5.292 14A7.972 7.972 0 0 1 10 14c2.029 0 3.882.756 5.291 2A8 8 0 0 0 10 2Zm0 16c-1.278 0-2.486-.3-3.557-.832A5.97 5.97 0 0 1 10 16c1.332 0 2.561.433 3.557 1.168A7.967 7.967 0 0 1 10 18Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(UserIcon);
