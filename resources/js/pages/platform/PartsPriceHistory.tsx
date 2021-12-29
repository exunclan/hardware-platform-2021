import React, { useState } from "react";
import Popup from "reactjs-popup";
import { IPart, IPartPrice } from "../../lib/types";

interface IPageProps {
  parts: IPart[];
  checkedPartId: number;
  setCheckedPartId: React.Dispatch<React.SetStateAction<number>>;
  part_price: IPartPrice[];
}

const PartsPriceHistory: React.FC<IPageProps> = ({
  parts,
  checkedPartId,
  setCheckedPartId,
  part_price,
}: IPageProps) => {
  const partById = (id: number) => parts.find((p) => p.id === id);
  const partPriceByPartId = (id: number) =>
    part_price.find((pp) => pp.part_id == id);

  return (
    <div className="w-full lg:max-w-xs max-w-4xl lg:mr-4 mx-auto lg:my-0 z-10 mt-4 lg:min-h-screen px-5 lg:order-1 order-10  ">
      <div className="w-full p-6 bg-white rounded-lg shadow-sm flex items-center">
        <div>
          <div className="text-sm uppercase font-bold text-type-light">
            Parts
          </div>
          <div className="text-2xl font-bold text-accent-light">
            Price History
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col  flex-row flex-wrap justify-evenly w-full mt-2 bg-white p-6">
        {checkedPartId ? (
          partPriceByPartId(checkedPartId) ? (
            <div>
              {part_price.map((pp, i) => {
                let part = partById(Number(checkedPartId));
                const date = new Date(pp.created_at);
                return pp.part_id === partById(Number(checkedPartId))?.id! &&
                  part ? (
                  <div key={i}>
                    <Popup
                      trigger={
                        <div className="my-3 lg:w-full mx-auto px-3 py-4 flex-grow w-72 w-19/20 bg-gray-bg hover:translate-x-2 hover:shadow-lg transition-all rounded-lg shadow-sm border-accent border-2 relative">
                          <div>
                            <div className="pb-3">
                              <div className="text-sm leading-relaxed w-9/12 font-extrabold text-accent-dark mb-1">
                                {part.name}
                              </div>
                              <div className="text-xs font-extrabold text-accent-light">
                                {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
                              </div>
                            </div>
                            <div className="text-base font-extrabold  text-accent-dark">
                              {`$${pp.price}`}
                            </div>
                          </div>
                        </div>
                      }
                      modal
                    >
                      <div className="">
                        <div className="pb-4">
                          <div className="text-2xl leading-relaxed font-bold text-accent-dark">
                            {part.name}
                            <div className="text-sm font-extrabold text-type-light">
                              {part.company}
                            </div>
                          </div>
                        </div>
                        <div className="uppercase text-sm font-semibold text-accent-dark">
                          {part.type}
                        </div>
                        <div className="mt-3">
                          <div className="text-xl font-extrabold  text-accent-dark">{`$${pp.price}`}</div>
                        </div>
                        <div className="text-lg font-semibold text-accent-dark mt-2">
                          {`${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`}
                        </div>
                      </div>
                    </Popup>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <div className="text-accent-light font-bold text-center text-base uppercase ">
              No Price History
            </div>
          )
        ) : (
          <div className="text-accent-light font-bold text-center text-base uppercase ">
            Select a Part
          </div>
        )}
      </div>
    </div>
  );
};

export default PartsPriceHistory;
