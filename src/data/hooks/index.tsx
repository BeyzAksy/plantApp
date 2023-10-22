import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {selectFirstLaunchState} from '../slices/first-launch-slice';

export const useFirstLaunch = () => {
  const isFirstLaunch = useSelector(selectFirstLaunchState);

  return useMemo(() => ({isFirstLaunch}), [isFirstLaunch]);
};
