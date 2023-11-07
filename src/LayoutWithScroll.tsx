//This component is created by combining Layout, Nav and Footer component
//Created for scrolling to Footer componet from Contact Us of Nav, when clicked to it
//But it did not worked

import { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/20/solid";

type LayoutProps = {
  children: React.ReactNode;
};

export default function LayoutWithScroll({
  children,
}: LayoutProps): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const footerRef = useRef<null | HTMLDivElement>(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className="flex flex-row justify-between align-middle items-center h-20 pr-6 pt-10 2xl:pt-0 md:pr-20 lg:pr-20 2xl:pr-56 pl-6 md:pl-20 lg:pl-20 2xl:pl-56">
          <Link to="/home">
            <h1 className="flex justify-center align-middle items-center text-start font-medium text-2xl md:text-3xl text-[#F86F03]">
              NotePad
            </h1>
          </Link>

          {window.innerWidth <= 640 && showMenu && (
            <div className="fixed flex flex-col top-0 left-0 h-1/3 w-1/2 bg-white p-4 rounded-md">
              <div className="flex flex-row justify-between">
                <NavLink
                  to="/home"
                  onClick={() => setShowMenu(!showMenu)}
                  className={(navInfo) =>
                    navInfo.isActive
                      ? " text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover: p-2"
                      : " text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover: p-2"
                  }
                >
                  Home
                </NavLink>
                <XCircleIcon
                  onClick={() => setShowMenu(false)}
                  className="w-10 text-xl text-[#F86F03]"
                />
              </div>
              <NavLink
                to="/notes"
                onClick={() => setShowMenu(!showMenu)}
                className={(navInfo) =>
                  navInfo.isActive
                    ? " text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover: p-2"
                    : " text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover: p-2"
                }
              >
                Notes
              </NavLink>
              <NavLink
                to="/todo"
                onClick={() => setShowMenu(!showMenu)}
                className={(navInfo) =>
                  navInfo.isActive
                    ? " text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover: p-2"
                    : " text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover: p-2"
                }
              >
                Todo
              </NavLink>
              <h1
                className=" text-xl font-medium border-transparent text-[#3f3d56] p-2"
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
              <NavLink
                to="/notes"
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover:"
                    : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
                }
              >
                Notes
              </NavLink>

              <NavLink
                to="/todo"
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover:"
                    : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
                }
              >
                Todo
              </NavLink>
              <h1
                className="text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
                onClick={scrollToFooter}
              >
                Contact Us
              </h1>
            </div>
          )}
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="flex-col justify-center bg-gray-900 text-white pr-12 lg:pr-44 pl-12 lg:pl-44 p-2">
          <div className="flex justify-center gap-3 border-gray-400 border-b-2">
            <h1 className="text-center mb-2 text-sm" ref={footerRef}>
              Contact Us
            </h1>
            <a
              href="https://www.linkedin.com/in/md-samiullah-sayem/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 p-1 border-white hover:border-[#F86F03] border-2 rounded-sm hover:fill-[#F86F03]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://github.com/Sym-17" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 p-1 hover:border-[#F86F03] border-2 rounded-sm hover:fill-[#F86F03]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-center mt-3">
            © 2023 www.todo-react.com | Powered by: Sym-17 | Copyright: Any
            unauthorized use or reproduction of Todo-React content for
            commercial purposes is strictly prohibited and constitutes copyright
            infringement liable to legal action.
          </p>
        </footer>
      </div>
    </>
  );
}
