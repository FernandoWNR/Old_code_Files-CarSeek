import { Button } from "@nextui-org/react";

import { signIn } from "next-auth/react";

const NextAuthProviders = () => {
  const googleSignIn = async () => {
    const result = await signIn("google", {
      callbackUrl: "/",
    });
    console.log({ result });
  };
  return (
    <div className="flex justify-center items-center p-0 m-0 ">
      <Button onClick={googleSignIn} className="w-full h-10">
        Sign in with Google
      </Button>
    </div>
  );
};

export default NextAuthProviders;
