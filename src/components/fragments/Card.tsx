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
      className={`rounded-2xl bg-zinc-800 p-1 mx-auto
    h-[500px] w-full px-1 flex ${customStyle} gap-3 p-3`}>
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
  return (
    <section className="w-[300px] bg-neutral-100 rounded-md p-1 max-h-[460px]">
      <Image
        className="w-[300px] h-[300px]"
        src={img}
        alt={title}
        width={300}
        height={300}
      />
      <h3 className="text-2xl font-bold text-zinc-800">{title}</h3>
      <p className="text-justify mb-4 text-zinc-600">{paragraph}</p>
      <Button>{children}</Button>
    </section>
  );
}
