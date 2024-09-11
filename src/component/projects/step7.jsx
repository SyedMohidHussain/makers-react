import { Button } from "@/components/ui/button";
import React from "react";

export default function ({ userType }) {
  return (
    <>
      {userType == "Free" && (
        <div className="flex flex-col justify-center items-center pt-[65px]">
          <img
            src="../../../assets/statusPaid.png"
            alt="Product view"
            className="w-[400px] h-[310px] mr-5"
          />
          <div className="w-[500px] align-center">
            <h1
              className="text-[50px] font-light text-[#09090B] text-center"
              style={{ lineHeight: "56px" }}
            >
              Congratulations Your Project is now Live
            </h1>
            <p className="text-sm font-normal text-[#71717A] text-center w-[430px] mt-5 mx-auto">
              You currently have a free account, please upgrade your account to
              start viewing your responses.
            </p>
          </div>
          <Button
            variant="primary"
            className="text-sm font-medium h-9 mt-[23px] rounded-md shadow-sm"
          >
            Upgrade Your Account
          </Button>
        </div>
      )}
      {userType == "Paid" && (
        <div className="flex flex-col justify-center items-center pt-[65px]">
          <img
            src="../../../assets/statusPaid.png"
            alt="Product view"
            className="w-[400px] h-[310px] mr-5"
          />
          <div className="w-[500px] align-center">
            <h1
              className="text-[50px] font-light text-[#09090B] text-center"
              style={{ lineHeight: "56px" }}
            >
              Congratulations Your Project is now Live
            </h1>
            <p className="text-sm font-normal text-[#71717A] text-center w-[430px] mt-5 mx-auto">
              You will start getting responses, be sure to keep checking your
              inbox to see the responses.
            </p>
          </div>
          <Button
            variant="primary"
            className="text-sm font-medium h-9 mt-[23px] rounded-md shadow-sm"
          >
            Publish This Project
          </Button>
        </div>
      )}
      {userType == "Expired" && (
        <div className="flex flex-col justify-center items-center pt-[65px]">
          <img
            src="../../../assets/statusFailed.png"
            alt="Product view"
            className="w-[400px] h-[320px] mr-5"
          />
          <div className="w-[500px] align-center">
            <h1
              className="text-[50px] font-light text-[#09090B] text-center"
              style={{ lineHeight: "56px" }}
            >
              Oops, Your Limit Has Been Reached
            </h1>
            <p className="text-sm font-normal text-[#71717A] text-center w-[430px] mt-5 mx-auto">
              Please upgrade your account, or wait till the new cycle to post
              new projects.
            </p>
          </div>
          <Button
            variant="primary"
            className="text-sm font-medium h-9 mt-[23px] rounded-md shadow-sm"
          >
            Upgrade Your Account
          </Button>
        </div>
      )}
    </>
  );
}
