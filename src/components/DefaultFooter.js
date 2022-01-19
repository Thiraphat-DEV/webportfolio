import H5 from "@material-tailwind/react/Heading5";
import Icon from "@material-tailwind/react/Icon";
import { Link } from "react-router-dom";

export default function DefaultFooter() {
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap text-center lg:text-left pt-3">
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">Contact to ME</H5>
              <div className="flex gap-5 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                <a
                  href="https://web.facebook.com/thiraphat.boat"
                  className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-green-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-facebook-square" />
                </a>

                <a
                  href="https://github.com/Thiraphat-DEV"
                  className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-green-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-github" />
                </a>
              </div>
            </div>
           </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} by{" "}
                <Link to="/">
                  <strong className="text-green-300">Thiraphat Chorakhe</strong>
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
