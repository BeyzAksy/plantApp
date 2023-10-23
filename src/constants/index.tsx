import {Dimensions, PixelRatio} from 'react-native';

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

export type PremiumOptionTypes = {
  id: number;
  title: string;
  description: string;
  value: string;
};

export const PREMIUM_ITEMS: PremiumTypes[] = [
  {
    id: 1,
    icon: (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Scan size={18} />
    ),
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
    icon: <Scan size={18} />,
    title: 'Detailed',
    description: 'Plant Care',
  },
];

export const PREMIUM_OPTIONS: PremiumOptionTypes[] = [
  {
    id: 1,
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    value: 'monthly',
  },
  {
    id: 2,
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    value: 'yearly',
  },
];

// Dimensions

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export default function calculateResponsiveValue(
  baseValue: number,
  factor: number,
): number {
  const referenceScreenHeight: number = 812;

  const heightFactor: number = SCREEN_HEIGHT / referenceScreenHeight;

  const responsiveValue: number = baseValue * heightFactor * factor;

  return PixelRatio.roundToNearestPixel(responsiveValue);
}
