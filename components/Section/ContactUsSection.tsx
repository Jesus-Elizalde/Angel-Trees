import React from "react";

const ContactUsSection = () => {
  return (
    <div className="flex flex-col w-full my-4">
      <h1 className="w-full flex  text-3xl lg:text-5xl justify-center lg:ml-36 my-4">
        Any Questions?
      </h1>
      <div className="flex flex-col-reverse lg:flex-row w-full justify-center gap-16">
        <div className="flex flex-col gap-4 lg:w-96 p-4 lg:p-0">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-primary"
          />
          <input
            type="text"
            placeholder="Your telephone"
            className="input input-bordered input-primary"
          />
          <textarea
            className="textarea textarea-bordered textarea-primary "
            placeholder="Your question"
          ></textarea>
        </div>
        <div>
          <p className="lg:w-96 text-neutral-content px-4 lg:px-0">
            Write to us and we will be sure to answer all your questions and
            give you a comprehensive consultation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
