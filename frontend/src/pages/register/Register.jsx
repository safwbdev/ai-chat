import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <SignUp path='/sign-up' />
        </div>
    )
}

export default Register