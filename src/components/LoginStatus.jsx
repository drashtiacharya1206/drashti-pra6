import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 text-center shadow-2xl border border-gray-100">

          {/* Conditional Rendering */}
          {isLoggedIn ? (
            <>
              {/* Success Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <span className="text-4xl text-green-600">✓</span>
              </div>

              {/* Logged In Content */}
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome Back! 👋
              </h1>

              <p className="mt-3 text-gray-500">
                You are successfully logged in.
              </p>

              <button
                type="button"
                onClick={handleLogout}
                className="mt-8 w-full rounded-xl bg-red-500 px-5 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow-lg active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <span className="text-4xl">🔐</span>
              </div>

              {/* Logged Out Content */}
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome!
              </h1>

              <p className="mt-3 text-gray-500">
                Please log in to continue.
              </p>

              <button
                type="button"
                onClick={handleLogin}
                className="mt-8 w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg active:scale-95"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginStatus;