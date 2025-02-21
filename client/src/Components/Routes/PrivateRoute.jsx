import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const [ok, setOk] = useState(null); // `null` means loading state
    const { token } = useSelector((state) => state.auth);
    useEffect(() => {
        const auth = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/user-auth`, {
                    headers: {
                        Authorization: token,  // ✅ Add Authorization header
                    },
                });

                setOk(res.data?.ok || false);
            } catch (error) {
                console.error("Auth check failed:", error);
                setOk(false);
            }
        };

        if (token) {
            auth();
        } else {
            setOk(false);
        }
    }, [token]);

    if (ok === null) {
        return <div>Loading...</div>; // ✅ Better UI for loading state
    }

    return ok ? <Outlet /> : <>loading</>;
};

export default PrivateRoute;
