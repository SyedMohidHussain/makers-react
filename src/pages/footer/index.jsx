import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-[0] w-[100%] text-white py-8">
      <div className="container mx-auto flex flex-wrap gap-[200px] items-start">
        <div className="mb-8 flex-shrink-0">
          <img
            src="../../../assets/logo.png"
            alt="Company Logo"
            className="h-10"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[12px] font-[700] leading-[20px] font-inter text-[#09090B]  gap-[4px]">
              Account
            </h3>
            <ul className="text-[12px] font-[300] leading-[30px] font-inter text-[#09090B] gap-[4px]">
              <li>
                <a href="#" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Factory Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Invite Friends
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-[700] leading-[20px] font-inter text-[#09090B] gap-[4px]">
              Company
            </h3>
            <ul className="text-[12px] font-[300] leading-[30px] font-inter text-[#09090B] gap-[4px]">
              <li>
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Maker stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] font-[700] leading-[20px] font-inter text-[#09090B] gap-[4px]">
              Connect
            </h3>
            <ul className="text-[12px] font-[300] leading-[30px] font-inter text-[#09090B]  gap-[4px]">
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advertise
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] font-[700] leading-[20px] font-inter text-[#09090B]  gap-[4px]">
              Groups
            </h3>
            <ul className="text-[12px] font-[300] leading-[30px] font-inter text-[#09090B]  gap-[4px]">
              <li>
                <a href="#" className="hover:underline">
                  Cotton Inc.
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MAGIC
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newark
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Small Batch Manufactururs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sponsor a Group
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[25px] gap-[20px]">
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          <img
            src="../../../assets/facebook.png"
            alt="Company Logo"
            className="h-8"
          />
        </span>
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          <img
            src="../../../assets/instagram.png"
            alt="Company Logo"
            className="h-8"
          />
        </span>
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          <img
            src="../../../assets/google-plus.png"
            alt="Company Logo"
            className="h-8"
          />
        </span>
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          <img
            src="../../../assets/path.png"
            alt="Company Logo"
            className="h-8"
          />
        </span>
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          <img
            src="../../../assets/youtube.png"
            alt="Company Logo"
            className="h-8"
          />
        </span>
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          <img
            src="../../../assets/twitter.png"
            alt="Company Logo"
            className="h-8"
          />
        </span>
      </div>
      <div className="flex justify-center items-center pt-[25px]">
        <span className="text-[12px] font-[400] leading-[20px] font-inter text-[#09090B] gap-[4px]">
          @ 2024 MAKER'S ROW, INC. *PRIVACY POLICY * TERMS & CONDITIONS
        </span>
      </div>
    </footer>
  );
}
