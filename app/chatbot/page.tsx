"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import Chat from "@/components/Chat";

const page = () => {
  const [allImage, setAllImage] = useState(null);
  const [show, setShow] = useState(false);
  const [pdfFile, setPdfFile] = useState<string>("");
  useEffect(() => {
    getPdf();
  }, []);
  const showPdf = (pdf: any) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`http://localhost:5000/files/${pdf}`);
    setShow(true);
    console.log(pdfFile);
  };
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    const len = result.data.data.length;
    setAllImage(result.data.data[len - 1]);
  };

  return (
    <div className="md:flex">
      {!show ? (
        <div className="h-[50vh] md:w-[50vw]">
          <button
            className="bg-green-500 p-2 text-white rounded-md shadow-lg shadow-green-900"
            onClick={() => showPdf(allImage!["pdf"])}
          >
            Show Pdf
          </button>
        </div>
      ) : (
        <div className="h-[50vh] md:w-[50vw]">
          <iframe
            src={pdfFile}
            frameBorder="0"
            className="h-[50vh] w-[100vw] md:h-screen md:w-[50vw]"
          ></iframe>
        </div>
      )}
      <div className="md:w-[55vw] h-[50vh] ">
        <Chat />
      </div>
    </div>
  );
};

export default page;
