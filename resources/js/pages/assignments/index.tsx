import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../components/Layout";
import { IAssignment } from "../../lib/types";
import useTitle from "../../lib/use-title";

interface IAssignmentsPageProps {
  assignment: IAssignment;
}

const Page: React.FC<IAssignmentsPageProps> = ({
  assignment,
}: IAssignmentsPageProps) => {
  useTitle("Assignments | Exun Hardware 2021");

  return (
    <Layout links={[]}>
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
              <div className="text-4xl font-bold text-accent-light">
                {assignment.title}
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 m-2  bg-white rounded-lg shadow-sm flex items-center ">
            <div className="w-full">
              <div className="text-sm uppercase font-bold text-type-light mb-4">
                Assignment Details
              </div>
              <div className="flex justify-start w-full flex-wrap gap-8">
                <div className="flex mr-2 flex-col ">
                  <div className="text-sm font-extrabold text-black">
                    Total Money{" "}
                  </div>
                  <div className="text-sm font-normal text-black">
                    {`$${assignment.budget}`}
                  </div>
                </div>
                <div className="flex mr-2 flex-col ">
                  <div className="text-sm font-extrabold text-black">
                    Last Updated{" "}
                  </div>
                  <div className="text-sm font-normal text-black">
                    {`${new Date(assignment.updated_at).toLocaleString()}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 m-2 bg-white rounded-lg shadow-sm flex flex-col">
            <div className="my-3">
              Welcome to the Hardware event for Exun 2021-22. You are the Senior
              Developer of NuxE Corp.; a start-up that focuses on blockchain, ML
              and Data Science. Your company has provided you with 2022 nuxE to
              build your upgraded personalized setup to increase work
              efficiency. On this platform, you are required to build your pc
              with that assigned budget. Be careful, though; as the price of the
              parts on the platform changes dynamically due to the silicon and
              supply shortage taking place around the world.
            </div>
            <div className="my-3">
              Your workload for this task is cryptocurrency mining, hashes,
              encryption along with virtualization and running the public
              blockchain node for your company.
            </div>
            <div className="italic font-bold">~2022 nuxE</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
