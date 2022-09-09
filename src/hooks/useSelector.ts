import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { TRootState } from '../stores';

const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector;

export default useSelector;
