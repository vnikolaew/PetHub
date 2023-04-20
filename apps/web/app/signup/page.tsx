"use client";
import React from "react";
import { NextPage } from "next";
import * as Form from "@radix-ui/react-form";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";
import {
   VALID_EMAIL_REGEX,
   VALID_PASSWORD_REGEX,
} from "../../utils/string-constants";

const SignUpPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Регистрация", path: "signup" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>
               Създай акаунт в <span className={`font-semibold`}>PetHub</span>{" "}
            </h1>
            <div className={`flex mt-6 gap-36 items-center p-6 justify-around`}>
               <Form.Root className={`flex items-start gap-12`}>
                  <div className={`flex flex-col gap-6 items-start`}>
                     <Form.Field name={"username"}>
                        <Form.Label className={`text-xl`}>Име*</Form.Label>
                        <Form.Message match={(value, _) => true}>
                           Моля въведете валидно име
                        </Form.Message>
                        <Form.Control asChild>
                           <input
                              placeholder={"John"}
                              autoComplete={"off"}
                              className={`text-lg w-96 mt-1 px-4 py-1 block rounded-md shadow-md`}
                              name={"username"}
                              type={"text"}
                           />
                        </Form.Control>
                     </Form.Field>

                     <Form.Field name={"lastName"}>
                        <Form.Label className={`text-xl`}>Фамилия*</Form.Label>
                        <Form.Message match={(value, _) => true}>
                           Моля въведете валидна фамилия
                        </Form.Message>
                        <Form.Control asChild>
                           <input
                              placeholder={"John"}
                              autoComplete={"off"}
                              className={`text-lg w-96 mt-1 px-4 py-1 block rounded-md shadow-md`}
                              name={"username"}
                              type={"text"}
                           />
                        </Form.Control>
                     </Form.Field>

                     <Form.Field name={"lastName"}>
                        <Form.Label className={`text-xl`}>
                           Имейл адрес*
                        </Form.Label>
                        <Form.Message
                           match={(value, _) => VALID_EMAIL_REGEX.test(value)}
                        >
                           Моля въведете валиден имейл
                        </Form.Message>
                        <Form.Control asChild>
                           <input
                              placeholder={"test@pethub.com"}
                              autoComplete={"off"}
                              className={`text-lg w-96 mt-1 px-4 py-1 block rounded-md shadow-md`}
                              name={"email"}
                              type={"text"}
                           />
                        </Form.Control>
                     </Form.Field>

                     <Form.Field className={`mt-2`} name={"password"}>
                        <Form.Label className={`text-xl`}>Парола*</Form.Label>
                        <Form.Message
                           match={(value, _) =>
                              VALID_PASSWORD_REGEX.test(value)
                           }
                        >
                           Моля въведете валидна парола
                        </Form.Message>
                        <Form.Control asChild>
                           <input
                              placeholder={""}
                              autoComplete={"off"}
                              className={`text-lg w-96 mt-1 px-4 py-1 block rounded-md shadow-md`}
                              name={"password"}
                              type={"password"}
                           />
                        </Form.Control>
                     </Form.Field>
                  </div>

                  <div className={`mt-4`}>
                     <Link
                        className={`text-blue-700 text-md underline`}
                        href={"/forgot-password"}
                     >
                        Забравена парола?
                     </Link>
                  </div>
                  <Form.Submit className={`mx-auto mt-4`} asChild>
                     <button
                        className={`flex text-xl hover:opacity-80 transition-all duration-200 shadow-md mt-6 px-8 py-1.5 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-2`}
                     >
                        Влизане
                     </button>
                  </Form.Submit>
               </Form.Root>
            </div>
         </section>
      </div>
   );
};

export default SignUpPage;
