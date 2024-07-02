"use client";

import { signIn } from "next-auth/react";

const SignInButtons = () => {
  return (
    <div>
      <button
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className="px-4 py-2 font-bold"
      >
        SignIn
      </button>
    </div>
  );
};

export default SignInButtons;
