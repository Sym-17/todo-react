import { NavLink } from "react-router-dom";

type NavTextProps = {
  to: string;
  showMenu: () => void;
  text: string;
};

export default function NavText(props: NavTextProps) {
  return (
    <div>
      <NavLink
        to={props.to}
        onClick={props.showMenu}
        className={(navInfo) =>
          navInfo.isActive
            ? "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#F86F03]"
            : "text-xl font-medium border-transparent hover:border-[#F86F03] border-b-2 text-[#3f3d56]"
        }
      >
        {props.text}
      </NavLink>
    </div>
  );
}
