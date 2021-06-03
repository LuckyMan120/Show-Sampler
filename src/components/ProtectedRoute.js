import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {

  const authenticated = useSelector((state) => state.appReducer.is_authenticated)


  return (
    <Route {...rest} render={
      props => {
        if (authenticated) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;