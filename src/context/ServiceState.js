import React, { useReducer } from 'react'
import axios from 'axios'
import ServiceContext from './serviceContext'
import ServiceReducer from './serviceReducer'
import { GET_DATA } from './types'

const endpoint =
  'https://tkfn9ciovh.execute-api.us-west-1.amazonaws.com/qa/api/surveys/synchronization'

const ServiceState = props => {
  const initialState = {
    info: {}
  }

  const [state, dispatch] = useReducer(ServiceReducer, initialState)

  // Get data from the endpoint
  const getData = async () => {
    const response = await axios.post(endpoint)
    console.log(response.data)

    dispatch({
      type: GET_DATA,
      payload: response.data
    })

    console.log(state.info)
  }

  return (
    <ServiceContext.Provider value={{ info: state.info, getData }}>
      {props.children}
    </ServiceContext.Provider>
  )
}

export default ServiceState
