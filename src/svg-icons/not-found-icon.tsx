import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NotFoundIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.269 2.586A2 2 0 0 1 8.683 2h6.634a2 2 0 0 1 1.414.586l4.683 4.683A2 2 0 0 1 22 8.683v6.634a2 2 0 0 1-.586 1.414l-4.683 4.683a2 2 0 0 1-1.414.586H8.683a2 2 0 0 1-1.414-.586l-4.683-4.683A2 2 0 0 1 2 15.317V8.683a2 2 0 0 1 .586-1.414l4.683-4.683ZM15.317 4H8.683L4 8.683v6.634L8.683 20h6.634L20 15.317V8.683L15.317 4ZM10.95 15.45a1 1 0 0 1 1-1h.1a1 1 0 0 1 1 1v.1a1 1 0 0 1-1 1h-.1a1 1 0 0 1-1-1v-.1Zm2.05-7a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(NotFoundIcon);
