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
  return (
    <section className="w-[300px] md:w-[400px] bg-neutral-100 rounded-md min-h-[460px] max-h-full transition duration-150 ease-linear hover:scale-110">
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
      <p className="text-justify mb-4 text-zinc-600">{paragraph}</p>
      <Button>{children}</Button>
    </section>
  );
}
