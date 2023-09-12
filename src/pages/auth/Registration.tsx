import React, {useState} from 'react'
import {Container, FormBox, Logo} from './LoginStyles'
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { registrationSchema, registrationInterface} from '../../interface/AuthInterface'
import logo from '../../assets/images/phormSingle-02.png'

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  

  const initialValues = { username:'', usermail: '', password: '', passwordReEnter: ''}
  const handleSubmit: (x: registrationInterface, formikHelpers: FormikHelpers<registrationInterface>) => void = async (values, {resetForm}) => {    
    const {passwordReEnter, ...RegistrationForm} = values
    setError(null)
    console.log(passwordReEnter)
    resetForm()

    try{
      const responce = await axios.post('http://localhost:4000/auth/register', RegistrationForm)

      if(responce.status >= 200 && responce.status < 300){
        navigate(`/login?justReg=true&mail=${RegistrationForm.usermail}`)
      }else{
        resetForm()
        setError("Please refill the form.")
      }
    }catch{
      console.log("There was a problem")
    }
  }

  const handleReset = ()=>{}

  return (
    <div className='h-screen grid place-items-center'>
      <Container>
        <div className="mb-10"><Logo src={logo} alt="Phorm logo" /></div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registrationSchema} onReset={handleReset}>
          <Form>

            <FormBox>
              <label htmlFor="usermail" className='block text-sm font-semibold font-body text-slate-800 pb-2'>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name='username' component="div" className='error'/>
            </FormBox>
            <FormBox>
              <label htmlFor="usermail" className='block text-sm font-semibold font-body text-slate-800 pb-2'>Mail:</label>
              <Field type="email" name="usermail" />
              <ErrorMessage name='usermail' component="div" className='error'/>
            </FormBox>
            <FormBox>
              <label htmlFor="password" className='block text-sm font-semibold font-body text-slate-800 pb-2' >Password:</label>
              <Field type="password" name="password"  />
              <ErrorMessage name='password' component="div" className='error'/>
            </FormBox>
            <FormBox>
              <label htmlFor="password" className='block text-sm font-semibold font-body text-slate-800 pb-2' >Confirm Password:</label>
              <Field type="password" name="passwordReEnter" />
              <ErrorMessage name='passwordReEnter' component="div" className='error'/>
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