import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ExtractTabIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2 2.333h8.824c.65 0 1.27.271 1.712.748l5.176 5.59c.4.432.621.998.621 1.586v13.076a2.333 2.333 0 0 1-2.333 2.334h-14a2.333 2.333 0 0 1-2.333-2.334V4.667A2.333 2.333 0 0 1 7.2 2.333Zm8.824 2.334H7.2v18.666h14V10.257l-5.176-5.59Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.533 19.833c0-.644.523-1.166 1.167-1.166h7a1.167 1.167 0 0 1 0 2.333h-7a1.167 1.167 0 0 1-1.167-1.167ZM9.533 16.333c0-.644.523-1.166 1.167-1.166h7a1.167 1.167 0 0 1 0 2.333h-7a1.167 1.167 0 0 1-1.167-1.167ZM15.367 2.333c.644 0 1.166.523 1.166 1.167v5.833h5.834a1.167 1.167 0 1 1 0 2.334h-5.834A2.333 2.333 0 0 1 14.2 9.333V3.5c0-.644.522-1.167 1.167-1.167Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(ExtractTabIcon);
