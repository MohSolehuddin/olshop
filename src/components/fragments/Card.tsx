import { useState, useEffect, useRef } from "react";
import { Button } from "../elements/Button";
import Image from "next/image";

export function CardContainer({
  children,
  customStyle = "min-w-fit",
}: {
  children: React.ReactNode;
  customStyle: string;
}) {
  return (
    <section
      id="card-container"
      className={`rounded-2xl p-1 mx-auto
    h-screen w-full px-12 flex ${customStyle} place-items-center gap-12 `}>
      {children}
    </section>
  );
}

export function CardItem({
  img,
  title,
  paragraph,
  children,
  link,
}: {
  children: React.ReactNode;
  title: string;
  img: string;
  paragraph: string;
  link: any;
}) {
  const [isMore, setIsMore] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const handleIsMore = () => {
    setIsMore(!isMore);
  };

  useEffect(() => {
    if (paragraphRef.current) {
      setIsOverflow(paragraphRef.current.scrollHeight > 48);
    }
  }, []);

  return (
    <section className="w-[308px] md:w-[408px] bg-neutral-100 rounded-md min-h-[500px] max-h-full transition duration-150 ease-linear hover:scale-110 p-2">
      <section className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] rounded">
        <Image
          className="h-full w-full"
          src={img}
          alt={title}
          width={300}
          height={300}
        />
      </section>
      <h3 className="text-2xl font-bold text-zinc-800">{title}</h3>
      <p
        ref={paragraphRef}
        id={title}
        className={`text-justify mb-4 text-zinc-600 ${
          isMore ? "h-fit" : "h-12 overflow-y-hidden"
        }`}>
        {paragraph}
      </p>
      {isOverflow && (
        <p
          onClick={handleIsMore}
          className="more text-favBlueSky relative bottom-10 z-10 bg-neutral-50 w-20 left-3/4 px-6 cursor-pointer">
          {isMore ? "Hidden..." : "More..."}
        </p>
      )}
      <Button>{children}</Button>
    </section>
  );
}
