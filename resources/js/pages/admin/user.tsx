import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { IPart, IUser, IUserPart } from "../../lib/types";

interface IUserProps {
  parts: IPart[];
  user: IUser;
  grouped_parts?: { [key: number]: IUserPart[] } | undefined;
}

const User: React.FC<IUserProps> = ({
  user,
  grouped_parts,
  parts,
}: IUserProps) => {
  const { post, data, setData, processing, errors, reset } = useForm({
    password: "",
  });

  const show = {
    id: user.id,
    name: user.name,
    email: user.email,
    email_verified_at: user.email_verified_at,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  const partById = (id: number) => parts.find((p) => p.id === id);

  return (
    <Layout links={[{ href: "/admin", label: "Home" }]}>
      <div className="w-full sm:max-w-screen-md mx-auto">
        <div className="bg-white border-none rounded-lg w-full p-6 shadow-sm max-w-screen-md">
          <div className="w-full flex items-center justify-start">
            <Link
              href="/admin/users"
              className="flex justify-center items-center mr-3"
            >
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
                <div className="w-full break-words">
                  {/* {value == true || value == false
                    ? value
                      ? "Yes"
                      : "No"
                    : value} */}
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div>
            <form
              className="flex-1 flex items-center"
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                post(`/admin/users/${user.id}/change_password`, {
                  preserveScroll: true,
                  preserveState: true,
                  onSuccess: () => {
                    reset();
                  },
                });
              }}
            >
              <div className="input-group my-2 w-2/3 mr-5">
                <input
                  type="text"
                  name="password"
                  placeholder="New Password"
                  disabled={processing}
                  value={data.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setData("password", e.target.value)
                  }
                />
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div className="input-group my-2 w-1/3">
                <button
                  type="submit"
                  className="button w-full"
                  disabled={processing}
                >
                  Change Password
                </button>
              </div>
            </form>
            <div className="flex-1 flex items-center justify-start">
              {/* {!school.approved && (
                <form
                  className="mr-5 w-1/2"
                  onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    post(`/admin/schools/${school.id}/approve`, {
                      preserveScroll: true,
                    });
                  }}
                >
                  <button type="submit" className="button w-full my-2">
                    Approve
                  </button>
                </form>
              )} */}
              <form
                className="w-1/2"
                onSubmit={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  post(`/admin/users/${user.id}/login`);
                }}
              >
                <button type="submit" className="button w-full my-2">
                  Login as User
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="bg-white border-none rounded-lg w-full p-6 shadow-sm max-w-screen-md my-6">
          <img src={`${user.photo_id}`} alt="Photo ID" />
        </div> */}
        <div className="flex lg:flex-col  flex-row flex-wrap justify-evenly w-full mt-2 bg-white p-6">
          <div className="w-full p-6 bg-white rounded-lg shadow-sm flex items-center">
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
                TOTAL PARTS
              </div>
              <div className="text-4xl font-bold text-accent-light">
                RIG - {user.cart_parts_count}
              </div>
            </div>
          </div>

          {grouped_parts && Object.keys(grouped_parts).length > 0 ? (
            <Table
              records={Object.values(grouped_parts).map((item, i) => {
                const part = partById(item[0].part_id);
                const quantity = item.length;
                return {
                  "#": i + 1,
                  name: part?.name,
                  company: part?.company,
                  type: part?.type,
                  price: part?.price,
                  qty: quantity,
                  toBtn: `/platform#${part?.id}`,
                };
              })}
            />
          ) : null}
        </div>

        <div className="flex lg:flex-col  flex-row flex-wrap justify-evenly w-full mt-2 bg-white p-6">
          <div className="w-full p-6 bg-white rounded-lg shadow-sm flex items-center">
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
                TIMELINE
              </div>
              <div className="text-4xl font-bold text-accent-light">
                RIG - {user.cart_parts_count}
              </div>
            </div>
          </div>
          {user.cart_parts && (
            <Table
              records={user.cart_parts.map(
                (
                  { id, sell_price, buy_price, bought_at, sold_at, part },
                  i
                ) => ({
                  "#": i + 1,
                  part: part?.name,
                  buy_price,
                  bought_at,
                  toBtn: `/platform#${part?.id}`,
                })
              )}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default User;
