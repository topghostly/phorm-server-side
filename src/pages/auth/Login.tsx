import React, {useState} from 'react'
import {Container, FormBox, Logo} from './LoginStyles'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginInterface, loginSchema } from '../../interface/AuthInterface'
import axios from 'axios'
import Cookies from 'js-cookie'
import queryString from 'query-string'

import logo from '../../assets/images/phormSingle-02.png'

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  const url = window.location.search
  const paramsValue = queryString.parse(url)

  const {justReg, mail} = paramsValue

  const initialValues = {
     usermail: justReg === 'true' ? mail : '', 
     password: '' 
    }

  const handleSubmit: (x: loginInterface) => void = async (values) => {
    console.log(values)
    try{
      const responce = await axios.post('http://localhost:4000/auth/login', values)
      if(responce.status >= 200 && responce.status < 300){
        Cookies.set("sessionToken", responce.data.sessionToken)
      }else{
        console.log(responce)
      }
    }catch(error){
      setError("There was an error")
    }
  }

  return (
    <div className='h-screen grid place-items-center'>
      <Container>
        <div className="mb-10"><Logo src={logo} alt="Phorm logo" /></div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
          <Form>
            <FormBox>
              <label htmlFor="usermail" className='block text-sm font-semibold font-body text-slate-800 pb-2'>Username:</label>
              <Field type="text" name="usermail" />
              <ErrorMessage name='usermail' component="div" className='error'/>
            </FormBox>
            <FormBox>
              <label htmlFor="password" className='block text-sm font-semibold font-body text-slate-800 pb-2'>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name='password' component="div" className='error'/>
            </FormBox>
            <button type="submit" className='submit__btn'>🚀</button>
          </Form>
        </Formik>
            {error && 
              <div className="p-2 border-red-500 text-xs text-red-500 bg-red-100 rounded-md my-5">
                {error}
              </div>
            }
      </Container>
    </div>
  )
}

export default Login