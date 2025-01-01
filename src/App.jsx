import React, {useEffect} from 'react'
import Shared from './Component/SharedLayout/Shared'
import Shared2 from './Component/SharedLayout/Shared2'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Shared3 from './Component/SharedLayout/Shared3'
import { useStateValue } from './Component/Stateprovider/StateProvider'
import { auth } from './Component/Utills/FireBase'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Readytopay from './Component/Readytopay/Readytopay'
import Shared5 from './Component/SharedLayout/Shared5'

const promise=loadStripe('pk_test_51PuBow2Nh9FYDtSUpJByKja2VmIjozDgKmD9acUy5JGyy6e3RLu8iCBzrYP9VkcKldDqHHevcb9JGFyVb5bgHpZu00b5wS3a3W')
function App() {


  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (

<div className='App'>
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Shared/>}></Route>
  <Route path='payment' element={<Shared2/>}> </Route>
  <Route path='login' element={<Shared3/>}></Route>
  <Route path='/book' element={<Shared5/>}></Route>
  <Route path="/readytopay"
            element={
              <>
                <Elements stripe={promise}>
                  <Readytopay />
                </Elements>
              </>
            }
          />  
</Routes>
</BrowserRouter>
    </div>  
  
  )
}

export default App