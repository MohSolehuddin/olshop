import React, { useRef, useState } from "react";
import Input from "../elements/Input";
import { Button } from "../elements/Button";
import Label from "../elements/Input/Label";
import TextArea from "../elements/Input/TextArea";

const Contact = () => {
  const [useMessage, setUseMessage] = useState("");

  const handleIsType = () => {
    const name = document.getElementById("input_name") as HTMLInputElement;
    const message = document.getElementById(
      "input_message"
    ) as HTMLTextAreaElement;
    setUseMessage(
      `Assalamu'alikum, Perkenalkan nama saya ${name.value}, ${message.value}`
    );
  };

  return (
    <section
      className="Contact flex justify-center place-items-center flex-row w-screen h-screen bg-zinc-800 text-neutral-50 px-12 md:px-48"
      id="Contact">
      <form action="/api/kirim" method="post">
        <h3 className="text-center text-neutral-50 text-3xl">
          Contact me, redirect to whatsapp
        </h3>
        <Input
          onInput={handleIsType}
          type="text"
          placeholder="type your name"
          htmlFor="name">
          Name
        </Input>
        <section>
          <Label htmlFor="message">Message</Label>
          <TextArea
            onInput={handleIsType}
            name="message"
            placeholder="type you message for Msytc Digital Solutions"></TextArea>
        </section>
        <a
          href={`https://api.whatsapp.com/send?phone=6283849079619&text=${useMessage}`}
          target="_blank"
          rel="noopener noreferrer">
          <Button>send</Button>
        </a>
      </form>
    </section>
  );
};

export default Contact;
