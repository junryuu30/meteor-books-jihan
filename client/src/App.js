import './App.css';
import Landing from './pages/Landing';
import { Routes, Route, useNavigate } from "react-router-dom";
import DetailBooks from './pages/DetailBooks';
import Navbar from './components/Navbar';
import LandingAdmin from './pages/Admin/LandingAdmin';
import AddBooks from './pages/Admin/AddBooks';
import UpdateBooks from './pages/Admin/UpdateBooks';

import { API, setAuthToken } from './config/api';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/userContext';

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  // console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    console.log(localStorage.token);
    // Redirect Auth
    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.status === 'admin') {
        navigate('/home-admin');
      } else if (state.user.status === 'user') {
        navigate('/');
      }
    }
  }, [state]);

  // const checkUser = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     };
  //     const response = await API.get('/check-auth',config);

  //     // If the token incorrect
  //     if (response.status === 404) {
  //       return dispatch({
  //         type: 'AUTH_ERROR',
  //       });
  //     }
  //     console.log(response);
  //     // Get user data
  //     let payload = response.data.data.user;
  //     // Get token from local storage
  //     payload.token = localStorage.token;
  //     console.log("tokennnnn",payload.token);
  //     // Send data to useContext
  //     dispatch({
  //       type: 'LOGIN_SUCCESS',
  //       payload,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const checkUser = async () => {
    try {
      // setIsLoading(true);
      const response = await API.get("/check-auth");

      const payload = response.data.data;
      // console.log("ini payload",payload)
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exac path="/" element={<Landing />} />
          <Route exac path="/home-admin" element={<LandingAdmin />} />
          <Route exac path="/add-books" element={<AddBooks />} />
          <Route exac path="/update-books" element={<UpdateBooks />} />
          <Route exac path="/detail-book/:id" element={<DetailBooks />} />
      </Routes>
        {/* <div className='bg-pink-600 text-white'>
          Landing
          List buku
          <div>Search</div>

        </div>
        <div className='bg-slate-600 text-white'>
          <h2 >Page Admin</h2>
        
          <div className='bg-slate-900 text-white'>
          <h4>add books</h4>
          <h4>title, pages, penulis, dec</h4>
          </div>
          <h4>update books</h4>
          <h4>list buku yang bisa dipinjam aktive atau tidak</h4>
          <h4>list buku yang dipinjam user di approve atau tidak</h4>
          <div></div>
        </div> */}

    </div>
  );
}

export default App;
