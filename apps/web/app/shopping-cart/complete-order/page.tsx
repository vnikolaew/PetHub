"use client";
import React, { FC, Fragment, useState } from "react";
import { NextPage } from "next";
import { Breadcrumb, currencyFormatter } from "@pethub/components";
import { useCurrentUser, useShoppingCart } from "@pethub/state";
import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Form from "@radix-ui/react-form";
import { VALID_NAME_REGEX } from "@pethub/web/utils/string-constants";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const PAYMENT_OPTIONS = [
   {
      value: "a",
      label: "Наложен платеж",
   },
   {
      value: "b",
      label: "Банков превод",
   },
   {
      value: "c",
      label: "С карта",
   },
   {
      value: "d",
      label: "PayPal",
   },
];

export interface IRecipientInfo {
   firstName: string;
   lastName: string;
   phoneNumber: string;
   livingAddress: string;
   officeAddress: string;
   orderComment: string;
}

const CompleteOrderPage: NextPage = () => {
   const { products, total } = useShoppingCart(({ products, total }) => ({
      products,
      total,
   }));
   const user = useCurrentUser((state) => state.user);
   const [orderCompleted, setOrderCompleted] = useState(true);
   const [recipientInfo, setRecipientInfo] = useState<IRecipientInfo>({
      firstName: user?.firstName!,
      lastName: user?.lastName!,
      livingAddress: "",
      orderComment: "",
      officeAddress: "",
      phoneNumber: "",
   });

   const handleFormChange = ({
      target: { name, value },
   }:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>) =>
      setRecipientInfo((r) => ({ ...r, [name]: value }));

   function handleFormSubmit(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      setOrderCompleted(true);
   }

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Количка", path: "shopping-cart" },
               { label: "Завършване на поръчката", path: "complete-order" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            {orderCompleted ? (
               <div className={`flex flex-col mt-12 items-center gap-4`}>
                  <h1
                     className={`text-3xl flex items-center gap-2 text-raw-sienna font-semibold`}
                  >
                     <span>Успешно завършихте поръчката! </span>
                     <span>
                        <CheckIcon color={"green"} height={30} width={30} />
                     </span>
                  </h1>
                  <Link
                     className={`text-blue-700 text-2xl underline`}
                     href={`/account?tab=my-purchases`}
                  >
                     Към моите поръчки
                  </Link>
               </div>
            ) : (
               <Fragment>
                  <div className={`flex items-start gap-12`}>
                     <div className={`flex flex-col items-start gap-8`}>
                        <h1
                           className={`text-2xl text-raw-sienna font-semibold`}
                        >
                           Вашата поръчка
                        </h1>
                        <div
                           className={`grid grid-cols-orderCompleteSummary gap-6`}
                        >
                           <h1 className={`text-xl`}>Продукти</h1>
                           <h1 className={`text-xl text-center`}>Цена</h1>
                           {products.map((product, i) => (
                              <Fragment key={i}>
                                 <div className={`flex items-center gap-6`}>
                                    <Image
                                       className={`rounded-md`}
                                       height={80}
                                       width={80}
                                       src={product.product.image}
                                       alt={"Product image"}
                                    />
                                    <div
                                       className={`flex flex-col items-start gap-0`}
                                    >
                                       <h2 className={`text-lg font-semibold`}>
                                          {product.product.name}
                                       </h2>
                                       <p
                                          className={`max-w-[250px] text-sm leading-4`}
                                       >
                                          {product.product.description}
                                       </p>
                                    </div>
                                 </div>
                                 <div
                                    className={`font-semibold flex items-center justify-center text-xl`}
                                 >
                                    {currencyFormatter.format(
                                       product.product.price * product.quantity
                                    )}
                                 </div>
                              </Fragment>
                           ))}
                        </div>
                        <div
                           className={`flex w-full flex-col items-start gap-4`}
                        >
                           <div
                              className={`flex mt-6 items-center w-full justify-between`}
                           >
                              <span className={`text-xl text-center`}>
                                 Доставка
                              </span>
                              <span className={`text-xl`}>20.00лв.</span>
                           </div>
                           <div
                              className={`flex items-center w-full justify-between`}
                           >
                              <span className={`text-xl text-center`}>
                                 Общо
                              </span>
                              <span className={`text-xl font-semibold`}>
                                 {currencyFormatter.format(total)}
                              </span>
                           </div>
                        </div>
                     </div>
                     <Separator.Root
                        orientation={"vertical"}
                        className={`h-[300px] bg-black w-[1px]`}
                     />
                     <div className={`flex flex-col items-start gap-8`}>
                        <h1
                           className={`text-2xl text-raw-sienna font-semibold`}
                        >
                           Начин на плащане
                        </h1>
                        <RadioGroup.Root
                           className={`flex mt-4 items-center gap-12`}
                        >
                           <div className={`flex flex-col items-start gap-2`}>
                              {PAYMENT_OPTIONS.map((option, i) => (
                                 <div
                                    key={i}
                                    className={`flex items-center gap-1`}
                                 >
                                    <RadioGroup.Item
                                       value={option.value}
                                       id={option.value}
                                       className={`bg-white hover:bg-slate-50 w-4 h-4 rounded-full shadow-md`}
                                    >
                                       <RadioGroup.Indicator
                                          className={`flex w-full h-full relative after:content-[''] after:block after:w-[7px] after:h-[7px] after:rounded-full after:bg-violet-600 items-center justify-center`}
                                       />
                                    </RadioGroup.Item>
                                    <label
                                       className={`ml-1 text-xl`}
                                       htmlFor={option.value}
                                    >
                                       {option.label}
                                    </label>
                                 </div>
                              ))}
                           </div>
                        </RadioGroup.Root>
                     </div>
                     <Separator.Root
                        orientation={"vertical"}
                        className={`h-[300px] bg-black w-[1px]`}
                     />
                     <div className={`flex flex-1 flex-col items-start gap-8`}>
                        <h1
                           className={`text-2xl text-raw-sienna font-semibold`}
                        >
                           Данни на получателя
                        </h1>
                        <Form.Root
                           onSubmit={(_) => {}}
                           className={`flex items-start gap-16`}
                        >
                           <div
                              className={`flex w-full flex-col gap-6 items-start`}
                           >
                              <InputField
                                 value={recipientInfo.firstName}
                                 onChange={handleFormChange}
                                 label={"Име"}
                                 name={"firstName"}
                                 placeholder={"John"}
                                 validate={(value) =>
                                    !VALID_NAME_REGEX.test(value)
                                 }
                              />
                              <InputField
                                 value={recipientInfo.lastName}
                                 onChange={handleFormChange}
                                 label={"Фамилия"}
                                 name={"lastName"}
                                 placeholder={"John"}
                                 validate={(value) =>
                                    !VALID_NAME_REGEX.test(value)
                                 }
                              />
                              <InputField
                                 value={recipientInfo.phoneNumber}
                                 onChange={handleFormChange}
                                 label={"Телефон за връзка"}
                                 type={"tel"}
                                 name={"phoneNumber"}
                                 placeholder={"+359582343232"}
                                 validate={(value) =>
                                    !VALID_NAME_REGEX.test(value)
                                 }
                              />
                              <InputField
                                 value={recipientInfo.livingAddress}
                                 onChange={handleFormChange}
                                 label={"Населено място"}
                                 name={"livingAddress"}
                                 placeholder={"Varna, BG"}
                                 validate={(value) =>
                                    !VALID_NAME_REGEX.test(value)
                                 }
                              />
                              <InputField
                                 value={recipientInfo.orderComment}
                                 onChange={handleFormChange}
                                 label={"Коментар към поръчката"}
                                 textarea
                                 name={"orderComment"}
                                 placeholder={"Коментирай"}
                                 validate={(value) =>
                                    !VALID_NAME_REGEX.test(value)
                                 }
                              />
                           </div>
                        </Form.Root>
                     </div>
                  </div>
                  <div>
                     <button
                        type={"submit"}
                        onClick={handleFormSubmit}
                        className={`flex text-2xl hover:opacity-80 transition-all duration-200 shadow-md mt-8 px-12 py-1.5 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                     >
                        Завърши поръчката
                     </button>
                  </div>
               </Fragment>
            )}
         </section>
      </div>
   );
};

type CommonInputProps = {
   value: string;
   label: string;
   name: string;
   errorMessage?: string;
   validate: (value: string) => boolean;
};

export type InputFieldProps = CommonInputProps &
   (
      | ({ textarea?: true } & React.DetailedHTMLProps<
           React.TextareaHTMLAttributes<HTMLTextAreaElement>,
           HTMLTextAreaElement
        >)
      | ({ textarea?: false } & React.DetailedHTMLProps<
           React.InputHTMLAttributes<HTMLInputElement>,
           HTMLInputElement
        >)
   );

const InputField: FC<InputFieldProps> = ({
   name,
   value,
   validate,
   textarea = false,
   label,
   errorMessage,
   ...rest
}) => (
   <Form.Field
      className={`grid grid-cols-recipient w-full items-end place-center gap-2`}
      name={name}
   >
      <Form.Label className={`text-lg`}>{label}</Form.Label>
      <Form.Control name={name} asChild>
         {textarea ? (
            <textarea
               autoComplete={"off"}
               className={`text-lg mt-1 px-4 py-1 block rounded-md shadow-md`}
               {...rest}
            />
         ) : (
            <input
               autoComplete={"off"}
               className={`text-lg mt-1 px-4 py-1 block rounded-md shadow-md`}
               type={"text"}
               {...rest}
            />
         )}
      </Form.Control>
      <Form.Message
         className={`text-red-600 text-end col-span-3 self-end`}
         match={(value, _) => validate(value)}
      >
         {errorMessage}
         Моля въведете валидно име
      </Form.Message>
   </Form.Field>
);

export default CompleteOrderPage;
