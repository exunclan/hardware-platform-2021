import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IAssignment, IPart, IPartPrice, IUser } from "../../lib/types";
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
  assignment: IAssignment;
}

const Page: React.FC<IPlatformProps> = ({
  parts: httpParts,
  user,
  grouped_parts,
  part_price,
  assignment,
}: IPlatformProps) => {
  const { flash }: any = usePage().props;
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
  const [listView, setListView] = useState(false);

  let containerClassList =
    "flex items-start justify-center lg:flex-row flex-col h-full w-full";
  if (listView) {
    containerClassList =
      "flex items-start justify-center lg:flex-row flex-col h-full w-full flex-wrap ";
  } else {
    containerClassList =
      "flex items-start justify-center lg:flex-row flex-col h-full w-full";
  }

  return (
    <Layout links={[]}>
      <div className={`${containerClassList} `}>
        <PartsPriceHistory
          parts={parts}
          checkedPartId={checkedPartId}
          setCheckedPartId={setPartId}
          part_price={part_price}
          listView={listView}
          setListView={setListView}
        />
        {user.cart_parts ? (
          <>
            <PartsList
              parts={parts}
              cart={grouped_parts}
              checkedPartId={checkedPartId}
              setCheckedPartId={setPartId}
              flash={flash}
              assignment={assignment}
              listView={listView}
              setListView={setListView}
            />
            <PartsCart cart={grouped_parts} parts={parts} />
          </>
        ) : (
          <>
            <PartsList
              parts={parts}
              checkedPartId={checkedPartId}
              setCheckedPartId={setPartId}
              flash={flash}
              assignment={assignment}
              listView={listView}
              setListView={setListView}
            />
            <PartsCart parts={parts} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Page;
