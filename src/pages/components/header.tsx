/* eslint-disable react/no-children-prop */
import Link from "next/link";
import React, { useState } from "react";
import ModalComponent from "./modal";

const Header = ({ Children }: { Children: React.ReactNode }) => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(false);

  const data = [
    { name: "Home", path: "/", icon: "test" },
    { name: "About", path: "/about", icon: "test" },
    { name: "Test", path: "/test", icon: "test" },
  ];

  const handleSubmit = async () => {
    await fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify({
        name: "test",
        phoneNumber: "0987654321",
        role: "manager",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          // Handle data
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getUpdateData = async () => {
    await fetch(`/api/user/getAllUsers`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  React.useEffect(() => {
    getUpdateData();
  }, []);

  return (
    <div>
      <header
        style={{ height: "48px" }}
        className="bg-gray-600 flex flex-row items-center justify-between p-2 sticky top-0"
      >
        <div>Logo</div>
        <div className="hidden md:flex md:flex-row items-center gap-4">
          {data?.map((item) => (
            <Link key={item?.path} href={item?.path}>
              {item?.name}
            </Link>
          ))}
          <button
            className="bg-gray-800 px-2 rounded-sm"
            onClick={() => setActive(true)}
          >
            Book
          </button>
          <button
            className="bg-gray-800 px-2 rounded-sm"
            onClick={() => handleSubmit()}
          >
            Book
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={nav}
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {nav && (
          <div className="absolute top-12 left-0 w-full bg-gray-600 shadow-md p-2 md:hidden">
            <div className="flex flex-col gap-4">
              {data?.map((item) => (
                <Link
                  onClick={() => setNav(false)}
                  className="hover:bg-gray-700 p-2"
                  key={item?.path}
                  href={item?.path}
                >
                  {item?.name}
                </Link>
              ))}
              <button
                className="bg-gray-800 px-2 rounded-sm"
                onClick={() => setActive(true)}
              >
                Book
              </button>
            </div>
          </div>
        )}
      </header>
      <div className="overflow-auto" style={{ height: "calc(100vh - 48px)" }}>
        {Children}
        {active && (
          <ModalComponent
            opened={active}
            children="dwefjnfhb"
            setOpen={(value: boolean) => setActive(value as boolean)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
