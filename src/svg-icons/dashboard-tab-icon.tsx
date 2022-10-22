import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DashboardTabIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.137 1.294a2.333 2.333 0 0 0-3.073 0L.897 8.44A2.333 2.333 0 0 0 .1 10.196v9.97A2.333 2.333 0 0 0 2.433 22.5H7.1a2.333 2.333 0 0 0 2.333-2.333V15.5h2.334v4.667A2.333 2.333 0 0 0 14.1 22.5h4.667a2.333 2.333 0 0 0 2.333-2.333v-9.97c0-.674-.29-1.314-.797-1.757l-8.166-7.146ZM10.6 3.05l-8.167 7.146v9.97H7.1V15.5a2.333 2.333 0 0 1 2.333-2.333h2.334A2.333 2.333 0 0 1 14.1 15.5v4.667h4.667v-9.97L10.6 3.05Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(DashboardTabIcon);
