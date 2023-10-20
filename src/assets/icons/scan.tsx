import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Scan = (props: any) => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.78772 1.78571C9.23415 1.78571 9.59661 2.15061 9.59661 2.60112C9.59661 3.05056 9.23521 3.41547 8.78772 3.41547L7.05622 3.41654C5.61914 3.41868 4.44992 4.59686 4.44992 6.0447V8.07361C4.44992 8.52306 4.0864 8.88903 3.63997 8.88903C3.19354 8.88903 2.83109 8.52306 2.83109 8.07361V6.0447C2.83109 3.69904 4.72628 1.78892 7.05515 1.78678L8.78666 1.78571H8.78772ZM16.412 1.78599H18.1052C20.4404 1.78599 22.3388 3.69719 22.3388 6.0482V8.0739C22.3388 8.52334 21.9774 8.88932 21.5299 8.88932C21.0835 8.88932 20.7211 8.52334 20.7211 8.0739V6.0482C20.7211 4.59608 19.5476 3.41468 18.1052 3.41468H16.412C15.9655 3.41468 15.6031 3.05085 15.6031 2.60141C15.6031 2.1509 15.9655 1.78599 16.412 1.78599ZM15.5212 5.86998H9.64961C8.30607 5.88389 7.22614 6.98931 7.23783 8.34299V9.70201C7.24102 9.86039 7.36751 9.98987 7.52482 9.99522H17.6439C17.8023 9.99094 17.9287 9.86146 17.9341 9.70201V8.34299C17.9351 7.68915 17.6843 7.06101 17.2315 6.59337C16.7818 6.13002 16.1643 5.86998 15.5212 5.86998ZM1.70277 11.6521H23.4683C23.9147 11.6521 24.2772 12.017 24.2772 12.4675C24.2772 12.917 23.9147 13.2808 23.4683 13.2808H22.3395V17.1653C22.3395 19.5174 20.44 21.4286 18.1058 21.4286H16.4126C15.9651 21.4286 15.6026 21.0636 15.6026 20.6131C15.6026 20.1637 15.9651 19.7988 16.4126 19.7988H18.1058C19.5482 19.7988 20.7217 18.6185 20.7217 17.1653V13.2808H17.9336V14.3627C17.9443 15.7164 16.8654 16.8228 15.5208 16.8357H9.6492C8.30567 16.8228 7.2268 15.7164 7.23742 14.3627V13.2808H4.44937V17.1696C4.44937 18.6174 5.61965 19.7956 7.05779 19.7977L8.78823 19.7988C9.23466 19.7988 9.59712 20.1637 9.59712 20.6131C9.59606 21.0636 9.23466 21.4286 8.78717 21.4286L7.05567 21.4275C4.72679 21.4253 2.83054 19.5152 2.83054 17.1696V13.2808H1.70277C1.25634 13.2808 0.892822 12.917 0.892822 12.4675C0.892822 12.017 1.25634 11.6521 1.70277 11.6521Z"
      fill="white"
    />
  </Svg>
);

export default Scan;
