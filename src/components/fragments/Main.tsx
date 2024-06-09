import { Imprima } from "next/font/google";
import React from "react";
import Wellcome from "./Wellcome";
import Stat from "./Stat";
import Shape from "./shape";
import ScrollContainer from "./ScrollContainer";
import { CardContainer, CardItem } from "./Card";
import { FaWhatsappSquare } from "react-icons/fa";
import Contact from "./Contact";

const productData = [
  {
    img: "/basic_service.webp",
    title: "Kantong kering",
    paragraph:
      "Website simple dan statis dengan fitur yang tidak begitu banyak. (belum include hosting)",
    price: "Rp. 300.000 - 999.0000",
    link: "https://msytc.vercel.app",
  },
  {
    img: "/basic_service.webp",
    title: "Basic Bundle",
    paragraph:
      "Website simple dan statis dengan fitur yang tidak begitu banyak.",
    price: "Rp. 1.000.000 - 4.999.999",
    link: "https://msytc.vercel.app",
  },
  {
    img: "/dinamis_web_service.webp",
    title: "Premium Bundle",
    paragraph:
      "Website dinamis dengan fitur yang cukup banyak serta include dengan database.",
    price: "Rp. 5.000.000 - 9.999.999",
    link: "https://msytc.vercel.app",
  },
  {
    img: "/spesial_service.webp",
    title: "Special Bundle",
    paragraph:
      "Website dengan kompleksitas tinggi dan juga dinamis serta fitur yang banyak.",
    price: "Rp. 10.000.000 +",
    link: "https://msytc.vercel.app",
  },
  {
    img: "/school_service.jpg",
    title: "Special Bundle",
    paragraph: "Website untuk biodata kelas, statis dengan fitur seadanya.",
    price: "Rp. 600.000",
    link: "https://msytc.vercel.app",
  },
];

const Main = () => {
  return (
    <main className="bg-neutral-50 overflow-x-hidden">
      <Wellcome>Msytc Digital Solutions</Wellcome>
      <Stat></Stat>
      <ScrollContainer id="product">
        <CardContainer customStyle="min-w-fit">
          {productData.map((item) => {
            return (
              <CardItem
                key={item.title}
                img={item.img}
                title={item.title}
                paragraph={item.paragraph}
                link={item.link}>
                More
              </CardItem>
            );
          })}
        </CardContainer>
      </ScrollContainer>
      <Contact></Contact>
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
        <FaWhatsappSquare className="text-favBlueSky scale-125 " />
      </a>
    </main>
  );
};

export default Main;
