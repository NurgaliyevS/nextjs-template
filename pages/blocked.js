"use client";

import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Head from "next/head";

const Blocked = () => {
  const handleLogin = () => {
    signIn(undefined, { callbackUrl: "/" });
  };

  return (
    <>
      <Head>
        <title>Access Blocked</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen w-full p-10 bg-neutral text-neutral-content">
        <h1 className="text-xl md:text-2xl font-medium mb-4">Hm, Access Blocked</h1>
        <p className="mb-8">Try again in 1 minute</p>

        <div className="flex gap-4">
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
          <Link href="/" className="btn btn-secondary">
            Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Blocked;
