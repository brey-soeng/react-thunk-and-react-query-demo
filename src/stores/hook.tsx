

import { UseDispatch, useSelector, UseSelector ,useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./index";
export const useAppSelector: UseSelector = useSelector.withTypes<RootState>()
export const useAppDispatch: UseDispatch = useDispatch.withTypes<AppDispatch>()