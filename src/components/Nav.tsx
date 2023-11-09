import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/20/solid";
import NavText from "./NavText";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex flex-row justify-between align-middle items-center h-20 pr-6 pt-10 2xl:pt-0 md:pr-20 lg:pr-20 2xl:pr-56 pl-6 md:pl-20 lg:pl-20 2xl:pl-56">
      <Link to="/home">
        <h1 className="text-start font-medium text-2xl md:text-3xl text-[#F86F03]">
          NotePad
        </h1>
      </Link>

      {window.innerWidth <= 640 && showMenu && (
        <div className="fixed flex flex-col top-0 left-0 h-1/3 w-1/2 bg-white p-5 rounded-md gap-3">
          <div className="flex flex-row justify-between">
            <NavText
              to="/home"
              showMenu={() => setShowMenu(!showMenu)}
              text="Home"
            />
            <XCircleIcon
              onClick={() => setShowMenu(false)}
              className="w-10 text-xl text-[#F86F03]"
            />
          </div>
          <NavText
            to="/notes"
            showMenu={() => setShowMenu(!showMenu)}
            text="Notes"
          />
          <NavText
            to="/todo"
            showMenu={() => setShowMenu(!showMenu)}
            text="Todo"
          />
          <h1
            className=" text-xl font-medium text-[#3f3d56]"
            onClick={() => setShowMenu(!showMenu)}
          >
            Contact Us
          </h1>
        </div>
      )}

      {window.innerWidth <= 640 ? (
        <div onClick={toggleMenu}>
          <Bars3BottomRightIcon className="w-10 p-2 text-[#F86F03]" />
        </div>
      ) : (
        <div className="flex justify-between lg:w-1/4 sm:w-1/2 sm:mr-4 items-center">
          <NavText to="/notes" text="Notes" showMenu={() => 0} />
          <NavText to="/todo" text="Todo" showMenu={() => 0} />
          <h1 className="text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56]">
            Contact Us
          </h1>
        </div>
      )}
    </nav>
  );
}
