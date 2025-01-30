import axiosInstance from '../api/axios';
import useAxiosPrivate from './useAxiosPrivate';
import { useAuth } from '../context/AuthProvider';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const axiosPrivate = useAxiosPrivate()

    const refresh = async () => {
        const response = await axiosPrivate.get('/user/refresh');
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
