import React from 'react'
import BlogReview from '../components/blog/BlogReview'
import styes from '../Asset/styles/layout/container.module.css'
import useSupport from '../hooks/useSupport'
import Inboxs from '../components/inbox/Inboxs'
const Inbox = () => {
  const {SupportMessage } = useSupport()

  return (
    <div className='styles[content]'>
       <Inboxs SupportMessage={SupportMessage} />
    </div>
  )
}

export default Inbox

