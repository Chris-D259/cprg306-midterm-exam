"use client";
import React, { useEffect, useState } from "react";




const APICallExam = () => {
  const [passKey, setPassKey] = useState("");
  async function findPassKey() {
    try {
      const response = await fetch('https://webdev2-class-demo.vercel.app/api/sampleReqs/ehen2rfow');
      const data = await response.json();
      setPassKey(data.secretCode);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={findPassKey} >
          Submit
        </button>
        {passKey && <p className="text-blue-600">The Passkey is: {passKey}</p>}
      </div>
    </div>
  );
};

export default APICallExam;
