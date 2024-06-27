import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Input from "@/components/elements/Input";
import { Button } from "@/components/elements/Button";

interface ErrorType {
  error: string;
  errorMessage: any;
}

const AdminPage = () => {
  const [isCorrectPassword, setIsCorrectPassword] = useState<string | null>(
    null
  );
  const [isLoading, setisLoading] = useState(false);
  const [dataProducts, setDataProducts] = useState<ErrorType[] | any[]>([]);
  const [dataSkills, setDataSkills] = useState<ErrorType[] | any[]>([]);
  const [dataCertificats, setDataCertificats] = useState<ErrorType[] | any[]>(
    []
  );
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      axios
        .post("/api/auth/validateToken", { token })
        .then((result) => {
          if (result.data.valid) {
            setIsLogin(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function getData(url: string) {
      try {
        let result = await axios.get(url);
        return result.data;
      } catch (e) {
        throw { error: "failed to load data", errorMessage: e };
      }
    }

    getData("/api/data/products")
      .then((data) => setDataProducts(data))
      .catch((e) => setDataProducts([{ error: true, errorMessage: e }]));

    getData("/api/data/mySkills")
      .then((data) => setDataSkills(data))
      .catch((e) => setDataSkills([{ error: true, errorMessage: e }]));

    getData("/api/data/certifikats")
      .then((data) => setDataCertificats(data))
      .catch((e) => setDataCertificats([{ error: true, errorMessage: e }]));
  }, []);

  async function handleLogin() {
    setisLoading(true);
    try {
      let username = (document.getElementById("username") as HTMLInputElement)
        .value;
      let password = (document.getElementById("password") as HTMLInputElement)
        .value;

      let data = { username, password };
      let res = await axios.post("/api/auth/login", data);

      if (res.data.status) {
        setIsLogin(true);
        localStorage.setItem("token", res.data.token);
        setIsCorrectPassword(null);
      }
    } catch (e) {
      let error = e as AxiosError;
      if (error.response && error.response.status === 401) {
        setIsCorrectPassword(`Invalid username or password`);
      } else {
        setIsCorrectPassword("An error occurred. Please try again.");
      }
    }
    setisLoading(false);
  }

  return (
    <main>
      {!isLogin && (
        <form
          action="/api/auth/login"
          method="POST"
          className="px-12 py-12 md:px-40 lg:px-96 bg-zinc-700 text-favBlueSky h-screen w-screen">
          <h1 className="text-3xl text-center pb-12">
            Login to admin page for msytc setting
          </h1>
          {isCorrectPassword && (
            <p className="text-center text-red-400">{isCorrectPassword}</p>
          )}
          <Input
            htmlFor="username"
            type="text"
            placeholder="Masukkan nama pengguna"
            id="username">
            Nama pengguna
          </Input>
          <Input
            htmlFor="password"
            type="password"
            placeholder=""
            id="password">
            Password
          </Input>
          <Button type="button" onClick={handleLogin}>
            Login
          </Button>
          {isLoading && <p className="text-center">Loading...</p>}
        </form>
      )}
      {isLogin && <p>you are logged in</p>}
    </main>
  );
};

export default AdminPage;
