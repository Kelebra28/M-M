'use client';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import CancelIcon from '@mui/icons-material/Cancel';

type ContatProps = {
 handleContactPopUp: () => void;
};

const EmailPopUp = ({ handleContactPopUp } : ContatProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const stringValueRef = useRef<string>('');

  const sendEmail = (e: any) => {
    handleContactPopUp();
    // e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_hi4xm8o",
    //     "template_okp1zf9",
    //     stringValueRef.current,
    //     "mcx-b1254G5kydduL"
    //   )
    //   .then(
    //     (result) => {
    //       handleContactPopUp();
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-40 flex justify-center items-center">
      <div
        onClick={handleContactPopUp}
        className="absolute top-0 left-0 bottom-0 right-0 opacity-50 bg-[#000000]"
      />
      <div className="lg:w-[665px] w-[80%] h-[80vh] lg:h-[auto]  pt-[30px] pr-[30px] bg-[white] z-40 rounded-3xl lg:border-l-[35px] lg:border-l-dk-main shadow-xl pb-[48px]">
        <div className="flex justify-end">
          <div
            className="w-[22px] h-[22px] relative cursor-pointer "
            onClick={handleContactPopUp}
          >
          <CancelIcon onClick={() => handleContactPopUp()} />
            {/* <LazyImage src="/icons/close.svg" alt="dk glass icon close" /> */}
          </div>
        </div>
        <div className="h-[100%] overflow-auto">
          <div className="flex justify-center">
            <div className="w-[100%] lg:w-[213px] h-[90px] relative mb-[20px] lg:mb-[54px] lg:mx-auto">
            <Image 
              src='/icons/logo_white.svg'
              alt='' 
              width={600}
              height={600}
            />
            </div>
          </div>
          <div className="maincontent  ml-[26px]">
            <div>
              <span className="text-[26px] font-semibold">Contactanos</span>
              <p className="text-[14px] text-[#707070]">
              Lleva tus proyectos al siguiente nivel te aseguro que seremos los mejores aliados .
              </p>
            </div>
            <form action="" ref={formRef}>

              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="my-[10px] lg:my-[23px] flex flex-col lg:w-[47%]">
                  <label htmlFor="" className="text-[14px]">
                    Nombre
                  </label>
                  <input
                    name="user_name"
                    placeholder="Nombre"
                    className="pl-[12px] border border-dk-gray shadow h-[51px] rounded-lg"
                    type="text"
                  />
                </div>
                <div className="my-[10px] lg:my-[23px] flex flex-col lg:w-[47%]">
                  <label htmlFor="" className="text-[14px]">
                    Email
                  </label>
                  <input
                    name="user_email"
                    placeholder="exaple@email.com"
                    className="border border-dk-gray pl-[12px] shadow h-[51px] rounded-lg"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <div className="my-[10px] lg:my-[23px] flex flex-col h-100px">
                  <label htmlFor="" className="text-[14px]">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    placeholder="Escribe tu mensaje"
                    className="pt-[10px] pl-[12px] shadow h-[150px] border border-dk-gray rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-[40px]">
                <button onClick={sendEmail}>Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPopUp;
