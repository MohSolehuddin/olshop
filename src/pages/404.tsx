import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center place-items-center flex-col">
      <p className="text-5xl text-red-600">404</p>
      <p className="text-xl">Page not found</p>
      <Link href={"/"}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
