import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ModularityIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      d="M26.25 11.333A1.334 1.334 0 0 0 27.583 10V6a1.332 1.332 0 0 0-.911-1.264l-12-4a1.336 1.336 0 0 0-.844 0l-12 4A1.332 1.332 0 0 0 .917 6v4a1.333 1.333 0 0 0 1.333 1.333h1.333v9.58a3.993 3.993 0 0 0-2.666 3.754v2.666a1.333 1.333 0 0 0 1.333 1.334h24a1.332 1.332 0 0 0 1.333-1.334v-2.666a3.993 3.993 0 0 0-2.666-3.755v-9.579h1.333ZM24.917 26H3.583v-1.333a1.335 1.335 0 0 1 1.334-1.334h18.666a1.334 1.334 0 0 1 1.334 1.334V26ZM6.25 20.667v-9.334h2.667v9.334H6.25Zm5.333 0v-9.334h5.334v9.334h-5.334Zm8 0v-9.334h2.667v9.334h-2.667Zm-16-12V6.96L14.25 3.405l10.667 3.556v1.706H3.583Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(ModularityIcon);
