import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
 
function RegisterPage() {
   const navigate = useNavigate();

  async function onRegisterHandler(user) {
   const { error } = await register(user);
   if (!error) {
     navigate('/');
   }
  }
 
  return (
    <section>
      <div>
        <Navbar
          title="NoteApp"
          showSearch={false}
          showLogout={false}
          showName={false}
        />
      </div>
      <div className='register-page'>
      <RegisterInput register={onRegisterHandler} />
      </div>
    </section>
  )
}
 
export default RegisterPage;
