import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
  name: yup.string().required("you missed this field"),
  email: yup
    .string()
    .required("you missed this field")
    .email("Email is not valid"),
  message: yup
    .string()
    .required("you missed this field")
    .min(5, "It should be more than 5 characters"),
});

function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName(data.name);
      reset();
    }, 4000);
  };

  const input = [
    { type: "text", placeholder: "Your name", errors: "name" },
    { type: "email", placeholder: "Your email", errors: "email" },
  ];

  return (
    <Fade>
      <section     id="contact" className=" bg-slate-100 dark:bg-[rgba(0,0,0,0.96)]">
        <h1  className=" text-center px-10 pt-5 pb-2 laptop:text-left dark:text-white text-[#ff2424] font-bold text-3xl laptop:text-5xl">
          Get in touch
        </h1>
        <div className=" mx-auto bg-[#ff1919] w-[180px] h-[5px] laptop:ml-20 my-2 "></div>

        <section
      
          className="  bg-slate-100 dark:bg-[rgba(0,0,0,0.96)] grid grid-cols-1 laptop:grid-cols-2 w-full h-auto laptop:px-20"
        >
          <div className=" dark:text-white w-full dark:bg-[rgba(0,0,0,0.96)] text-black">
            <p className="     leading-normal px-7  tablet:w-[50%] laptop:w-[100%] laptop:m-0 mx-auto font-medium py-10 text-center laptop:py-6 laptop:text-left  ">
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, fill up the awesome form below or
              send an email to codehubby@gmail.com and ~let's talk.
            </p>
            {/* <img src={ContactImage} alt="" className=" laptop:w-[50%] w-[80%]  object-fill align-middle mx-auto" /> */}
          </div>

          <div className=" bg-white dark:bg-[rgba(0,0,0,0.96)] shadow-2xl rounded-2xl py-5 mx-auto w-[95%] laptop:w-[80%] tablet:w-[70%] mini-laptop:w-[60%] mb-5 px-2  tablet:px-4">
            {success ? (
              <div className=" bg-green-600 relative text-white h-[60px] w-full rounded-md flex justify-center items-center">
                <span className=" text-white text-2xl pr-2">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </span>
                <h1>Thank you {name}</h1>
                <span
                  title="close"
                  onClick={() => setSuccess(false)}
                  className=" absolute right-0 text-red-500 text-2xl top-0"
                >
                  <ion-icon name="close-circle-outline"></ion-icon>
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="  px-3 py-7 w-[100%] h-[auto] flex flex-col gap-3  dark:bg-[rgba(0,0,0,0.96)] "
              >
                {input.map((inputs, index) => (
                  <div key={index} className=" flex flex-col w-full h-auto">
                    <input
                      disabled={loading}
                      {...register(inputs.errors)}
                      type={inputs.type}
                      placeholder="Your name"
                      className=" border-[1px] px-2 text-md font-normal outline-none
               dark:bg-zinc-800
                 placeholder:text-zinc-500  dark:text-white placeholder:font-medium  rounded  border-gray-500 w-[100%] py-3"
                    />
                    <span className="text-red-600 pt-2 font-medium">
                      {errors[inputs.errors]?.message}
                    </span>
                  </div>
                ))}

                <textarea
                  disabled={loading}
                  {...register("message")}
                  placeholder="Your message"
                  className="   px-3 py-2 resize-none dark:text-white  rounded dark:bg-zinc-800 outline-none  placeholder:text-zinc-500 placeholder:font-medium border-[1px] border-gray-500 w-[100%]  h-[155px]"
                ></textarea>
                <span className="text-red-600 font-medium">
                  {errors["message"]?.message}
                </span>

                <button
                  disabled={loading}
                  type="submit"
                  className={`  ${
                    loading
                      ? "bg-[#7e78df81] cursor-not-allowed"
                      : "bg-[#4F46E5] dark:bg-purple-800 "
                  }  rounded-md my-4 px-3 font-medium text-white py-3 w-[200px]`}
                >
                  {loading
                    ? "Processing..."
                    : // <span className="  animate-spin inline-block text-2xl font-semibold text-white">
                      //   <ion-icon name="refresh-outline"></ion-icon>
                      // </span>
                      "Submit"}
                </button>
              </form>
            )}
          </div>
        </section>
      </section>
    </Fade>
  );
}

export default Contact;
