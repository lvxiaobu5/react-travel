import {
  useSelector as useReduxSelector, 
  TypedUseSelectorHook
} from "react-redux";
import { RootState } from './store'

// 这个hook的作用是在使用useSelector的时候简化，且让state动态获得类型
// const language = useSelector((state: RootState) => state.language)
// 简化成const language = useSelector((state) => state.language)
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector