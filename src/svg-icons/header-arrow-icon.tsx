import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HeaderArrowIcon = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.325 5.008a1.166 1.166 0 0 1 0 1.65L10.983 14l7.342 7.342a1.166 1.166 0 1 1-1.65 1.65l-8.167-8.167a1.167 1.167 0 0 1 0-1.65l8.167-8.167a1.167 1.167 0 0 1 1.65 0Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(HeaderArrowIcon);
