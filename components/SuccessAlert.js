import React, { useEffect, useState } from "react";

const SuccessAlert = ({ visible, onClose }) => {
  const [showSuccess, setSuccess] = useState(true);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20 ${
        showSuccess ? "block" : "hidden"
      }`}
      onClick={handleOnClose}
    >
      <div className="flex absolute top-10 w-2/3 md:w-1/3 rounded-lg border-l-[6px] border-transparent bg-white p-4 shadow-md">
        <div className="mr-5 flex h-9 w-10 items-center justify-center rounded-lg bg-[#34D399] bg-opacity-30">
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.281 0.813685L16.2688 0.798941L16.2555 0.785173C15.8893 0.406018 15.2974 0.404945 14.93 0.781955L6.27018 9.47967L2.09399 5.27433C1.7266 4.89706 1.13447 4.89804 0.76826 5.27729C0.41058 5.6477 0.41058 6.23243 0.76826 6.60284L0.768224 6.60287L0.773158 6.60784L5.18177 11.0472C5.47504 11.3494 5.87368 11.5 6.24551 11.5C6.64809 11.5 7.02039 11.3448 7.30901 11.0475L16.1938 2.12381C16.5881 1.75601 16.5842 1.18007 16.281 0.813685Z"
              fill="#34D399"
              stroke="#34D399"
            ></path>
          </svg>
        </div>
        <div className="w-full">
          <h5 className="mb-3 text-md md:text-lg font-semibold text-dark">
            Awesome! Thanks for reaching out.
          </h5>
          <p className="mb-3 text-base leading-relaxed text-body-color">
            We'll get in touch with you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
