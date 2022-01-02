import { useForm, Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { IAssignment, IPart, IUserPart } from "../../lib/types";

interface IPageProps {
  parts: IPart[];
  cart?: { [key: number]: IUserPart[] } | undefined;
  checkedPartId: number;
  setCheckedPartId: React.Dispatch<React.SetStateAction<number>>;
  flash: { [key: string]: any };
  assignment: IAssignment;
  listView: boolean;
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
}

const PartsList: React.FC<IPageProps> = ({
  parts,
  cart,
  setCheckedPartId,
  checkedPartId,
  flash,
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
  if (listView) {
    containerClassList = "w-full px-5 mx-auto order-1 max-w-5xl";
  } else {
    containerClassList = "w-full px-5 max-w-4xl mx-auto order-1 ";
  }

  return (
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
            <div className="text-4xl font-bold text-accent-light">
              Parts{flash.message && flash.message}
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 m-2  bg-white rounded-lg shadow-sm flex items-center ">
          <div className="w-full">
            <div className="text-sm uppercase font-bold text-type-light mb-4">
              Assignment Details
            </div>
            <div className="flex justify-around w-full">
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
                  Total Money{" "}
                </div>
                <div className="text-sm font-normal text-black">
                  {`$${assignment.budget}`}
                </div>
              </div>
              <div className="flex mr-2 flex-col ">
                <div className="text-sm font-extrabold text-black">
                  Total Money{" "}
                </div>
                <div className="text-sm font-normal text-black">
                  {`$${assignment.budget}`}
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
                  "#": (
                    <input
                      type="checkbox"
                      value={id}
                      onChange={handleCheckbox}
                      checked={id == checkedPartId}
                      className="w-4 h-4 outline-none checkbox rounded-tl-md"
                    />
                  ),
                  "S.No.": i + 1,
                  name,
                  company,
                  type,
                  price: `$${price}`,
                  buy: (
                    <form
                      onSubmit={(e: React.SyntheticEvent) => {
                        e.preventDefault();
                        buy.post(`/platform/buy/${id}`, {
                          preserveScroll: true,
                          preserveState: true,
                        });
                      }}
                    >
                      <button
                        type="submit"
                        className="button hover:shadow-lg hover:scale-105 w-full"
                      >
                        Buy
                      </button>
                    </form>
                  ),
                  sell: (
                    <form
                      onSubmit={(e: React.SyntheticEvent) => {
                        e.preventDefault();
                        sell.post(`/platform/sell/${id}`, {
                          preserveScroll: true,
                          preserveState: true,
                        });
                      }}
                    >
                      <button
                        type="submit"
                        className="button hover:shadow-lg hover:scale-105 w-full"
                      >
                        Sell
                      </button>
                    </form>
                  ),
                  "in cart": quantity,
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
                            buy.post(`/platform/buy/${part.id}`, {
                              preserveScroll: true,
                              preserveState: true,
                            });
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
                            });
                          }}
                        >
                          {quantity > 0 ? (
                            <button className="button w-full ml-2  hover:shadow-lg hover:scale-105">
                              Sell
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
  );
};

export default PartsList;
