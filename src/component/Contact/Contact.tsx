import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
type Props = {};
interface IFormInput {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  email: string;
}
const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = () => {
    console.log("nada");
  };
  return (
    <div className="h-full relative">
      <div className="pt-[90px]">
        <h4 className="text-center text-3xl text-slate-50 tracking-widest hover-underline-animation font-semibold cursor-pointer lg:px-96">
          Επικοινωνία
        </h4>
      </div>
      <div className="flex w-screen lg:flex-row flex-col space-x-12 lg:justify-between 2xl:px-64 mt-8">
        <div className="lg:justify-center flex flex-col lg:items-center w-full text-center">
          <h4 className="text-slate-50 text-xl mb-8 tracking-widest">
            Που θα μας βρείτε
          </h4>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                height="500"
                id="gmap_canvas"
                className="rounded-xl lg:w-[600px] w-[350px] mx-auto"
                src="https://maps.google.com/maps?q=54,%20Methonis%20Street%20Pireas&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-slate-50 text-xl tracking-widest">
              Στοιχεία Επικοινωνίας
            </h4>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <BsFillTelephoneFill color="white" />
              <h4 className="text-slate-50">(+30) 210 4082170</h4>
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <BsFillTelephoneFill color="white" />
              <h4 className="text-slate-50">(+30) 210 4082167</h4>
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <FaFax color="white" />
              <h4 className="text-slate-50">(+30) 210 4082171</h4>
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <MdEmail color="white" />
              <h4 className="text-slate-50">olympicjoin@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8  lg:px-16 px-8 py-12 rounded-lg lg:bg-[#326da8]/80"
          >
            <div className="xl:flex 2xl:flex-row flex flex-col lg:space-y-4 2xl:space-y-0 space-y-4 lg:justify-center 2xl:space-x-2">
              <div className="flex flex-col w-full">
                {errors.firstName && (
                  <span role="alert" className=" text-red-600 text-center">
                    {errors.firstName.message}
                  </span>
                )}
                <input
                  placeholder="Όνομα"
                  {...register("firstName", {
                    required: "Το όνομα είναι υποχρεωτικό",
                  })}
                  className={`p-2  outline-none rounded-md border-2 ${
                    errors.firstName ? "border-2 border-red-500" : ""
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                {errors.lastName && (
                  <span role="alert" className=" text-red-600 text-center">
                    {errors.lastName.message}
                  </span>
                )}
                <input
                  placeholder="Επώνυμο"
                  {...register("lastName", {
                    required: "Το επώνυμο είναι υποχρεωτικό",
                  })}
                  className={`p-2  outline-none rounded-md border-2 ${
                    errors.lastName ? "border-2 border-red-500" : ""
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              {errors.lastName && (
                <span role="alert" className=" text-red-600 text-center">
                  {errors.lastName.message}
                </span>
              )}
              <input
                placeholder="Email"
                {...register("email", {
                  required: "Το email είναι υποχρεωτικό",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Μη έγκυρο email.",
                  },
                })}
                className={`p-2  outline-none rounded-md border-2 ${
                  errors.lastName ? "border-2 border-red-500" : ""
                }`}
              />
            </div>
            <div className="flex flex-col">
              {errors.lastName && (
                <span role="alert" className=" text-red-600 text-center">
                  {errors.lastName.message}
                </span>
              )}
              <input
                placeholder="Θεμα"
                {...register("subject", {
                  required: "Το θέμα είναι υποχρεωτικό",
                })}
                className={`p-2  outline-none rounded-md border-2 ${
                  errors.subject ? "border-2 border-red-500" : ""
                }`}
              />
            </div>

            <div className="flex flex-col">
              {errors.message && (
                <span role="alert" className=" text-red-600 text-center">
                  {errors.message.message}
                </span>
              )}
              <textarea
                placeholder="Μηνυμα..."
                {...register("message", {
                  required: "Το μήνυμα είναι υποχρεωτικό",
                })}
                className={`p-2  outline-none rounded-md border-2 ${
                  errors.subject ? "border-2 border-red-500" : ""
                }`}
              />
            </div>

            <button
              type="submit"
              className="bg-slate-50 py-4 mx-auto block rounded-md text-gray-900 px-12 mt-4 hover:bg-[#326da8] hover:text-slate-50 transition-all duration-500"
            >
              Αποστολή
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
