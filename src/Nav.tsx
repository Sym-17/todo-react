import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/20/solid";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
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
          <h1 className="text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:">
            Contact Us
          </h1>
        </div>
      )}
    </nav>
  );
}

// import { NavLink, Link } from "react-router-dom";
// import { useRef } from "react";
// import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";

// export default function Nav() {
//   const windowWidth: React.MutableRefObject<number> = useRef(window.innerWidth);
//   return (
//     <nav className="flex flex-row justify-between align-middle items-center h-20 pr-6 lg:pr-56 pl-6 lg:pl-56 z-50">
//       <Link to="/home">
//         <h1 className="flex justify-center align-middle items-center text-start font-medium text-2xl md:text-3xl text-[#F86F03]">
//           NotePad
//         </h1>
//       </Link>

//       {windowWidth.current <= 640 ? (
//         <Bars3BottomRightIcon className="w-10 p-2 text-[#F86F03]" />
//       ) : (
//         <div className="flex justify-between w-1/4 items-center">
//           <NavLink
//             to="/notes"
//             className={(navInfo) =>
//               navInfo.isActive
//                 ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover:"
//                 : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
//             }
//           >
//             Notes
//           </NavLink>

//           <NavLink
//             to="/todo"
//             className={(navInfo) =>
//               navInfo.isActive
//                 ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover:"
//                 : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
//             }
//           >
//             Todo
//           </NavLink>
//           <h1 className="text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:">
//             Contact Us
//           </h1>
//         </div>
//       )}

//       {/* <div className="flex justify-between w-1/4 items-center">
//         <NavLink
//           to="/notes"
//           className={(navInfo) =>
//             navInfo.isActive
//               ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover:"
//               : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
//           }
//         >
//           Notes
//         </NavLink>

//         <NavLink
//           to="/todo"
//           className={(navInfo) =>
//             navInfo.isActive
//               ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03] hover:"
//               : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:"
//           }
//         >
//           Todo
//         </NavLink>
//         <h1 className="text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56] hover:">
//           Contact Us
//         </h1>
//       </div> */}
//     </nav>
//   );
// }
