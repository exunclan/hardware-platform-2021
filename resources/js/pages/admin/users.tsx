import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { IUser } from "../../lib/types";
import useTitle from "../../lib/use-title";

interface IUsersProps {
  users: IUser[];
}

const Users: React.FC<IUsersProps> = ({ users }: IUsersProps) => {
  useTitle("Admin");

  return (
    <Layout links={[]}>
      <div className="w-full px-5 mx-auto max-w-screen-lg">
        <div className="flex items-center w-full p-6 bg-white rounded-lg shadow-sm">
          <Link href="/admin" className="flex items-center justify-center mr-3">
            <div className="flex items-center justify-center p-3 mr-3 rounded-lg bg-gray-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
          <div>
            <div className="text-sm font-bold uppercase text-type-light">
              Exun 2021 Registration
            </div>
            <div className="text-4xl font-bold text-accent-light">Users</div>
          </div>
        </div>

        <div className="flex items-center mx-auto my-4 overflow-x-auto bg-white rounded-lg max-w-screen-lg min-w-screen-lg shadow-sm">
          <Table
            records={users.map(({ id, name, email, email_verified_at }) => ({
              id: String(id),
              name,
              email,
              "Email Verified": email_verified_at ? (
                <div>Yes</div>
              ) : (
                <div>No</div>
              ),
              // toBtn: `/admin/users/${id}/rig`,
              toBtn: `/admin/users/${id}`,
            }))}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Users;
