import React from "react";
import { PortableText } from "@portabletext/react";
import { Hobby } from "@/types/Hobby";

type Props = {
  hobby: Hobby;
};

const QuoteCard = ({ hobby }: Props) => {
  return (
    <div className="flex w-[384px] text-5xl font-permanent-marker h-[388px] items-center justify-center ">
      {hobby.description && hobby.description.map(
        (content, i: number) =>
          content && <PortableText key={i} value={content} />
      )}
    </div>
  );
};

export default QuoteCard;
