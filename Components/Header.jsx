import Link from "next/link";
import MainItems from "./MainItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MainItems title="HOME" address={"/"} Icon={AiFillHome} />
        <MainItems
          title="ABOUT"
          address={"/about"}
          Icon={BsFillInfoSquareFill}
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline ">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
