import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PaymentArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L14.586 12 8.293 5.707a1 1 0 0 1 0-1.414Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(PaymentArrowIcon);
