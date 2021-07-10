import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import './css/style.scss'
import { useState } from 'react'

import AOS from 'aos'
import { focusHandling } from 'cruip-js-toolkit'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import axios from 'axios'
import Profile from './pages/Profile'

function App() {
  const [auth, setAuth] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    getUserDetails()
  }, [])

  const isToken = () => {
    const token = localStorage.getItem('token')
    axios
      .get('http://localhost:5000/auth/is-verify', {
        headers: { token: token },
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err.response)
        console.log('no token stored in session')
      })
  }

  const getUserDetails = () => {
    console.log(localStorage.getItem('token'))
    localStorage.getItem('token')
      ? axios
          .get('http://localhost:5000/dashboard', {
            headers: { token: localStorage.getItem('token') },
          })
          .then((res) => {
            console.log('successful token')
            console.log(res)
            setAuth(true)
            setCurrentUser(res.data.user_name)
          })
          .catch((err) => {
            console.log(err.response)
            console.log('expired token')
          })
      : console.log('could not get user details')
  }
  const handleLogin = (token) => {
    localStorage.setItem('token', token)
    setAuth(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setCurrentUser('')
    setAuth(false)
  }

  const location = useLocation()

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline')
  }, [location.pathname]) // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home currentUser={currentUser} handleLogout={handleLogout} />
        </Route>
        <Route path='/signin'>
          <SignIn
            checkAuth={setAuth}
            currentUser={currentUser}
            handleLogout={handleLogout}
            getUserDetails={getUserDetails}
          />
        </Route>
        <Route path='/signup'>
          <SignUp
            checkAuth={setAuth}
            currentUser={currentUser}
            handleLogout={handleLogout}
            getUserDetails={getUserDetails}
          />
        </Route>
        <Route path='/profile'>
          {localStorage.getItem('token') ? (
            <Profile
              checkAuth={setAuth}
              currentUser={currentUser}
              handleLogout={handleLogout}
              getUserDetails={getUserDetails}
            />
          ) : (
            <Redirect to='/signin' />
          )}
        </Route>
        <Route path='/reset-password'>
          <ResetPassword />
        </Route>
      </Switch>
    </>
  )
}

export default App
