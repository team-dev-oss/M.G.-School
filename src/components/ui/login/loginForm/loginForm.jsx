"use client";

import Image from "next/image";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const LoginForm = () => {

  return (
   
    <>
      <div className="flex md:flex-wrap lg:h-screen lg:items-center justify-around">
        <div className="w-full mt-20  px-4 md:py-12 sm:px-6 py-16 lg:w-1/3 md:ml-24 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>

            <p className="mt-4 text-gray-500">Continue your journey to the path of success</p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>
            

            <div className="flex items-center justify-between ">
            <LoginLink className="inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white">Sign in</LoginLink>
            
              {/* <button type="submit" className="inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white">
                Sign in
              </button> */}
            </div>
            <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">
                Don&apos;t have an account?
                <RegisterLink className="underline text-red-700 ml-2  ">Sign up</RegisterLink>
                {/* <Link className="underline text-red-700 ml-2  " href="/register">
                  Sign up
                </Link> */}
              </p>
            </div>
          </form>
        </div>

        <div className="h-64 w-full hidden lg:h-96 lg:w-1/2 md:flex items-center justify-center">
          <Image
            alt=""
            src="/loginPhoto.png"
            width="400"
            height="400"
          // style={{objectFit:"cover"}}
            // className="h-full w-1/2 object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
