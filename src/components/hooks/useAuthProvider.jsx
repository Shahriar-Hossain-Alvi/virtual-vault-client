import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useAuthProvider = () => {
    const authData = useContext(AuthContext);
    return authData;
};

export default useAuthProvider;