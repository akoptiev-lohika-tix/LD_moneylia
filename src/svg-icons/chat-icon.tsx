import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChatIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.333 11.667a8.167 8.167 0 1 1 4.29 7.189l-2.754.917a1.167 1.167 0 0 1-1.476-1.475l.918-2.754a8.135 8.135 0 0 1-.978-3.877ZM10.5 5.833a5.833 5.833 0 0 0-4.93 8.954c.188.296.233.66.122.994l-.347 1.041 1.041-.347c.333-.111.698-.066.994.122A5.833 5.833 0 1 0 10.5 5.834Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.479 8.167h.021a8.167 8.167 0 0 1 7.19 12.044l.917 2.753a1.167 1.167 0 0 1-1.476 1.476l-2.753-.918a8.17 8.17 0 0 1-11.584-4.481 1.167 1.167 0 1 1 2.201-.773 5.836 5.836 0 0 0 8.625 2.995c.296-.188.661-.232.994-.121l1.042.347-.348-1.042a1.167 1.167 0 0 1 .108-.971l.159-.263A5.833 5.833 0 0 0 17.51 10.5l-.232.004-.111.006a1.167 1.167 0 0 1-.124-2.33l.132-.007.04-.001.263-.005Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(ChatIcon);
