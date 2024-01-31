"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Transfer } from "./Tranfer";
import { DocumentDuplicateIcon } from "@heroicons/react/solid";
// https://github.com/aws/aws-sdk-js-v3/issues/4126

const FileUpload = () => {
  const router = useRouter();
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    const len = result.data.data.length;
    setAllImage(result.data.data[len - 1]);
    console.log("wosssupppp");
    console.log(result.data.data[len - 1]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);

      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);
      console.log(file);
      try {
        const result = await axios.post(
          "http://localhost:5000/upload-files",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log("hey");
        console.log(result);
        if (result.data.status == "ok") {
          alert("Uploaded files successfully, refresh the page");
          router.push("/chatbot");
        }
      } catch (error) {
        console.log(error);
        console.log("error bitch");
      }
    },
  });
  const showPdf = (pdf: any) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };
  const deleteMe = ()=> {
    setAllImage(null);
  } 
  return (
    <div className="md:w-[70%] w-[100%]">
      <div
        className="bg-white bg-opacity-35 rounded-xl px-10 pb-10 pt-5"
        id="innerContent"
      >
        <div className="flex justify-center font-semibold text-base md:text-xl pb-5">
          Upload your pdf here
        </div>
        <div className="p-2 bg-white rounded-xl mx-6 ">
          <div
            {...getRootProps({
              className:
                "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            })}
          >
            <input {...getInputProps()} />
            <div className="flex ">
              <DocumentDuplicateIcon width="25" color="lightblue" />
              <div className="ml-2 font-semibold text-blue-700">
                Drop your file here
              </div>
            </div>
          </div>
        </div>
      </div>
      {!allImage? (
        ""
      ) : (
        <div className="mt-10 w-[100%] ">
          <div className="flex text-2xl font-bold text-green-800 drop-shadow-lg justify-center">
            Your uploaded Pdf
          </div>
          <div className="flex justify-center p-5 gap-x-5">
            <button
              className="bg-green-500 p-2 text-white rounded-md shadow-lg shadow-green-900"
              onClick={() => showPdf(allImage["pdf"])}
            >
              Show Pdf
            </button>
            <button
              className="bg-green-500 p-2 text-white rounded-md shadow-lg shadow-green-900"
              onClick={() => deleteMe()}
            >
              Delete Pdf
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
