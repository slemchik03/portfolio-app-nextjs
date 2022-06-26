import { AuthProviderContext } from './../AuthProvider';
import { Session } from "@supabase/supabase-js"
import { useContext } from 'react';

interface IHook {
    () : Session
}


export const useAuth: IHook = () => {
    const session = useContext(AuthProviderContext)
    return session
}