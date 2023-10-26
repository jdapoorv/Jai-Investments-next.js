import Image from "next/image";
import { useState, useEffect } from "react";

// Sample customer data (replace with your customer data)
const customerData = [
  {
    id: 1,
    src: "/img1.jpg",
    text: "Testimonial 1 content goes here...",
    name: "Emma Johnson",
    role: "Web Developer",
    review:
      "Efficient, reliable, and knowledgeable – they're our go-to for insurance.",
  },
  {
    id: 2,
    src: "/img2.jpg",
    text: "Testimonial 2 content goes here...",
    name: "Liam Jones",
    role: "Graphic Designer",
    review:
      "They simplify insurance matters, creating a worry-free experience.",
  },
  {
    id: 3,
    src: "/img3.jpg",
    text: "Testimonial 3 content goes here...",
    name: "Olivia Smith",
    role: "Marketing Specialist",
    review:
      "I'm consistently impressed with their exceptional advice and service.",
  },
  {
    id: 4,
    src: "/img4.jpg",
    text: "Testimonial 3 content goes here...",
    name: "Noah Brown",
    role: "Game Mathematician",
    review:
      "Their expert guidance make insurance decisions a breeze.",
  },
  {
    id: 5,
    src: "/img5.jpg",
    text: "Trustworthy partners for comprehensive insurance solutions.",
    name: "Sophia Davis",
    role: "GRE Aspirant",
    review: "Trustworthy partners for comprehensive insurance solutions.",
  },
  // Add more customer data as needed
];

const CustomerCarouselMedium = () => {
  const [currentCustomers, setCurrentCustomers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to rotate customer data clockwise
  const rotateCustomers = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerData.length);
  };

  useEffect(() => {
    // Initial setup
    setCurrentCustomers([
      customerData[currentIndex],
      customerData[(currentIndex + 1) % customerData.length],
      customerData[(currentIndex + 2) % customerData.length],
    ]);

    // Set up the timer to rotate customers every 3 seconds
    const timer = setInterval(rotateCustomers, 3000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="hidden md:block md:my-10 px-4 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        {currentCustomers.map((customer, index) => (
          <>
            <div key={customer.id} className="w-4/12 pt-10 px-4 dark:text-white">
              {/* Testimonial content */}

              <div className="mb-6 flex items-center justify-center">
                {/* Testimonial image */}
                <Image
                  src={customer.src}
                  alt={customer.name}
                  width={140} // Set the width of the image
                  height={70} // Set the height of the image
                  className="rounded-full"
                />
              </div>

              <h5 className="mb-2 text-lg font-semibold flex items-center justify-center">
                {customer.name}
              </h5>

              <h6 className="mb-4 font-medium text-primary dark:text-primary-400 flex items-center justify-center">
                {customer.role}
              </h6>
              <p className="px-3 text-gray-700 text-center italic text-md dark:text-gray-400">
                " {customer.review} "
              </p>
              {/* Navigation icons */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CustomerCarouselMedium;
