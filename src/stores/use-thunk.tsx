import { useCallback, useState } from "react";
import { useAppDispatch } from "./hook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThunk = (thunk?:any) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const dispatch = useAppDispatch()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const runThunk = useCallback((arg?: any) => {
        setIsLoading(true);
        setError(null);
        dispatch(thunk(arg))
            .unwrap()
            .catch((err: Error) => {
                setError(err.message)
                throw err;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}   