interface CardContent {
  imgLink: string;
  title: string;
  category: string;
  content: string;
  url: string;
  author: string;
}

export default function Card({
  imgLink,
  title,
  category,
  content,
  url,
  author,
}: CardContent) {
  return (
    <div className="flex flex-col border border-dusty-rose-400 bg-vista-white-500">
      <div className="w-full">
        <img src={imgLink} alt="" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row">
          <p>{category}</p>
        </div>
        <p>{title}</p>
        <p>{content}</p>
        <hr className="border border-dusty-rose-400" />
        <p className="text-blackish-500">{author}</p>
        <a href={url} className=" text-deep-red-500">
          Link to Read
        </a>
      </div>
    </div>
  );
}
