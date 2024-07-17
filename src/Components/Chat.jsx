import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Chat = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bb380yb", "template_t3n2ita", form.current, {
        publicKey: "Q9dxN7-WywfY217Gi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="" id="hello">
        <h2 className="text-center  p-4 text-2xl font-bold">Ping Me!!</h2>
        <div className="flex justify-arround items-center">
          <div
            className=""
            id="chat"
          >
            <form ref={form} onSubmit={sendEmail}>
              <label className="">Name</label>
              <input type="text" name="to_name" />
              <label className="">Email</label>
              <input type="email" name="from_email" />
              <label className="">Message</label>
              <textarea  name="message" />
              <br />
              <button
                type="submit"
                className="rounded-xl border-2 border-red-400 text-white"
                id="btn"
                value="Send Massege">Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
