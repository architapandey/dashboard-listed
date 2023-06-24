import React, { useState } from "react";
import googleIcon from "../../../assests/google-icon.svg";
import appleIcon from "../../../assests/apple-icon.svg";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/router";

export default function RightPanel() {
  const [values, setValues] = useState({ email: "", password: "" });

  const router = useRouter();

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("token", user.uid);
        localStorage.setItem("avatar", user.photoURL);
        router.push({
          pathname: "/",
        });
      })
      .catch((err) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="px-4 flex-[60%] bg-gray-100">
      <div className="h-full flex justify-center items-center">
        <div>
          <div className="text-[32px] font-semibold mt-6 text-black">
            Sign-in
          </div>
          <div className="font-normal text-[16px] mt-2 text-black">
            Sign in to your account
          </div>
          <div className="flex gap-8 mt-8">
            <div
              className="flex bg-white gap-2 p-2 rounded-lg"
              onClick={handleGoogleAuth}
            >
              <Image src={googleIcon} alt="google" />
              <button className="text-[#858585] text-[12px]">
                Sign in with Google
              </button>
            </div>
            <div className="flex bg-white gap-2 p-2 rounded-lg">
              <Image src={appleIcon} alt="google" />
              <button className="text-[#858585] text-[12px]">
                Sign in with Apple
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <div className="p-7 bg-white rounded-3xl">
              <div className="space-y-2">
                <label htmlFor="email" className="text-black text-[16px]">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 rounded-lg bg-[#EAEAEA] text-black"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-black text-[16px] ">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 rounded-lg bg-[#EAEAEA] text-black"
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </div>

              <div className="p-2 my-2 flex justify-between items-center">
                <div>
                  <a className=" text-[#346BD4] font-normal ">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  className="w-full px-4 py-2 rounded-lg bg-black text-white font-bold"
                  onClick={(e) => handleLogin(e)}
                >
                  Sign in
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center pt-4 ">
              <div className="text-[#858585]">Don't have an account?</div>
              <div className="text-[#346BD4]">&nbsp; Register here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
