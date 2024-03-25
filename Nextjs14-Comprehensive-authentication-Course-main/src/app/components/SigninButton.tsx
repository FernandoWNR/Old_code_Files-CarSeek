"use client";

import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2">
      {session && session.user ? (
        <>
          <Link
            href={"/profile"}
          >{`${session.user.firstName} ${session.user.lastName}`}</Link>
          <Link
            className="tex-sky-500 hover:text-orange-500 transition-colors"
            href={"/api/auth/signout"}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Button
            className="bg-transparent text-black hover:text-orange-500 transition-colors"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
          <Button
            className="bg-transparent text-black hover:text-orange-500 transition-colors"
            as={Link}
            href={"/auth/signup"}
          >
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
};

export default SigninButton;
