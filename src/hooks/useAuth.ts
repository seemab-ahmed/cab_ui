import { useMemo } from 'react';
import { useSelector } from 'react-redux'
import { getToken } from 'utils/utility';
export const useAuth = () => {
  const token = getToken();
const {isLoggedIn , user , loading } = useSelector((state : any)=> state.authSlice);

  const userLogin = useMemo(()=> { return(token || isLoggedIn) ? true : false} , [isLoggedIn, token]);
  return { isLoggedIn: userLogin , user, loading };
}
