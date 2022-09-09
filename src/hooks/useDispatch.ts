import { useDispatch as useReduxDispatch } from 'react-redux';
import { TDispatch } from '../stores';

const useDispatch: () => TDispatch = useReduxDispatch;

export default useDispatch;
