import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// get the global dispatch with useDispatch with AppDispatch type of store.dispatch
export const useGlobalAppDispatch = () => useDispatch<AppDispatch>();

// get the global Rootstate selector
export const useGlobalAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
