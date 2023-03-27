import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/uiSlice";
let isFirstRender = true

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector(state => state.ui.notification)
  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false
      return
    }
    const sendRequest = async() => {
      dispatch(uiActions.showNotification({
        open:true,
        message:'sending request',
        type:'warning'
      }))
      const res = await fetch('https://shopping-cart-app-e3443-default-rtdb.firebaseio.com/cartItems.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      })
      const data = await res.json()
      dispatch(uiActions.showNotification({
        open:true,
        message:'sent Request To database successfully.',
        type:'success'
      }))
    }
    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open:true,
        message:'Request Failed.',
        type:'error'
      }))
    })
  },[cart])
  const dispatch = useDispatch()
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
