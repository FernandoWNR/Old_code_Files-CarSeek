import SignInForm from "@/app/components/SignInForm";
import { Image, Link } from "@nextui-org/react";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const SigninPage = ({ searchParams }: Props) => {
  console.log({ searchParams });

  return (
    <div className="flex flex-row gap-0 sm:gap-10 sm:items-center justify-center h-screen p-0  border shadow m-0 bg-gradient-to-r from-green-100 to-purple-100 text-gray-600  ">
      <SignInForm callbackUrl={searchParams.callbackUrl} />

      <div className="bg-green-300 w-0.5 h-60 hidden lm:inline-block sm:inline-block "></div>

      <Image
        src="/Picture.png"
        alt="Login Form"
        width={350}
        height={420}
        className="hidden lm:inline-block sm:inline-block pt-10 sm:m-0"
      />
    </div>
  );
};

export default SigninPage;
