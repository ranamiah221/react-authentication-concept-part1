import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.config";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";



const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [succeed, setSucceed] = useState('');
  const [show, setShow]= useState(false);
  const auth = getAuth(app);
  
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setRegisterError('');
    setSucceed('');
    if(password.length < 6){
      setRegisterError('Password should be at least 6 characters')
      return;
    }
    else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
      setRegisterError('Your password must be 8 character with one uppercase,lowercase,number and special character')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSucceed("User created successfully");
      })
      .catch((err) => {
        console.log(err);
       setRegisterError(err.message)
      });
  };
  return (
    <div className="flex justify-center my-5">
      <div className="flex bg-purple-200 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
        </div>
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <div className="relative">
              <input
                type={show ? "password" : 'text' }
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
              <span onClick={()=> setShow(!show)} className="absolute mt-3 right-4">
                {
                  show ? <IoMdEye /> : <IoMdEyeOff />
                }
              </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                className="w-full bg-purple-400 hover:bg-purple-600 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                type="submit"
                value="Register"
              />
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already if you register please ?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Login
              </a>
              .
            </p>
            {registerError && <p className="text-red-600">{registerError}</p>}
            {succeed && <p className="text-green-600">{succeed}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
