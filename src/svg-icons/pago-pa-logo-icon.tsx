import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PagoPaLogoIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      d="m34.213 18.995-.013 3.786h-2.751V10h5.086c1.635 0 2.466.443 2.479 1.33v6.241c0 .888-.792 1.319-2.388 1.319h-2.4v.104h-.013Zm2.037-7.52h-2.063v5.927h2.063v-5.927ZM4.823 22.794 4.81 26.58H2.5V13.8h4.256c1.375 0 2.063.443 2.076 1.33v6.24c0 .889-.662 1.32-1.998 1.32H4.823v.104Zm1.712-7.507H4.81v5.927h1.725v-5.927ZM15.943 22.69h-4.386c-1.284 0-1.933-.445-1.933-1.332l.013-2.598c0-.875.662-1.319 1.998-1.332h2.011v-2.14h-1.725l-.013 1.174H9.65v-1.331c0-.875.675-1.306 2.024-1.306l2.258-.026c1.336 0 2.011.444 2.011 1.319v7.571Zm-4.01-1.489h1.74l-.014-2.285h-1.725v2.285ZM20.99 22.69h-2.024c-1.337 0-1.998-.445-1.998-1.32v-6.24c.013-.887.7-1.33 2.076-1.33H23.3V25.26c0 .888-.675 1.332-2.011 1.332h-2.297c-1.337 0-2.011-.444-2.011-1.332v-1.318h2.296v1.175h1.726v-2.324l-.013-.105ZM19.265 21.2h1.725v-5.914h-1.725v5.914ZM30.41 21.358c-.012.887-.7 1.318-2.076 1.318h-2.231c-1.35 0-2.025-.443-2.025-1.318v-6.24c0-.888.675-1.319 2.025-1.319h2.296c1.337 0 1.999.444 1.999 1.319v6.24h.013Zm-2.283-6.07h-1.739v5.926h1.726l.013-5.927Z"
      fill={props.color}
    />
    <Path
      d="M47.487 11.397c0-.888-.792-1.319-2.388-1.319h-2.75c-1.61 0-2.414.444-2.414 1.319v11.41h2.75v-3.904h2.077v3.264c0 8.355-6.709 15.105-15.013 15.105-4.814 0-9.11-2.285-11.86-5.823l1.375-1.057-5.527-3.747.246 7.898 1.765-1.41c3.244 4.178 8.317 6.867 14 6.867 9.81 0 17.752-8.003 17.752-17.859l-.013-10.744Zm-2.738 6.018h-2.076v-5.874h2.076v5.874Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(PagoPaLogoIcon);