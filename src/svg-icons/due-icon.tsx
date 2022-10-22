import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DueIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.917 8a2.667 2.667 0 0 1 2.666-2.667h21.334A2.667 2.667 0 0 1 29.583 8v16a2.667 2.667 0 0 1-2.666 2.667H5.583A2.667 2.667 0 0 1 2.917 24V8Zm24 0H5.583v16h21.334V8Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 20c0-.736.597-1.333 1.333-1.333h5.334a1.333 1.333 0 0 1 0 2.666H9.583A1.333 1.333 0 0 1 8.25 20ZM2.917 14.667c0-.737.597-1.334 1.333-1.334h24a1.333 1.333 0 0 1 0 2.667h-24a1.333 1.333 0 0 1-1.333-1.333ZM2.917 12c0-.736.597-1.333 1.333-1.333h24a1.333 1.333 0 1 1 0 2.666h-24A1.333 1.333 0 0 1 2.917 12Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(DueIcon);
