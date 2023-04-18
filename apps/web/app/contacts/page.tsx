"use client";
import React from "react";
import { Breadcrumb } from "../../components";
import { NextPage } from "next";

const ContactsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Contacts", path: "contacts" },
            ]}
         />
         <section className={`w-full my-12 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Контакти</h1>
            <div
               className={`p-6 h-96 w-96 rounded-xl border-2 border-black`}
            ></div>
         </section>
      </div>
   );
};

export default ContactsPage;
