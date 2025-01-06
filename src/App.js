import React, { useEffect } from 'react';
import './App.css'; // Tailwind CSS
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import AppRoutes from './assets/routes/AppRoute'; // Assuming your routing is in AppRoutes
import { setAuthToken } from './reduxStore/auth/authSlice';
import { jwtDecode } from 'jwt-decode'; // Correct import

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('auth_token');  // Try to get the token from cookies

    if (token) {
      try {
        // Decode the JWT to get the expiration time
        const decodedToken = jwtDecode(token);  // Use jwtDecode
        const currentTime = Date.now() / 1000; // Current time in seconds

        console.log(decodedToken.exp)
        if (decodedToken.exp < currentTime) {
          // Token has expired, remove it from cookies
          Cookies.remove('auth_token');
          // Redirect the user to login or handle expired token logic
          window.location.href = '/admin/login';  // Redirect to login page
        } else {
          // Token is valid, dispatch it to Redux
          dispatch(setAuthToken(token));
        }
      } catch (error) {
        console.error("Error decoding the token:", error);
        // In case of an error decoding the token, treat it as invalid and log out
        Cookies.remove('auth_token');
        window.location.href = '/admin/login';
      }
    }
  }, [dispatch]);

  return <AppRoutes />;  // AppRoutes handles the routes
}

export default App;
