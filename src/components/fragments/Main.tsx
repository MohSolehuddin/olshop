import { GetStaticProps } from "next";
import React from "react";
import Wellcome from "./Wellcome";
import Stat from "./Stat";
import ScrollContainer from "./ScrollContainer";
import { CardContainer, CardItem } from "./Card";
import { FaWhatsappSquare } from "react-icons/fa";
import Contact from "./Contact";
import axios from "axios";

// Define the product interface
interface ProductType {
  title: string;
  img: string;
  paragraph: string;
  link: string;
  price: number;
}

const Main = (props: { productData?: ProductType[] }) => {
  const { productData } = props;
  return (
    <main className="bg-neutral-50 overflow-x-hidden">
      <Wellcome>Msytc Digital Solutions</Wellcome>
      <Stat />
      <ScrollContainer id="product">
        <CardContainer customStyle="min-w-fit">
          {productData?.map((item) => (
            <CardItem
              key={item.title}
              img={`/${item.img}`}
              title={item.title}
              paragraph={item.paragraph}
              link={item.link}
              price={`Started at Rp. ${item.price.toLocaleString("ID")}`}>
              Details
            </CardItem>
          ))}
        </CardContainer>
      </ScrollContainer>
      <Contact />
      <section className="maps w-screen h-screen flex flex-col justify-center place-items-center bg-neutral-200 gap-10 max-md:py-4">
        <h2 className="text text-zinc-800 text-2xl">alamat kami</h2>
        <iframe
          className="w-full md:w-2/3 h-full md:h-2/3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08805420447803!2d113.6974429977409!3d-7.746383037483264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd71e5c4fc43c07%3A0xcfdb5fd42c252605!2sJl.%20Pesanggrahan%2C%20Kec.%20Besuki%2C%20Kabupaten%20Situbondo%2C%20Jawa%20Timur%2068356!5e0!3m2!1sid!2sid!4v1717818033366!5m2!1sid!2sid"
          loading="lazy"></iframe>
      </section>
      <a
        title="link"
        href="https://wa.me/6283849079619"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp fixed bottom-4 right-4 z-50 text-5xl bg-zinc-800 w-12 h-12 overflow-hidden rounded-md hover:scale-125 animate-bounce transition duration-200">
        <FaWhatsappSquare className="text-favBlueSky scale-125" />
      </a>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/products");
  console.log("tests", data);

  return {
    props: {
      productData: data,
    },
  };
};

export default Main;
