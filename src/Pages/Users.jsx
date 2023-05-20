import React from 'react'
import UserInfo from '../components/user/UserInfo'
import styes from '../Asset/styles/layout/container.module.css'
import useUser from '../hooks/useUser'
const Users = () => {
  const { data } = useUser()
  console.log(data)
  return (
    <div className='styles[]'>
       <UserInfo user={data} />
    </div>
  )
}

export default Users