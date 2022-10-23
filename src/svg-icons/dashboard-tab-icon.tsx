import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DashboardTabIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.137 3.294a2.333 2.333 0 0 0-3.073 0L4.897 10.44a2.333 2.333 0 0 0-.797 1.756v9.97A2.333 2.333 0 0 0 6.433 24.5H11.1a2.333 2.333 0 0 0 2.333-2.333V17.5h2.334v4.667A2.333 2.333 0 0 0 18.1 24.5h4.667a2.333 2.333 0 0 0 2.333-2.333v-9.97c0-.674-.29-1.314-.797-1.757l-8.166-7.146ZM14.6 5.05l-8.167 7.146v9.97H11.1V17.5a2.333 2.333 0 0 1 2.333-2.333h2.334A2.333 2.333 0 0 1 18.1 17.5v4.667h4.667v-9.97L14.6 5.05Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(DashboardTabIcon);
