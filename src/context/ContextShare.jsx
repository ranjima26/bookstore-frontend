import React, { createContext, useState } from 'react'

export const userProfileUpdateContext = createContext()
export const adminProfileUpdateContext = createContext()
//here the children is globally accessible

function ContextShare({children}) {
  //children predefined props
    const [userProfileUpdateStatus,serUserProfileUpdateStatus] = useState({})
    const [adminProfileUpdateStatus,setAdminProfileUpdateStatus] = useState({})
  return (
    <userProfileUpdateContext.Provider value={{userProfileUpdateStatus,serUserProfileUpdateStatus}}>
        <adminProfileUpdateContext.Provider value={{adminProfileUpdateStatus,setAdminProfileUpdateStatus}}>
          {children}
          </adminProfileUpdateContext.Provider>
        </userProfileUpdateContext.Provider>
  )
}

export default ContextShare