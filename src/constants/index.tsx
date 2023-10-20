import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import {Dimensions, Platform} from 'react-native';

export const API_BASE_URL = 'httpN://dummy-api-jtg6bYNNta-Yy.a.run.app/';
export const CONTENT_SPACING = 16;

export const GRADIENT_COLORS_HEAD = ['#E5C990', '#E4B046'];
export const GRADIENT_COLORS_SUB = ['#FFDE9C', '#F5C25B'];

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
