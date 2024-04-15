import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuthentication from "../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import { changeGptState } from "../store/gptSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const isGptSearchEnabled = useSelector((state) => state.gpt.enabled);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleLogout } = useAuthentication();

  const handleGptSearchNavigate = () => {
    if (!isGptSearchEnabled) {
      dispatch(changeGptState(true));
      navigate("/gpt-search");
    } else {
      dispatch(changeGptState(false));
      navigate("/browse");
    }
  };

  return (
    <div className="z-20">
      <div className="flex justify-between bg-gradient-to-b from-black py-8 px-32">
        <img className="w-48" src={"/Netflix_2015_logo.svg"} />
        {user && (
          <div className="flex gap-2">
            <button
              onClick={handleGptSearchNavigate}
              className="px-5 m-3 bg-green-700 rounded text-white text-lg font-semibold"
            >
              {isGptSearchEnabled ? "Home" : "GPT Search"}
            </button>
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
