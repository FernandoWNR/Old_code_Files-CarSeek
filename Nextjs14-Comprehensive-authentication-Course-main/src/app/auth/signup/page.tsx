import SignUpForm from "@/app/components/SignUpForm";
import { Image, Link } from "@nextui-org/react";

const SignupPage = () => {
  return (
    <div className="flex flex-row gap-0 sm:gap-10 sm:items-center justify-center h-screen p-0  border shadow m-0 bg-gradient-to-r from-green-100 to-purple-100 text-gray-600 ">
      <SignUpForm />
      <div className="bg-green-300 w-0.5 h-60 hidden lm:inline-block sm:inline-block "></div>
      <Image
        src="/Picture.png"
        alt="Login Form"
        width={400}
        height={480}
        className="hidden lm:inline-block sm:inline-block pt-10  "
      />
      <div className="md:col-span-2 flex justify-center items-center"></div>
    </div>
  );
};

export default SignupPage;
