import React from "react";

const Footer = () => {
  return (
    <div className="bg-opacity-50 bg-black w-full px-48 py-12 text-white">
      <p className="p-2">Questions? Call 000-000-123-4567</p>
      <div className="grid grid-cols-4">
        <p className="p-2">FAQ</p>
        <p className="p-2">Help Center</p>
        <p className="p-2">Terms of Use</p>
        <p className="p-2">Privacy</p>
        <p className="p-2">Cookie Preference</p>
        <p className="p-2">Corporate Information</p>
      </div>
    </div>
  );
};

export default Footer;
