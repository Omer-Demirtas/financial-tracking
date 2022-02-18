import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './features/user/userSlice';

const App = () => 
{
  const user = useSelector(state => state.user)

  const dispatch = useDispatch();

  useEffect(() => {
    if(user.isLogin === false)
    {
      dispatch(fetchUser())
    }
  }, [])

  console.log('user', user);

  return (
    <div>
      {
       (user.loading || !user.isLogin) ? "Loading ..." 
        :
        user.data.email 
      }
    </div>
  );
}

export default App;
