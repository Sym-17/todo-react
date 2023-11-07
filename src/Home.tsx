import { Link } from "react-router-dom";
import paperSvg from "./assets/undraw_taking_notes_re_bnaf.svg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mt-10 mb-10 pl-6 pr-6 md:mt-32 md:mb-64 md:pr-20 md:pl-20 2xl:mt-60 2xl:mb-80 2xl:pr-56 2xl:pl-56  gap-14 2xl:gap-36">
        <div className="flex flex-col justify-start gap-5">
          <h1
            className="text-3xl 2xl:text-5xl font-semibold leading-normal text-[#3f3d56]"
            style={{ lineHeight: "1.3" }}
          >
            Elevate Your Productivity with NotePad
          </h1>
          <h1 className="text-sm 2xl:text-xl text-[#3f3d56]">
            Simplify your life, one task at a time.
          </h1>
          <Link to="/notes">
            <button className="bg-[#F86F03] pr-2 pl-2 p-1 2xl:pl-8 2xl:pr-8 2xl:p-3 rounded-xl text-white w-1/3 text-base 2xl:text-lg font-medium">
              Try Now
            </button>
          </Link>
        </div>

        <img
          src={paperSvg}
          alt=""
          className="w-full lg:w-1/3 pr-5 sm:pr-10 2xl:pr-0 "
        />
      </div>
    </>
  );
}
