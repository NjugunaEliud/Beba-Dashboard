"use client"
import React, { useState ,useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';

export default function Login() {
  const [mobile_no, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    validateForm();
  }, [mobile_no, Password]);

  const validateForm = () => {
    let errors = {};
    if (!mobile_no) {
      errors.mobile_no = 'Mobile is required.';
    }

    if (!Password) {
      errors.Password = 'Password is required.';
    } else if (Password.length < 3) {
      errors.Password = 'Password must be at least 3 characters.';
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setLoading(true);
      try {
        const response = await axios.post(
          'https://us-central1-bidleo-398811.cloudfunctions.net/login_as_user',
          { mobile_no, Password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          const userData = response.data.user;
          // Store user data in local storage
          localStorage.setItem("userBidRole", userData.utype);
          localStorage.setItem("userBidMobile", userData.mobile_no);
          localStorage.setItem("userBidName", userData.name);
          localStorage.setItem("userBidEmail", userData.email);
          console.log(userData)
          setLoading(false);

          if (userData.utype === 'admin') {
            router.push('/Dashboard');
          } else if (userData.utype === 'auctioneer') {
            router.push('/create');
          } else {
            router.push('/Dashboard');
          }

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successfully',
            text: 'Logged In',
          });
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setLoading(false);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    } else {
      console.log('Form has errors. Please correct them.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-violet-600">
          Sign in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 shadow px-6 py-6 shadow-violet-200" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile_no}
                className="mr-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {errors.mobile_no && <p className='text-red-700 text-sm mt-1'>{errors.mobile_no}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors.Password && <p className='text-red-700 text-sm mt-1'>{errors.Password}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
