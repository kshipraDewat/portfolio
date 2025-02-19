import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_jocsbe5",
        "template_ebmcu3p",
        form.current,
        "NY1HflyVddmnNPXw5",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully");
          toast.success("Enquiry submitted successfully.");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text)
        },
      );
  };
  return (
    <div
      id="contact"
      className="bg-[#131417] px-28 py-6 pb-32 text-white max-sm:px-8"
    >
      <h1 className="mb-10 mt-16 text-4xl font-normal max-sm:text-2xl">{`Let's Connect`}</h1>
      {/* email form div */}

      <div className="">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="z-20 flex items-end justify-between gap-10 max-sm:flex-col max-sm:items-start max-sm:text-sm"
        >
          <div className="flex flex-col max-sm:w-full">
            <label id="inputName" className="mb-1" htmlFor="userName">
              Name
            </label>
            <input
              className="mb-3 border-b border-white bg-inherit py-1 outline-none max-sm:p-0	"
              type="text"
              name="user_name"
              id="userName"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col max-sm:w-full ">
            <label id="inputEmail" className="mb-1" htmlFor="emailAddress">
              Email
            </label>
            <input
              className="mb-3 border-b border-white bg-inherit py-1 outline-none	max-sm:p-0	"
              type="email"
              name="user_email"
              id="emailAddress"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="flex w-1/3 flex-col max-sm:w-full">
            <label id="inputMsg" htmlFor="messageBox" className="mb-1 py-1">
              Message
            </label>
            <textarea
              className="mb-3 border-b border-white bg-inherit pb-1 outline-none	"
              name="message"
              id="messageBox"
              required
              type="text"
              rows={1}
              placeholder="Enter your query here"
            />
          </div>

          <button
            type="submit"
            required
            className="relative -left-1 -top-1 m-3 flex shrink-0 items-center gap-4   bg-white p-2 px-4 py-2  text-black transition-all before:absolute before:left-1 before:top-1 before:z-10 before:h-full before:w-full before:border before:border-white before:transition-all before:content-[''] hover:left-0 hover:top-0 before:hover:left-0 before:hover:top-0 active:bg-gray-300  max-sm:m-0"
          >
            <div>Send Message</div>
            <div className="">
              <IoIosSend className="size-4"/>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
