import FileUpload from "@/components/fileUpload";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import React from "react";
import axios from "axios";
// import fs from "node:fs";
import FormData from "form-data";
import { saveAs } from "file-saver";

export default function Step4({ currentStep, setCurrentStep }) {
  // const postImageconfig = {
  //   method: "post",
  //   url: "https://api.imaginepro.ai/api/v1/midjourney/imagine",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQwNzIsImVtYWlsIjoibW9oaWRodXNzYWluZG90QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibW9oaWRodXNzYWluZG90QGdtYWlsLmNvbSIsImlhdCI6MTcyNjA4NzQ0M30.1UuEf-eag7lF5yfIlTa3L01H2m8ulrSGs_MbPHrI168",
  //   },
  //   "Access-Control-Allow-Origin": "*",
  //   data: {
  //     prompt: "A little cat running on the grass",
  //   },
  // };
  // const getImagesconfig = {
  //   method: "get",
  //   url: "https://api.imaginepro.ai/api/v1/midjourney/message/0b5d24af-5c30-4ee5-8755-1e92db47bf2e",
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQwNzIsImVtYWlsIjoibW9oaWRodXNzYWluZG90QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibW9oaWRodXNzYWluZG90QGdtYWlsLmNvbSIsImlhdCI6MTcyNjA4NzQ0M30.1UuEf-eag7lF5yfIlTa3L01H2m8ulrSGs_MbPHrI168",
  //   },
  // };

  const [show, setShow] = useState(false);
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const onBack = () => {
    setCurrentStep(currentStep - 1);
  };

  // const onGenerate = async () => {
  //   axios(postImageconfig)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       axios
  //         .get({
  //           method: "get",
  //           url: `https://api.imaginepro.ai/api/v1/midjourney/message/${response.data.messageId}`,
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQwNzIsImVtYWlsIjoibW9oaWRodXNzYWluZG90QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibW9oaWRodXNzYWluZG90QGdtYWlsLmNvbSIsImlhdCI6MTcyNjA4NzQ0M30.1UuEf-eag7lF5yfIlTa3L01H2m8ulrSGs_MbPHrI168",
  //           },
  //         })
  //         .then((res) => console.log("get task api", res));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   setShow(true);
  // };

  const onGenerate = async () => {
    try {
      const payload = {
        prompt: "Lighthouse on a cliff overlooking the ocean",
        output_format: "webp",
      };

      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/ultra`,
        axios.toFormData(payload, new FormData()),
        {
          validateStatus: (status) => status >= 200 && status < 300, // Only resolve successful status codes (200-299)
          responseType: "arraybuffer", // Handle binary data
          headers: {
            Authorization: `Bearer sk-fR1HSEMQKxOzJRZYbpKQw28xE3oR20p759Nlx0ovRBGwbKbV`,
            Accept: "image/*",
          },
        }
      );

      await saveImage(response); // Call saveImage to handle saving
    } catch (error) {
      console.error("Error generating image:", error.message);
    }
  };

  const saveImage = async (response) => {
    if (response.status === 200) {
      console.log("resposne images", response);
      // const blob = new Blob([response.data], { type: "image/webp" });
      // saveAs(blob, "lighthouse.webp"); // Downloads the image as 'lighthouse.webp'
    } else {
      throw new Error(`Failed to generate image: ${response.status}`);
    }
  };

  return (
    <div className="px-[100px]">
      <div className="flex justify-between gap-x-5">
        <div className="w-[38.946%]">
          <h2 className="text-sm text-[#71717A] font-normal mb-2.5">
            4/5 Job post
          </h2>
          <h1 className="text-2xl text-[#344054] font-bold mb-4">
            Images will help
          </h1>
          <p className="text-sm text-[#71717A] font-normal">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>
        <div className="w-[56%] bg-white border rounded-md p-5">
          <h2 className="text-md text-[#09090B] pb-4 font-medium ">
            Upload Images
          </h2>

          <FileUpload className="px-[14px] py-[25px] " />
          {show && (
            <div className="flex gap-3 pt-4">
              {" "}
              <img
                src="./lighthouse.webp"
                alt="Green Check"
                className="w-56 h-56 rounded-lg"
              />
              <img
                src="./lighthouse.webp"
                alt="Green Check"
                className="w-56 h-56 rounded-lg"
              />
            </div>
          )}
          <div className="flex justify-between gap-x-3 mt-[23px]">
            <Button
              variant="outline"
              className="text-sm text-[#1975FF] border-[#1975FF] font-medium h-9 rounded-md shadow-sm"
              onClick={onGenerate}
            >
              Generate Using AI (Beta)
              <span>
                {" "}
                <img
                  src="../../../assets/blueSparkle.png"
                  alt="Green Check"
                  className="w-3 h-3 ml-2"
                />
              </span>
            </Button>
            <div className="flex gap-x-3 items-center">
              <Button
                variant="outline"
                className="text-sm text-[#1975FF] border-[#1975FF] font-medium h-9 rounded-md shadow-sm"
                onClick={onBack}
              >
                Back
              </Button>
              <Button
                variant="primary"
                className="text-sm font-medium h-9 rounded-md shadow-sm"
                onClick={onNext}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
