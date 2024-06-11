import React, { use, useRef, useState } from "react";
import Input from "../elements/Input";
import { Button } from "../elements/Button";
import Label from "../elements/Input/Label";
import TextArea from "../elements/Input/TextArea";
import isBadWord from "@/functions/bad_word";
const Contact = () => {
  const [useMessage, setUseMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleIsType = () => {
    const name = document.getElementById("input_name") as HTMLInputElement;
    const message = document.getElementById(
      "input_message"
    ) as HTMLTextAreaElement;

    if (name.value !== "" && message.value !== "") {
      setUseMessage(
        `Assalamu'alikum, Perkenalkan nama saya ${name.value}, ${message.value}`
      );
      setIsFormValid(true);
    } else {
      setUseMessage("");
      setIsFormValid(false);
    }
  };

  return (
    <section
      className="Contact flex justify-center place-items-center flex-row w-screen h-screen bg-zinc-800 text-neutral-50 px-12 md:px-48"
      id="Contact">
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center text-neutral-50 text-3xl">
          Contact me, redirect to whatsapp
        </h3>
        <Input
          id="input_name"
          onInput={handleIsType}
          type="text"
          placeholder="type your name"
          htmlFor="name"
          required>
          Name
        </Input>
        <section>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="input_message"
            onInput={handleIsType}
            name="message"
            placeholder="type your message for Msytc Digital Solutions"
            required></TextArea>
        </section>
        <a
          href={
            isFormValid
              ? `https://api.whatsapp.com/send?phone=6283849079619&text=${useMessage}`
              : "#"
          }
          about="_blank"
          onClick={(e) => {
            if (!isFormValid) {
              e.preventDefault();
              alert("Tolong masukan pesan dengan benar");
            }
            if (isBadWord(useMessage) === false) {
              e.preventDefault();
              alert("Tolong berkata sopan!!!");
            }
          }}
          rel="noopener noreferrer">
          <Button>send</Button>
        </a>
      </form>
    </section>
  );
};

export default Contact;
