import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import SigninButton from "./SigninButton";
import Link from "next/link";

const Appbar = () => {
  return (
    <Navbar
      isBordered
      className="
      bg-gradient-to-r
      from-green-100
      to-purple-100
      text-gray-600"
    >
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link
            className="hover:text-orange-500 transition-none  px-2"
            color="foreground"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-orange-500 transition-none  px-2"
            color="foreground"
            href="/"
          >
            User Profile
          </Link>
          <Link
            className="hover:text-orange-500 transition-none  px-2"
            color="foreground"
            href="/"
          >
            Admin Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SigninButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Appbar;
