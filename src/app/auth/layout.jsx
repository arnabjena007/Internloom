import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="relative h-screen">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-[url('/images/signin_signup/login2.png')] bg-cover bg-center bg-no-repeat filter blur-[2px]"></div>
      
      {/* Centered content */}
      <div className="relative h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
