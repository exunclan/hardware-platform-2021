import React from "react";
import { IPart, IUserPart } from "../../lib/types";

interface IPageProps {
  cart?: { [key: number]: IUserPart[] } | undefined;
  parts: IPart[];
  // { [key: number]: IUser[] }
}

const PartsCart: React.FC<IPageProps> = ({ cart, parts }: IPageProps) => {
  const partById = (id: number) => parts.find((p) => p.id === id);

  return (
    <div className="w-full lg:max-w-xs max-w-4xl lg:ml-4 mx-auto lg:my-0 z-10 mt-4 lg:min-h-screen px-5 sm:order-2 ">
      <div className="w-full p-6 bg-white rounded-lg shadow-sm flex items-center">
        <div>
          <div className="text-sm uppercase font-bold text-type-light">
            CART
          </div>
          <div className="text-2xl font-bold text-accent-light">RIG</div>
        </div>
      </div>
      <div className="flex lg:flex-col  flex-row flex-wrap justify-evenly w-full mt-2 bg-white p-6">
        {cart && Object.keys(cart).length > 0 ? (
          Object.values(cart).map((item, i) => {
            const part = partById(item[0].part_id);
            const quantity = item.length;
            return (
              <a
                key={i}
                href={`/platform#${item[0].part_id}`}
                className="my-3 lg:mx-auto mx-3 lg:w-full px-3 py-4 flex-grow w-72  bg-gray-bg hover:translate-x-2 hover:shadow-lg transition-all rounded-lg shadow-sm border-accent border-2 relative"
              >
                <div className="">
                  <div className="text-xs bg-accent absolute inline-flex top-0 right-0 h-7 lg:w-1/4 min-w-max w-1/3 text-center justify-center rounded-tr-md font-bold text-white items-center ">
                    {`QTY: ${quantity}`}
                  </div>
                  <div className="pb-3">
                    <div className="text-base leading-relaxed w-9/12 font-extrabold text-accent-dark mb-1">
                      {part?.name}
                    </div>
                    <div className="text-xs font-extrabold text-accent-light">
                      {part?.company}
                    </div>
                  </div>
                  <div className="uppercase text-sm font-semibold pb-3 text-accent-dark">
                    {part?.type}
                  </div>
                  <div className="text-base font-extrabold  text-accent-dark">
                    {`$${part?.price}`}
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <div className="text-accent-light font-bold text-center text-base uppercase ">
            Your Cart is currently empty!
          </div>
        )}
        {/* {cart?.length ? (
          cart?.map((item, i) => {
            return (
              
            );
          })
        ) : (
          <div className="text-accent-light font-bold text-center text-base uppercase ">
            Your Cart is currently empty!
          </div>
        )} */}
      </div>
    </div>
  );
};

export default PartsCart;
