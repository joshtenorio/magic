import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/draw")({
  component: RouteComponent,
});

function RouteComponent() {
  const [card, setCard] = useState(null);
  const [setCode, setSetCode] = useState("FDN");
  const [colNumber, setColNumber] = useState();

  async function doThing() {
    const res = await fetch(
      "https://api.scryfall.com/cards/" +
        setCode +
        "/" +
        (colNumber ?? 0).toString(),
      {
        headers: {
          "User-Agent": "jxrmtg/0.1",
          Accept: "application/json",
        },
      },
    );
    const card = await res.json();
    console.log(card.name);
    setCard(card);
    // legalities.standard
    // legalities.commander
  }

  return (
    <div className="flex flex-col p-2 max-w-[900px] space-y-2">
      <div className="flex flex-row space-x-2">
        <Input
          className="flex-grow-0 w-40"
          placeholder="three-to-five letter set code"
          value={setCode}
          onChange={(event: any) => setSetCode(event.target.value)}
        />
        <Input
          placeholder="Collector's number"
          value={colNumber}
          onChange={(event: any) => setColNumber(event.target.value)}
        />
        <Button onClick={doThing}>Submit</Button>
      </div>
      <Separator />
      {card != null ? <MTGCard card={card} /> : <></>}
    </div>
  );
}

interface MTGCardProps {
  card: any;
}
function MTGCard(props: MTGCardProps) {
  return (
    <Card className="flex flex-row space-x-2 p-2">
      <CardHeader className="flex-grow">
        <CardTitle>{props.card.name}</CardTitle>
      </CardHeader>
      <div className="flex flex-col space-y-2 flex-grow">
        {props.card.prices.usd != null ? (
          <div>nonfoil: ${props.card.prices.usd}</div>
        ) : (
          <></>
        )}
        {props.card.prices.usd_foil != null ? (
          <div>foil: ${props.card.prices.usd}</div>
        ) : (
          <></>
        )}
        {props.card.prices.usd_etched != null ? (
          <div>etched: ${props.card.prices.usd}</div>
        ) : (
          <></>
        )}

        <Button>Add nonfoil to collection</Button>
        <Button>Add foil to collection</Button>
      </div>
      <img
        src={props.card.image_uris.png}
        width={300}
        className="object-contain"
      />
    </Card>
  );
}
