import MainLayout from "@/components/layouts/MainLayout";
import Main from "@/components/fragments/Main";
import { GetStaticProps } from "next";
import axios from "axios";

type ProductType = {
  title: string;
  img: string;
  keterangan: string;
  link: string;
  price: number;
};

export default function Home(props: { productData: ProductType[] }) {
  let { productData } = props;
  return (
    <MainLayout>
      <Main productData={productData} />
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  productData: ProductType[];
}> = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/data/products");

    return {
      props: {
        productData: res.data,
      },
      revalidate: 60, // Revalidate the data at most once every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        productData: [], // Return empty array on error
      },
    };
  }
};
