import React, { useState } from "react";
import { useRouter } from "next/router";
import SuccessAlert from "./SuccessAlert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = ({ visible, onClose }) => {
  const router = useRouter(); // Initialize the router

  let successfullySubmit = false;

  // State variable for Successful Form Submission
  const [successAlert, setSuccessAlert] = useState(false);
  const handleOnCloseAlert = (e) => {
    setSuccessAlert(false);
  };

  const [user, setUser] = useState({
    name: "",
    phone: "",
    insurance: "",
    message: "",
  });

  if (!visible) {
    return null;
  }
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  let key, value;

  const handleInputs = (e) => {
    if (!isNaN(e)) {
      setUser({ ...user, phone: e });
      return;
    }
    key = e.target.name;
    value = e.target.value;

    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status === 201) {
        // alert(
        //   "Thank you for submitting your details. We will contact you within 24 hours."
        // );
        // <SuccessAlert onClose={handleOnCloseAlert} visible={successAlert}/>
        console.log("Successfully submitted the form data.");
        successfullySubmit = true;
      } else {
        alert("Error submitting your details. Please refresh the page and try again.")
        console.log("Error submitting your details. Please retry.");
      }
    } catch (error) {
      console.log(error);
    }

    // await router.push("/");

    // Reset the form state
    setUser({
      name: "",
      phone: "+91",
      insurance: "",
      message: "",
    });
    if(successfullySubmit)
      setSuccessAlert(!successAlert);
    // onClose();
    console.log(successAlert);
  };

  return (
    <>
      <div
        id="container"
        className="fixed bottom-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20"
        onClick={handleOnClose}
      >
        <div className="relative flex flex-col md:flex-row md:w-2/3 lg:w-1/2 mx-auto">
          <div className="md:w-1/2 mx-auto bg-gray-200 border rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
            <span className="absolute left-0 top-0 -translate-y-1/2 transform text-md border rounded-2xl bg-blue-600 text-white p-3">
              Buy Insurance
            </span>

            <h1 className="text-2xl md:text-4xl font-bold mt-8 p-4">
              Talk to an IRDAI certified advisor
            </h1>

            <div className="flex pl-4 pb-4 text-gray-600 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="85hxlWiLZsrxIScZDGwmUa_JrbE13EfhZWo_gr1"
                  x1="9.858"
                  x2="38.142"
                  y1="9.858"
                  y2="38.142"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#889097"></stop>
                  <stop offset="1" stop-color="#64717c"></stop>
                </linearGradient>
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="url(#85hxlWiLZsrxIScZDGwmUa_JrbE13EfhZWo_gr1)"
                ></circle>
                <radialGradient
                  id="85hxlWiLZsrxIScZDGwmUb_JrbE13EfhZWo_gr2"
                  cx="24"
                  cy="24"
                  r="18.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </radialGradient>
                <circle
                  cx="24"
                  cy="24"
                  r="18.5"
                  fill="url(#85hxlWiLZsrxIScZDGwmUb_JrbE13EfhZWo_gr2)"
                ></circle>
                <radialGradient
                  id="85hxlWiLZsrxIScZDGwmUc_JrbE13EfhZWo_gr3"
                  cx="23.89"
                  cy="7.394"
                  r="37.883"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fafafb"></stop>
                  <stop offset="1" stop-color="#c8cdd1"></stop>
                </radialGradient>
                <circle
                  cx="24"
                  cy="24"
                  r="17"
                  fill="url(#85hxlWiLZsrxIScZDGwmUc_JrbE13EfhZWo_gr3)"
                ></circle>
                <line
                  x1="24"
                  x2="24"
                  y1="24"
                  y2="36"
                  fill="none"
                  stroke="#d83b01"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                ></line>
                <line
                  x1="24"
                  x2="32.485"
                  y1="24"
                  y2="15.515"
                  fill="none"
                  stroke="#45494d"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                ></line>
                <g>
                  <line
                    x1="24"
                    x2="16.213"
                    y1="24"
                    y2="20.265"
                    fill="none"
                    stroke="#45494d"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="2.5"
                  ></line>
                </g>
                <circle cx="24" cy="24" r="2" fill="#1e2021"></circle>
              </svg>
              <span className="px-2">30 minutes</span>
            </div>

            <p className="pb-4 px-4 text-justify text-gray-600 text-sm">
              Generally, a call takes approximately 30 minutes, allowing you
              ample time to have all your questions and concerns addressed.
            </p>
          </div>

          <div className="md:w-1/2 lg:w-1/2 p-6 bg-white border rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
            <form method="POST" onSubmit={handleSubmit}>
              <label className="block mb-6">
                <span className="text-md font-bold">Name </span>
                <span className="text-red-600">*</span>
                <input
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  className="
              pl-1
      block
      border
      rounded
      border-gray-300
      h-8
      w-full
      mt-1
      outline-none
    "
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-md font-bold">Phone number </span>
                <span className="text-red-600">*</span>
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                    style: { width: "100%" },
                    autoComplete: "off",
                  }}
                  dropdownClass="text-sm"
                  preferredCountries={["in"]}
                  countryCodeEditable={false}
                  country={"in"}
                  value={user.phone}
                  onChange={handleInputs}
                />
              </label>

              <label className="block mb-6">
                <span className="text-md font-bold">
                  What are you looking for?{" "}
                </span>
                <span className="text-red-600">*</span>
                <select
                  name="insurance"
                  value={user.insurance}
                  onChange={handleInputs}
                  required
                  className="
              block
              w-full
              mt-1
              outline-none
              border
              rounded
              border-gray-300
              h-8
    "
                >
                  <option value="" disabled selected className="text-gray-50">
                    Select an option
                  </option>
                  <option value="health">Health Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="claims">Claims Support</option>
                  <option value="Other Insurance">Other Insurance</option>
                </select>
              </label>
              <label className="block mb-6">
                <span className="text-md font-bold">Message</span>
                <textarea
                  name="message"
                  autoComplete="false"
                  value={user.message}
                  onChange={handleInputs}
                  className="
              pl-1
              block
              w-full
              mt-1
              outline-none
              border
              rounded
              border-gray-300
              resize-none
    "
                  row="2"
                />
              </label>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {successAlert ? (
          <SuccessAlert onClose={handleOnCloseAlert} visible={successAlert} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Contact;
