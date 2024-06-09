import React from "react";
import Input from "../elements/Input";
import { Button } from "../elements/Button";

const Contact = () => {
  return (
    <section
      className="Contact flex justify-center place-items-center flex-row w-screen h-screen bg-zinc-800 text-neutral-50 md:px-48"
      id="Contact">
      <form action="/api/kirim" method="post">
        <h3 className="text-center text-favBlueSky text-3xl">
          Contact me, redirect to whatsapp
        </h3>
        <Input type="" placeholder="type your email" htmlFor="">
          Email
        </Input>
        <Input type="" placeholder="" htmlFor="">
          Password
        </Input>
        <Input type="" placeholder="" htmlFor="">
          Password
        </Input>
        <Button>send</Button>
      </form>
    </section>
  );
};

export default Contact;
