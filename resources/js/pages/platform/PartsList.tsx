import { useForm, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Table from "../../components/Table";
import { IAssignment, IPart, IUser, IUserPart } from "../../lib/types";

interface IPageProps {
  user: IUser;
  parts: IPart[];
  cart?: { [key: number]: IUserPart[] } | undefined;
  checkedPartId: number;
  setCheckedPartId: React.Dispatch<React.SetStateAction<number>>;
  assignment: IAssignment;
  listView: boolean;
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
}

const PartsList: React.FC<IPageProps> = ({
  user,
  parts,
  cart,
  setCheckedPartId,
  checkedPartId,
  assignment,
  listView,
  setListView,
}: IPageProps) => {
  const buy = useForm({});
  const sell = useForm({});

  const handleCheckbox: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (checkedPartId == (e.target.value as never)) {
      setCheckedPartId(0);
    } else {
      setCheckedPartId(e.target.value as never);
    }
  };
  const [query, setQuery] = React.useState<string>("");

  let containerClassList = "w-full px-5 max-w-4xl mx-auto order-1 ";
  // to send price history component at bottom
  // if (listView) {
  //   containerClassList = "w-full px-5 mx-auto order-1 max-w-5xl";
  // } else {
  //   containerClassList = "w-full px-5 max-w-4xl mx-auto order-1 ";
  // }

  const notif = (type: string, message?: string) => {
    if (type === "buy") {
      toast.success("Part Successfully Bought", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (type === "sell") {
      toast.success("Part Successfully Sold", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (type === "error") {
      toast.error(message ? message : "Oops! Some Error Occurred", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div className={containerClassList}>
        <div className="flex md:flex-row sm:flex-col flex-wrap justify-evenly items-stretch  w-full  ">
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
              <div className="text-4xl font-bold text-accent-light">Parts</div>
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
                    Balance{" "}
                  </div>
                  <div className="text-sm font-normal text-black">
                    {`$${user.balance}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="input-group my-5 w-11/12">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setQuery(e.target.value as string);
              }}
            />
          </div>
          <button
            className="flex justify-center items-center w-1/12"
            onClick={() => setListView(!listView)}
          >
            <div className="flex justify-center items-center bg-white p-3 rounded-lg ">
              {listView ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>

        <div className="flex md:flex-row sm:flex-col flex-wrap justify-evenly items-center  w-full mt-5">
          {listView ? (
            <Table
              records={parts
                .filter(({ name, company, type }: IPart) => {
                  return (
                    name.toLowerCase().includes(query.toLowerCase()) ||
                    company.toLowerCase().includes(query.toLowerCase()) ||
                    type.toLowerCase().includes(query.toLowerCase())
                  );
                })
                .map(({ name, company, type, price, id }, i) => {
                  let cart_part_id,
                    quantity = 0;
                  if (cart !== undefined) {
                    cart_part_id = Object.keys(cart);
                  }

                  if (cart && cart_part_id?.includes(String(id))) {
                    quantity = cart[id]?.length;
                  }
                  return {
                    select: (
                      <input
                        type="checkbox"
                        value={id}
                        onChange={handleCheckbox}
                        checked={id == checkedPartId}
                        className="w-4 h-4 outline-none checkbox rounded-tl-md"
                      />
                    ),
                    "S.No.": i + 1,
                    "part info": (
                      <div id={String(id)}>
                        <div className="text-lg leading-relaxed font-bold text-accent-dark">
                          {name}
                        </div>
                        <div className="text-base font-bold text-type-light leading-loose">
                          {company}
                        </div>
                        <div className="uppercase text-sm font-semibold text-accent-dark leading-relaxed">
                          {type}
                        </div>
                      </div>
                    ),
                    "price/in cart": `$${price} - (${quantity})`,
                    "buy/sell": (
                      <div className="flex flex-col">
                        <form
                          className="w-full mt-2"
                          onSubmit={(e: React.SyntheticEvent) => {
                            e.preventDefault();
                            const data = new FormData();
                            data.append("partId", String(id));
                            Inertia.post(
                              `/platform/buy`,
                              { partId: id },
                              {
                                preserveScroll: true,
                                preserveState: true,
                                onError: (msg) => {
                                  notif("error", msg.partId);
                                },
                                onSuccess: () => {
                                  notif("buy");
                                },
                              }
                            );
                          }}
                        >
                          <button
                            type="submit"
                            className="button hover:shadow-lg hover:scale-105 w-full"
                          >
                            Buy
                          </button>
                        </form>

                        <form
                          className="w-full mt-2"
                          onSubmit={(e: React.SyntheticEvent) => {
                            e.preventDefault();
                            sell.post(`/platform/sell/${id}`, {
                              preserveScroll: true,
                              preserveState: true,
                              onError: () => {
                                notif("error");
                              },
                              onSuccess: () => {
                                notif("sell");
                              },
                            });
                          }}
                        >
                          {quantity > 0 ? (
                            <button className="button w-full hover:shadow-lg hover:scale-105 !bg-red-400">
                              Sell at
                              {` $${(
                                Number(price) -
                                (10 / 100) * Number(price)
                              ).toFixed(1)}`}{" "}
                            </button>
                          ) : (
                            <button
                              className="button w-full  button-disabled"
                              title="You don't own this item"
                              disabled
                            >
                              Sell
                            </button>
                          )}
                        </form>
                      </div>
                    ),
                  };
                })}
            />
          ) : (
            parts
              .filter(({ name, company, type }: IPart) => {
                return (
                  name.toLowerCase().includes(query.toLowerCase()) ||
                  company.toLowerCase().includes(query.toLowerCase()) ||
                  type.toLowerCase().includes(query.toLowerCase())
                );
              })
              .map((part, i) => {
                let cart_part_id,
                  quantity = 0;
                if (cart !== undefined) {
                  cart_part_id = Object.keys(cart);
                }

                let cardClass;
                if (cart && cart_part_id?.includes(String(part.id))) {
                  cardClass = "part-card border-2  border-accent";
                  quantity = cart[part.id]?.length;
                } else {
                  cardClass = "part-card";
                }
                return (
                  <div
                    key={i}
                    className={`${cardClass} relative box-border`}
                    id={String(part.id)}
                  >
                    {quantity > 0 && (
                      <div className="text-sm bg-accent  absolute inline-flex top-0 right-0 p-2 h-9 w-1/3 text-center justify-center rounded-tr-md font-bold text-white">
                        {`IN CART: ${quantity} `}
                      </div>
                    )}
                    <div
                      className="text-sm  absolute inline-flex  h-5 w-5 text-center justify-center rounded-tr-md font-bold text-white"
                      style={{ top: "0.7rem", left: "0.5rem" }}
                    >
                      <input
                        type="checkbox"
                        value={part.id}
                        onChange={handleCheckbox}
                        checked={part.id == checkedPartId}
                        className="w-full h-full outline-none checkbox rounded-tl-md"
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-2xl leading-relaxed font-bold text-accent-dark">
                        {part.name}
                      </div>
                      <div className="text-sm font-extrabold text-type-light">
                        {part.company}
                      </div>
                    </div>
                    <div className="uppercase text-sm font-semibold text-accent-dark">
                      {part.type}
                    </div>
                    <div className="mt-4">
                      <div className="text-xl font-extrabold  text-accent-dark">{`$${part.price}`}</div>
                      <div className="mt-3">
                        <div className="flex-1 flex items-center justify-start">
                          <form
                            className=" w-1/2 ml-2"
                            onSubmit={(e: React.SyntheticEvent) => {
                              e.preventDefault();
                              Inertia.post(
                                `/platform/buy`,
                                { partId: part.id },
                                {
                                  preserveScroll: true,
                                  preserveState: true,
                                  onError: (msg) => {
                                    notif("error", msg.partId);
                                  },
                                  onSuccess: () => {
                                    notif("buy");
                                  },
                                }
                              );
                            }}
                          >
                            <button
                              type="submit"
                              className="button hover:shadow-lg hover:scale-105 w-full"
                            >
                              Buy
                            </button>
                          </form>
                          <form
                            className=" w-1/2 ml-2"
                            onSubmit={(e: React.SyntheticEvent) => {
                              e.preventDefault();
                              sell.post(`/platform/sell/${part.id}`, {
                                preserveScroll: true,
                                preserveState: true,
                                onError: () => {
                                  notif("error");
                                },
                                onSuccess: () => {
                                  notif("sell");
                                },
                              });
                            }}
                          >
                            {quantity > 0 ? (
                              <button className="button w-full ml-2  hover:shadow-lg hover:scale-105 !bg-red-400">
                                Sell at
                                {` $${(
                                  Number(part.price) -
                                  (10 / 100) * Number(part.price)
                                ).toFixed(1)}`}
                              </button>
                            ) : (
                              <button
                                className="button w-full ml-2  button-disabled"
                                title="You don't own this item"
                                disabled
                              >
                                Sell
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default PartsList;
