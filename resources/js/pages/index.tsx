import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../components/Layout";
import { IPageProps } from "../lib/types";
import { Admin, Authenticated, Guest } from "../lib/authorization";
import useTitle from "../lib/use-title";
import UserInfo from "./UserInfo";

const Index: React.FC = () => {
  const {
    props: { authenticated, user },
  } = usePage<IPageProps>();
  authenticated ? useTitle(user.name) : useTitle("Home");

  return (
    <Layout links={[]}>
      <div className="flex items-center justify-center h-full w-full px-5">
        <Guest>
          <div className="bg-white w-full max-w-sm p-5 rounded-lg">
            <Link className="button my-3" href="/auth/login">
              Login
            </Link>
            <Link className="button my-3" href="/auth/register">
              Register
            </Link>
          </div>
        </Guest>

        <Authenticated>
          <div className="w-full max-w-screen-md p-5 rounded-lg">
            {user && <UserInfo user={user} edit={false} />}

            <div className="mt-4 bg-white w-full max-w-screen-md p-5 rounded-lg items-center justify-center">
              <div className="flex-1 flex items-center justify-end my-2">
                <Link className="button w-full flex-1 mx-2" href="/platform">
                  Start
                </Link>
                <Link className="button w-full flex-1 mx-2" href="/assignments">
                  Assignments
                </Link>
              </div>
            </div>

            <Admin>
              <div className="mt-4 bg-white w-full max-w-screen-md p-5 rounded-lg items-center justify-center">
                <div className="flex-1 flex items-center justify-end my-2">
                  <Link className="button w-full flex-1 mx-2" href="/admin">
                    Admin
                  </Link>
                </div>
              </div>
            </Admin>
          </div>
        </Authenticated>

        {/* <Authenticated>
          <div className="w-full max-w-screen-md p-5 rounded-lg">
            {user && <UserInfo user={user} edit={false} />}
          </div>
          <div className="bg-white w-full max-w-md p-5 rounded-lg">
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              {JSON.stringify(user, null, 2)}
            </pre>
            <div className="mt-4">
              <Admin>
                <Link className="button w-full mb-4" href="/admin">
                  Admin
                </Link>
              </Admin>
              <Link className="button w-full my-2" href="/platform">
                Start
              </Link>
              <Link className="button w-full my-2" href="/assignments">
                Assignments
              </Link>
              <Link className="button w-full my-2" href="/auth/logout">
                Logout
              </Link>
            </div>
          </div>
        </Authenticated> */}
      </div>
    </Layout>
  );
};

export default Index;
