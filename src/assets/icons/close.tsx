import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import calculateResponsiveValue from '../../constants';

const Close = (props: any) => (
  <Svg
    width={calculateResponsiveValue(24, 1)}
    height={calculateResponsiveValue(24, 1)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.20117 16.2783C8.44531 16.5225 8.85547 16.5127 9.08984 16.2832L12 13.373L14.9053 16.2832C15.1445 16.5225 15.5547 16.5225 15.7939 16.2783C16.0332 16.0342 16.0381 15.6289 15.7988 15.3896L12.8936 12.4795L15.7988 9.57422C16.0381 9.33496 16.0381 8.92969 15.7939 8.68555C15.5498 8.44629 15.1445 8.44141 14.9053 8.68066L12 11.5908L9.08984 8.68066C8.85547 8.45117 8.44043 8.44141 8.20117 8.68555C7.96191 8.92969 7.9668 9.33984 8.19629 9.56934L11.1064 12.4795L8.19629 15.3945C7.9668 15.624 7.95703 16.0391 8.20117 16.2783Z"
      fill={props.color}
    />
  </Svg>
);

export default Close;