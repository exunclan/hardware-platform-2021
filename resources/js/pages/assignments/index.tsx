import React from "react";
import Layout from "../../components/Layout";
import { IAssignment } from "../../lib/types";
import useTitle from "../../lib/use-title";

interface IAssignmentsPageProps {
  assingments: IAssignment[];
}

const Page: React.FC<IAssignmentsPageProps> = ({
  assingments,
}: IAssignmentsPageProps) => {
  useTitle("Assignments | Exun Hardware 2021");

  return (
    <Layout links={[]}>
      <div className="flex items-center justify-center h-full w-full px-5">
        <div className="bg-white w-full max-w-sm p-5 rounded-lg">
          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {JSON.stringify(assingments, null, 2)}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
