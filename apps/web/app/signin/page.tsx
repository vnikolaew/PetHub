"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import * as Form from "@radix-ui/react-form";
import Link from "next/link";
import {
   VALID_EMAIL_REGEX,
   VALID_PASSWORD_REGEX,
} from "../../utils/string-constants";

const SignInPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Влизане", path: "signin" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>
               Влизане в <span className={`font-semibold`}>PetHub</span>{" "}
            </h1>
            <div className={`flex mt-6 gap-36 items-center justify-around`}>
               <Form.Root>
                  <Form.Field name={"email"}>
                     <Form.Label className={`text-xl`}>Имейл адрес</Form.Label>
                     <Form.Message
                        match={(value, _) => VALID_EMAIL_REGEX.test(value)}
                     >
                        Моля въведете валиден и-мейл
                     </Form.Message>
                     <Form.Control asChild>
                        <input
                           placeholder={"user@test.com"}
                           autoComplete={"off"}
                           className={`text-lg w-96 mt-1 px-4 py-1 block rounded-md shadow-md`}
                           name={"email"}
                           type={"text"}
                        />
                     </Form.Control>
                  </Form.Field>

                  <Form.Field className={`mt-12`} name={"password"}>
                     <Form.Label className={`text-xl`}>Парола</Form.Label>
                     <Form.Message
                        match={(value, _) => VALID_PASSWORD_REGEX.test(value)}
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

export default SignInPage;
