import React from "react";
import { useSelector } from "react-redux";
import useAuthentication from "../hooks/useAuthentication";

const Header = () => {
  const user = useSelector((state) => state.user);
  const { handleLogout } = useAuthentication();

  return (
    <div>
      <div className="flex justify-between bg-gradient-to-b from-black py-8 px-32">
        <img className="w-48" src={"/Netflix_2015_logo.svg"} />
        {user && (
          <div className="flex gap-2">
            <img className="w-20 rounded" src="/Profile.png" />
            <div className="text-white">
              <p className="font-bold text-lg">
                Hello, {user?.displayName ?? "Anonyms"}
              </p>
              <span
                className="font-semibold text-sm cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
