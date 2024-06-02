import React from "react";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="w-screen px-20 bg-zinc-950 px-2 py-1 flex flex-col justify-center text-center place-items-center">
      <section className="medsos flex justify-center gap-4 text-slate-100 min-h-10 w-full">
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-100">
          aku
        </a>
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-100">
          aku
        </a>
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-100">
          aku
        </a>
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-100">
          aku
        </a>
      </section>
      <section className="copyright">
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer">
          &copy; Msytc || Moh Solehuddin
        </a>
      </section>
    </footer>
  );
};

export default Footer;
