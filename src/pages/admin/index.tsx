import MainLayout from "@/components/layouts/MainLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface ErrorType {
  error: string;
  errorMessage: any;
}

const AdminPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState<ErrorType[] | any[]>([]);
  const [dataSkills, setDataSkills] = useState<ErrorType[] | any[]>([]);
  const [dataCertificats, setDataCertificats] = useState<ErrorType[] | any[]>(
    []
  );

  useEffect(() => {
    async function getData(url: string) {
      try {
        let result = await axios.get(url);
        return result.data;
      } catch (e) {
        throw { error: "failed to load data", errorMessage: e };
      }
    }

    getData("/api/dataProducts")
      .then((data) => setDataProducts(data))
      .catch((e) => setDataProducts([{ error: true, errorMessage: e }]));

    getData("/api/dataSkills")
      .then((data) => setDataSkills(data))
      .catch((e) => setDataSkills([{ error: true, errorMessage: e }]));

    getData("/api/dataCertificats")
      .then((data) => setDataCertificats(data))
      .catch((e) => setDataCertificats([{ error: true, errorMessage: e }]));
  }, []);

  return (
    <MainLayout>
      {/* You can add code here to display dataProducts, dataSkills, and dataCertificats */}
    </MainLayout>
  );
};

export default AdminPage;
