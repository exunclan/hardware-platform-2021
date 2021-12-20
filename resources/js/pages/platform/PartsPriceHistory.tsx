import React from "react";

interface IPageProps {}

const PartsPriceHistory: React.FC<IPageProps> = ({}: IPageProps) => {
  return (
    <div className="w-full max-w-xs md:mr-4 mx-auto md:my-0 my-4">
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
    </div>
  );
};

export default PartsPriceHistory;
