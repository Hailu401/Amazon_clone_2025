
import { useContext, useEffect } from 'react';
import './App.css'
import Routing from './pages/Routing'
import { DataContext } from './Components/DataProvider/DataProvider';
import { Type } from './pages/utilities/actionTypes';
import { auth } from './pages/utilities/firebase';


function App() {
  const [ dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);


  return (
    <>
       <Routing/>
    </>
  )
}


export default App
