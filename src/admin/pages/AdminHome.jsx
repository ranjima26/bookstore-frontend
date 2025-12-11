import React, { useEffect, useState } from 'react'
import AdminHeaders from '../components/AdminHeaders'
import AdminSidebar from '../components/AdminSidebar'
import { FaBook, FaUser, FaUserGraduate } from 'react-icons/fa'
import { getAllBooksAdminAPI, getAllUsersAPI } from '../../services/allAPI'

function AdminHome() {

  const [bookCount, setBookCount] = useState([])
  const [userCount, setUserCount] = useState([])
  const [token, setToken] = useState("")
  //get books count
  const bookDisplay = async () => {
    try {
      const result = await getAllBooksAdminAPI()
      console.log(result);

      if (result.status == 200) {
        setBookCount(result.data.length)

      }
    } catch (error) {
      console.log(error);

    }
  }


  //display users count
  const userDisplay = async () => {
    try {
      //reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllUsersAPI(reqHeader)
      console.log(result);

      if (result.status == 200) {
        setUserCount(result.data.length)

      }
    } catch (error) {
      console.log(error);

    }
  }




  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    if (token) {
      bookDisplay()
      userDisplay()
    }
  }, [token])

  return (
    <>
      <AdminHeaders />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSidebar />
        </div>
        <div className='p-4'>
          <div className='md:grid grid-cols-3 text-white'>

            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FaBook className='text-3xl' /></div>
                <div className=''>
                  <h1>Total No:of Books : <span className='text-xl'>{bookCount}</span></h1>

                </div>

              </div>
            </div>


            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FaUser className='text-3xl' /></div>
                <div className=''>
                  <h1>Total No:of Users :<span className='text-xl'>{userCount}</span></h1>

                </div>

              </div>
            </div>

            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FaUserGraduate className='text-3xl' /></div>
                <div className=''>
                  <h1>Total No:of Applications <span className='text-xl'>85</span></h1>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default AdminHome