import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IPart, IUser } from "../../lib/types";
import useTitle from "../../lib/use-title";
import PartsCart from "./PartsCart";
import PartsList from "./PartsList";
import PartsPriceHistory from "./PartsPriceHistory";
import echo from "../../lib/echo";

interface IPlatformProps {
  parts: IPart[];
  user: IUser;
  grouped_parts: [];
}

const Page: React.FC<IPlatformProps> = ({
  parts: httpParts,
  user,
  grouped_parts,
}: IPlatformProps) => {
  useTitle("Platform | Exun Hardware 2021");
  const [parts, setParts] = useState(httpParts);

  useEffect(() => {
    console.log("Effect running");
    echo.channel("parts").listen("PriceChanged", (e: { part: IPart }) => {
      console.log("Part", e.part);
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

  return (
    <Layout links={[]}>
      <div className="flex items-start justify-center lg:flex-row flex-col h-full w-full">
        <PartsPriceHistory />
        {user.cart_parts ? (
          <>
            <PartsList parts={parts} cart={grouped_parts} />
            <PartsCart cart={grouped_parts} parts={parts} />
          </>
        ) : (
          <>
            <PartsList parts={parts} />
            <PartsCart parts={parts} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Page;
