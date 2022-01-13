import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../components/Layout";
import useTitle from "../lib/use-title";

interface IPageProps {}

const Page: React.FC<IPageProps> = ({}: IPageProps) => {
  useTitle("Page");

  return (
    <Layout links={[]}>
      {" "}
      <div className="flex items-center justify-center h-full w-full px-5">
        <div className="w-full max-w-screen-lg p-5 rounded-lg">
          <div className="flex-1 p-6  m-2 bg-white rounded-lg shadow-sm flex items-center ">
            <Link href="/" className="flex justify-center items-center mr-3">
              <div className="flex justify-center items-center bg-gray-bg p-3 rounded-lg mr-3">
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
            <div>
              <div className="text-sm uppercase font-bold text-type-light">
                Hardware
              </div>
              <div className="text-4xl font-bold text-accent-light">Rules</div>
            </div>
          </div>
          <div className="flex-1 p-6 m-2 bg-white rounded-lg shadow-sm flex flex-col ">
            <div className="my-3">
              The parts for the build should be obtained on this platform and
              your budget should be no more than 2022 nuxE.
            </div>
            <div className="my-3">
              <span className="italic font-bold">Note: </span>
              No peripherals, cases, or cooling configurations should be
              included in the configuration.
            </div>
            <div className="my-3">
              <ol className="!list-decimal ml-5">
                <li className="pb-1 font">
                  The criteria for judging your build will be based on the parts
                  you have chosen for the given workload from the provided list.
                </li>
                <li className="pb-1 font">
                  Tampering or hacking the site will lead to an instant
                  disqualification along with a report to your rep /
                  teacher-in-charge.
                </li>
                <li className="pb-1 font">
                  Sabotaging or harassing other teams will lead to
                  disqualification.
                </li>
                <li className="pb-1 font">
                  If your parts are found to be incompatible; you will be
                  disqualified.
                </li>
                <li className="pb-1 font">
                  The limit for components are as follows
                  <ol className="!list-disc ml-10">
                    <li className="pt-1">Motherboard: 1</li>
                    <li className="pt-1">CPU: 1</li>
                    <li className="pt-1">
                      GPU: Depends on slots available on chosen Motherboard
                    </li>
                    <li className="pt-1">
                      RAM: Depends on slots available on chosen Motherboard
                    </li>
                    <li className="pt-1">
                      Storage: Depends on slots available on chosen Motherboard
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
