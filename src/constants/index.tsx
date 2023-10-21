import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import {Dimensions, Platform} from 'react-native';
import Scan from '../assets/icons/scan';
import Faster from '../assets/icons/faster';

export const API_BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/';
export const CONTENT_SPACING = 16;

export const GRADIENT_COLORS_HEAD = ['#E5C990', '#E4B046'];
export const GRADIENT_COLORS_SUB = ['#FFDE9C', '#F5C25B'];

export type PremiumTypes = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export const PREMIUM_ITEMS: PremiumTypes[] = [
  {
    id: 1,
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <Scan />,
    title: 'Unlimited',
    description: 'Plant Identify',
  },
  {
    id: 2,
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <Faster color="transparent" />,
    title: 'Faster',
    description: 'Process',
  },
  {
    id: 3,
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <Scan />,
    title: 'Detailed',
    description: 'Plant Care',
  },
];

export const SCREEN_HEIGHT = Platform.select<number>({
  android:
    Dimensions.get('screen').height - StaticSafeAreaInsets.safeAreaInsetsBottom,
  ios: Dimensions.get('window').height,
}) as number;

export default function calculateResponsiveValue(
  baseValue: number,
  factor: number,
): number {
  const referenceScreenHeight: number = 812;

  const heightFactor: number = SCREEN_HEIGHT / referenceScreenHeight;

  const responsiveValue: number = baseValue * heightFactor * factor;

  return Math.round(responsiveValue);
}
