import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IPart, IPartPrice, IUser } from "../../lib/types";
import useTitle from "../../lib/use-title";
import PartsCart from "./PartsCart";
import PartsList from "./PartsList";
import PartsPriceHistory from "./PartsPriceHistory";
import echo from "../../lib/echo";

interface IPlatformProps {
  parts: IPart[];
  user: IUser;
  grouped_parts: [];
  part_price: IPartPrice[];
}

const Page: React.FC<IPlatformProps> = ({
  parts: httpParts,
  user,
  grouped_parts,
  part_price,
}: IPlatformProps) => {
  useTitle("Platform | Exun Hardware 2021");
  const [parts, setParts] = useState(httpParts);

  useEffect(() => {
    echo.channel("parts").listen("PriceChanged", (e: { part: IPart }) => {
      setParts((parts) =>
        parts.map((part) => {
          if (part.id === e.part.id) {
            part.price = e.part.price;
          }
          return part;
        })
      );
    });
  }, []);

  const [checkedPartId, setPartId] = useState(0);

  return (
    <Layout links={[]}>
      <div className="flex items-start justify-center lg:flex-row flex-col h-full w-full">
        <PartsPriceHistory
          parts={parts}
          checkedPartId={checkedPartId}
          setCheckedPartId={setPartId}
          part_price={part_price}
        />
        {user.cart_parts ? (
          <>
            <PartsList
              parts={parts}
              cart={grouped_parts}
              checkedPartId={checkedPartId}
              setCheckedPartId={setPartId}
            />
            <PartsCart cart={grouped_parts} parts={parts} />
          </>
        ) : (
          <>
            <PartsList
              parts={parts}
              setCheckedPartId={setPartId}
              checkedPartId={checkedPartId}
            />
            <PartsCart parts={parts} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Page;
