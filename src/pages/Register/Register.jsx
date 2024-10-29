import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase.config";

const Register = () => {

  const auth= getAuth(app)
  const handleRegister=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
      const user= result.user;
      console.log("new user",user);
       })
       .catch(err=>{
      console.log(err)
       })
  }
  return (
    <div className="flex justify-center my-5">
      <div className="flex bg-purple-200 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
        </div>
        <form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
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
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input className="w-full bg-purple-400 hover:bg-purple-600 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" type="submit" value='Register'/>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
