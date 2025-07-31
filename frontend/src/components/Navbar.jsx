import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"
import {Input} from './ui/input'
import {Button} from './ui/button'
import { Search } from 'lucide-react';
import { FaMoon } from "react-icons/fa";
import { Avatar } from '@radix-ui/react-avatar';
import {AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
    const user =true;
    return (
      <div className="py-2 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gary-300 border-b-gary-300 border-2 bg-white z-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0">
          {/* logo section */}
          <div className="flex gap-7 items-center">
            <Link to={"/"}>
              <div className="flex gap-2 items-center">
                <img
                  src={Logo}
                  alt=""
                  className="w-7 h-7 md:w-10 md:h-10 dark:invert"
                />
                <h1 className="font-bold text-3xl md:text-4xl">Logo</h1>
              </div>
            </Link>
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search..."
                className="border border-gray-700 dark:br-gray-900 bg--gray-300 w-[300px] hidden md:block"
              />
              <Button className="absolute right-0 top-0">
                <Search />
              </Button>
            </div>
          </div>
          {/* nav section */}
          <div className="flex-md:gap-7 items-center">
            <ul className="hidden md:flex gap-7 items-center text-xl font-semibold">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/blogs"}>
                <li>Blogs</li>
              </Link>
              <Link to={"about"}>
                <li>About</li>
              </Link>
              <div className="flex">
                <Button>
                  <FaMoon />
                </Button>
                {user ? (
                  <div className="ml-7 flex gap-3 items-center">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className="rounded-full object-cover w-full h-full"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Link to={"/logout"}>
                      <Button>Logout</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="ml-7 md:flex gap-2">
                    <Link to={"/login"}>
                      <Button>Login</Button>
                    </Link>
                    <Link className="hidden md:block " to={"/signup"}>
                      <Button>Signup</Button>
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;