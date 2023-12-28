import { useRouter } from "next/navigation";

type Props = {
  item: {
    id: string;
    title: string;
    description: string;
    author: string;
  };
};

const BlogCard = ({ item }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col border-black p-4 border-[1px] rounded-lg gap-1">
      <h1
        onClick={() => router.push(`/${item.id}`)}
        className="text-black text-[24px] pb-4 font-semibold hover:cursor-pointer"
      >
        {item?.title ?? ""}
      </h1>
      <p className="text-black">{item?.description ?? ""}</p>
      <p className="font-semibold">by {item?.author ?? ""}</p>
    </div>
  );
};

export default BlogCard;
