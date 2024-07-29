import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  
    return (
    <>
        <h1>Welcome</h1>
        <p>{today}</p>
        <p><Link to="/employees/viewall">View/Add/Edit/Disable employee(s) in the list</Link></p>
    </>
  )
}

export default Welcome