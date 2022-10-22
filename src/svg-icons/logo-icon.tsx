import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LogoIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      d="M8.695 19.674c-2.406 2.371-6.48 2.362-7.617-.799a13.487 13.487 0 0 1 .257-9.8A13.709 13.709 0 0 1 6.44 2.944 14.001 14.001 0 0 1 14.14.64a14 14 0 0 1 7.7 2.303 13.708 13.708 0 0 1 5.105 6.133 13.487 13.487 0 0 1 .257 9.8c-1.138 3.16-5.211 3.17-7.617.798l-3.713-3.66c-.354-.35-.317-.927-.22-1.412a1.5 1.5 0 0 0-.087-.879 1.525 1.525 0 0 0-.568-.682 1.558 1.558 0 0 0-1.714 0 1.524 1.524 0 0 0-.567.682 1.5 1.5 0 0 0-.088.878c.098.486.134 1.062-.22 1.412l-3.713 3.66Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(LogoIcon);
