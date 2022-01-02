import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { IUser } from "../lib/types";
import EditUserInfo from "./EditUserInfo";

interface IUserInfo {
  user: IUser;
  edit?: boolean;
}

const UserInfo: React.FC<IUserInfo> = ({ user }: IUserInfo) => {
  const [edit, setEdit] = useState(false);

  const show = {
    name: user.name,
    email: user.email,
  };

  return (
    <>
      {edit ? (
        <EditUserInfo user={user} setEdit={setEdit} />
      ) : (
        <div className="bg-white border-none rounded-lg w-full p-6 shadow-sm max-w-screen-md">
          <div className="w-full flex items-center justify-start">
            <Link href="/" className="flex justify-center items-center mr-3">
              <div className="flex justify-center items-center bg-gray-bg p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </div>
            </Link>
            <h1 className="font-bold text-3xl flex-1">{user.name}</h1>
          </div>
          <div className="flex flex-wrap items-start">
            {Object.entries(show).map(([label, value], i) => (
              <div
                className="input-group my-3 px-0 sm:odd:pr-3 sm:even:pl-3 w-full sm:w-1/2"
                key={i}
              >
                <label>{label}</label>
                <div className="w-full break-words">{value}</div>
              </div>
            ))}
          </div>

          {edit ? (
            <div className="mt-4">
              <div className="flex-1 flex items-center justify-end">
                <Link className="button w-full mx-2" href="/invite">
                  Rules ???
                </Link>
                <button
                  className="button w-full mx-2 "
                  onClick={() => setEdit(true)}
                >
                  Edit Info
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <div className="flex-1 flex items-center justify-end">
                <Link className="button w-full mx-2" href="/invite">
                  Rules ???
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserInfo;
