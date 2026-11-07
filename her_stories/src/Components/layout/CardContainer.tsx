import Card from "../common/Card";
import mockDataJson from "./../../Utils/Mocks/MockCards.json";
const cards = mockDataJson.cards;

export default function CardContainer() {
  return (
    <div className="grid grid-cols-4 gap-1 w-2/3 border  border-dusty-rose-400 p-1 bg-vista-white-400">
      {cards.map((card) => (
        <Card key={self.crypto.randomUUID()} {...card} />
      ))}
    </div>

    /*<div className="grid grid-cols-4 gap-1 w-2/3 border  border-dusty-rose-400 p-1 bg-vista-white-400">
      <Card
        title="First Card"
        imgLink={
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        }
        category={"Science"}
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`}
        url={""}
        author={"Aurora Borealis"}
      />
      <Card
        title="Second Card"
        imgLink={
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        }
        category={"Science"}
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`}
        url={""}
        author={"Aurora Borealis"}
      />
      <Card
        title="Third Card"
        imgLink={
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        }
        category={"Science"}
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`}
        url={""}
        author={"Aurora Borealis"}
      />
      <Card
        title="Fourth Card"
        imgLink={
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        }
        category={"Music"}
        content={`It's the cruel beast that you feed
              It's your burning yearning need to bleed
              Through the spillways
              Through the spillways of your soul`}
        url={""}
        author={"Aurora Borealis"}
      />
      <Card
        title="Fifth Card"
        imgLink={
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        }
        category={"Science"}
        content={`The road that leads to nowhere is long, and that those who seek to go there are lost`}
        url={""}
        author={"Aurora Borealis"}
      />
    </div>*/
  );
}
