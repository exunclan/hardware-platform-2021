import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../components/Layout";
import useTitle from "../../lib/use-title";

interface IAdminProps {
  stats: { [key: string]: string };
}

const Admin: React.FC<IAdminProps> = ({ stats }: IAdminProps) => {
  useTitle("Admin");
  const links = [
    {
      href: "/admin/users",
      title: "Users",
      description: "List of Users and their details",
    },
  ];
  return (
    <Layout links={[]}>
      <div className="flex items-center flex-col justify-center w-full max-w-xl px-5 mx-auto">
        <div className="bg-white w-full p-5 rounded-lg shadow-sm my-2">
          <div className="text-sm uppercase font-bold text-type-light">
            Exun 2021 Registration
          </div>
          <div className="text-4xl font-bold text-accent-light">
            Admin Panel
          </div>
        </div>

        <div className="my-2 flex flex-wrap w-full">
          {Object.entries(stats).map(([label, value], i) => (
            <div
              className="w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2 my-2"
              key={i}
            >
              <div className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center py-8">
                <div className="text-6xl text-accent font-bold">{value}</div>
                <div className="text-sm text-type-light font-bold uppercase mt-2">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {links.map(({ href, title, description }, i) => (
          <Link
            className="w-full p-6 bg-white rounded-lg shadow-sm flex my-2"
            href={href}
            key={i}
          >
            <div className="flex-1 flex h-full flex-col justify-center">
              <h3 className="font-bold text-xl text-accent-light">{title}</h3>
              <div className="text-type-light">{description}</div>
            </div>
            <div className="flex justify-center items-center">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Admin;
