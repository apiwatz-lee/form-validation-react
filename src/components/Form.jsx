import React from "react";
import "../App.css";

const Form = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className=" bg-white rounded-lg shadow-lg px-7 py-10 w-[50%]">
        <h1 className="text-3xl text-center font-bold decoration-8 mb-10">
          Form
        </h1>
        <div className="mb-4 pb-1 flex flex-col">
          <label> Username </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md px-2 py-1 outline-none"
          />
          <small>error message</small>
        </div>
        <div className="mb-4 flex flex-col">
          <label> Email </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md px-2 py-1 outline-none"
          />
          <small>error message</small>
        </div>
        <div className="mb-4 flex flex-col">
          <label> Password </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md px-2 py-1 outline-none"
          />
          <small>error message</small>
        </div>
        <div className="mb-4 flex flex-col">
          <label> Confirm password </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md px-2 py-1 outline-none"
          />
          <small>error message</small>
        </div>
        <button
          type="submit"
          className="border bg-blue-500 cursor-pointer text-white w-[100%] mt-2 border-blue-500 p-[10px] text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
