import React, { FC, Fragment, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
   Breadcrumb,
   BreadcrumbSegment,
   currencyFormatter,
   SelectInput,
   useRecommendedProducts,
} from "@pethub/components";
import {
   CheckIcon,
   ChevronLeftIcon,
   ChevronRightIcon,
   Cross1Icon,
   StarFilledIcon,
   StarIcon,
} from "@radix-ui/react-icons";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Progress from "@radix-ui/react-progress";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import { IProductRating, useShoppingCart } from "@pethub/state";
import ProductReviewCard from "./ProductReviewCard";
import * as R from "ramda";

export interface IProductDetails {
   name: string;
   id: string;
   image: string | StaticImageData;
   sizes: string[];
   price: number;
   averageRating: number;
   description: string;
   ratings: IProductRating[];
}

export interface ProductDetailsPageProps {
   product: IProductDetails;
   breadcrumbs: BreadcrumbSegment[];
}

export const ProductDetailsPage: FC<ProductDetailsPageProps> = ({
   product,
   breadcrumbs,
}) => {
   const addProduct = useShoppingCart((state) => state.addProduct);
   const [productQuantity, setProductQuantity] = useState(1);
   const [reviewsSortOrder, setReviewsSortOrder] = useState("");
   const recommendedProducts = useRecommendedProducts(product.id);

   console.log(product);

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={
               breadcrumbs ?? [
                  { label: "PetHub", path: "/" },
                  { label: "Храна", path: "foods" },
                  { label: "Кучета", path: "dogs" },
                  { label: "Суха храна", path: "dry-food" },
                  { label: product.name, path: product.name },
               ]
            }
         />
         <section className={`flex flex-col mt-8 items-start gap-12`}>
            <div className={`flex items-start gap-8`}>
               <Image
                  width={350}
                  height={350}
                  className={`rounded-lg shadow-md`}
                  src={product.image}
                  alt={"Product image"}
               />
               <div
                  className={`flex flex-col items-start gap-6 justify-between`}
               >
                  <h2 className={`text-2xl`}>{product.name}</h2>
                  <div className={`flex items-center gap-12`}>
                     <span className={`text-xl`}>Рeйтинг: </span>
                     <div className={`flex items-center gap-1`}>
                        {Array.from({
                           length: Math.round(product.averageRating),
                        }).map((_, i) => (
                           <StarFilledIcon
                              color={"orange"}
                              className={`fill-orange bg-orange`}
                              height={30}
                              width={30}
                              key={i}
                           />
                        ))}
                        {Array.from({
                           length: 5 - Math.round(product.averageRating),
                        }).map((_, i) => (
                           <StarIcon
                              color={"orange"}
                              className={`fill-orange bg-orange`}
                              height={30}
                              width={30}
                              key={i}
                           />
                        ))}
                     </div>
                  </div>
                  <div className={`flex items-center gap-12`}>
                     <span className={`text-xl`}>Размер: </span>
                     <SelectInput
                        placeholder={"Избери"}
                        options={product.sizes.map((size) => ({
                           label: size,
                           value: size,
                        }))}
                        onChange={(_) => {}}
                     />
                  </div>
                  <div className={`flex self-end text-2xl items-center gap-12`}>
                     <span className={`text-xl`}>Цена: </span>
                     <span>{currencyFormatter.format(product.price)}</span>
                  </div>
                  <div className={`flex mt-0 justify-end items-center gap-8`}>
                     <span className={`text-lg`}>Количество: </span>
                     <input
                        defaultValue={"1"}
                        value={productQuantity}
                        onChange={(e) =>
                           setProductQuantity(e.target.valueAsNumber)
                        }
                        min={0}
                        autoComplete={"off"}
                        className={`text-lg w-1/5 px-4 py-1 block rounded-md shadow-md`}
                        type={"number"}
                     />
                     <AlertDialog.Root>
                        <AlertDialog.Trigger asChild>
                           <button
                              type={"submit"}
                              className={`flex text-xl hover:opacity-80 transition-all duration-200 shadow-lg px-12 py-1.5 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                           >
                              Добави в кошница
                           </button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Portal>
                           <AlertDialog.Overlay
                              className={`bg-black animate-overlayShow bg-opacity-40 fixed inset-0`}
                           />
                           <AlertDialog.Content
                              className={`bg-white flex items-center flex-col justify-center shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 w-[90vw] max-w-[500px] focus:outline-none max-h-[85vh] p-4 animate-contentShow -translate-y-1/2 rounded-md`}
                           >
                              <div
                                 className={`w-full relative items-center justify-center flex gap-8`}
                              >
                                 <AlertDialog.Title
                                    className={`m-0 font-semibold text-black text-2xl`}
                                 >
                                    Известие
                                 </AlertDialog.Title>
                                 <AlertDialog.Cancel
                                    className={`absolute flex items-center justify-center p-1 hover:bg-red-50 rounded-full right-2 top-1`}
                                 >
                                    <Cross1Icon
                                       height={16}
                                       width={16}
                                       color={"red"}
                                    />
                                 </AlertDialog.Cancel>
                              </div>
                              <AlertDialog.Description
                                 className={`my-5 flex flex-col items-center text-lg`}
                              >
                                 <div className={`flex items-center gap-1`}>
                                    Артикулът е добавен към кошницата!{" "}
                                    <CheckIcon
                                       height={20}
                                       width={20}
                                       color={"green"}
                                    />
                                 </div>
                                 <Link
                                    className={`text-lg text-blue-700 underline`}
                                    href={`/shopping-cart`}
                                 >
                                    Към кошница
                                 </Link>
                              </AlertDialog.Description>
                              <div
                                 className={`flex items-center w-full mt-4 gap-4`}
                              >
                                 <AlertDialog.Cancel asChild>
                                    <button
                                       className={`text-white hover:opacity-90 transition-all duration-200 shadow-md bg-raw-sienna py-1 rounded-lg text-lg w-1/2`}
                                    >
                                       Премахни от кошница
                                    </button>
                                 </AlertDialog.Cancel>
                                 <AlertDialog.Action
                                    onClick={(_) =>
                                       addProduct(product, productQuantity)
                                    }
                                    asChild
                                 >
                                    <button
                                       className={`text-black hover:opacity-90 transition-all duration-200 shadow-md bg-albescent-white py-1 rounded-lg text-lg w-1/2`}
                                    >
                                       ОК
                                    </button>
                                 </AlertDialog.Action>
                              </div>
                           </AlertDialog.Content>
                        </AlertDialog.Portal>
                     </AlertDialog.Root>
                  </div>
               </div>
               <div className={`flex flex-col items-start gap-4`}>
                  <div className={`flex items-center gap-4`}>
                     <h2 className={`text-2xl`}>Описание</h2>
                     <Separator.Root
                        className={`w-[2px] bg-black h-[40px]`}
                        orientation={"vertical"}
                     />
                     <Link
                        target={"_self"}
                        href={`${window.location.pathname}#reviews`}
                        scroll
                        className={`text-2xl text-blue-700 underline`}
                     >
                        Отзиви ({product.ratings.length})
                     </Link>
                  </div>
                  <div>
                     <p className={`text-md max-w-[600px]`}>
                        {product.description}
                     </p>
                  </div>
               </div>
            </div>
            <div className={`flex flex-col w-full items-start gap-2`}>
               <h2 className={`text-2xl font-semibold text-raw-sienna`}>
                  Може да харесате
               </h2>
               <Separator.Root
                  className={`w-full bg-gray-100 h-[1px]`}
                  orientation={"horizontal"}
               />
               <div className={`flex mt-2 self-center items-center gap-8`}>
                  <ChevronLeftIcon height={20} width={20} />
                  {recommendedProducts.map((p, i) => (
                     <Fragment key={i}>
                        <Link
                           href={`/${p.productType}/${p.petType}/${p.category}/${p.product.id}`}
                        >
                           <div
                              className={`flex gap-4 flex-col items-center justify-center`}
                              key={i}
                           >
                              <Image
                                 height={80}
                                 width={80}
                                 src={p.product.image}
                                 alt={p.product.name}
                              />
                              <h2 className={`text-md`}>
                                 {p.product.name.slice(0, 20)}...
                              </h2>
                           </div>
                        </Link>
                     </Fragment>
                  ))}
                  <ChevronRightIcon height={20} width={20} />
               </div>
            </div>
            <section
               id={"reviews"}
               className={`flex mt-4 flex-col w-full items-start gap-2`}
            >
               <h2 className={`text-3xl font-semibold text-raw-sienna`}>
                  Отзиви
               </h2>
               <Separator.Root
                  className={`w-full bg-gray-100 h-[1px]`}
                  orientation={"horizontal"}
               />
               <div
                  className={`flex items-center w-full mt-2 justify-around gap-4`}
               >
                  <div className={`flex flex-col gap-3`}>
                     {[1, 2, 3, 4, 5].map((rating, i) => (
                        <div
                           className={`flex items-center gap-8 justify-between`}
                           key={i}
                        >
                           <span>{rating} звезди</span>
                           <Progress.Root
                              max={product.ratings.length}
                              value={
                                 product.ratings.filter(
                                    (r) => Math.round(r.rating) === rating
                                 ).length
                              }
                              className={`h-6 w-64 relative rounded-full overflow-hidden bg-gray-100 shadow-sm bg-opacity-40`}
                           >
                              <Progress.Indicator
                                 style={{
                                    transform: `translateX(-${
                                       100 -
                                       (product.ratings.filter(
                                          (r) => Math.round(r.rating) === rating
                                       ).length /
                                          product.ratings.length) *
                                          100
                                    }%)`,
                                 }}
                                 className={`bg-raw-sienna h-full w-full`}
                              />
                           </Progress.Root>
                        </div>
                     ))}
                  </div>
                  <section className={`flex-col flex items-center gap-4`}>
                     <h2 className={`text-2xl text-black`}>Цялостен рейтинг</h2>
                     <div className={`flex items-end justify-center gap-4`}>
                        <span className={`text-7xl`}>
                           {product.averageRating.toFixed(1)}
                        </span>
                        <div className={`flex flex-col items-center gap-0`}>
                           <div className={`flex items-center gap-0`}>
                              {Array.from({
                                 length: Math.round(product.averageRating),
                              }).map((_, i) => (
                                 <StarFilledIcon
                                    color={"orange"}
                                    height={20}
                                    width={20}
                                    key={i}
                                 />
                              ))}
                           </div>
                           <span className={`text-2xl`}>
                              {product.ratings.length} отзива
                           </span>
                        </div>
                     </div>
                     <span className={`text-xl text-center max-w-[300px]`}>
                        15 от 25 души препоръчват този продукт
                     </span>
                  </section>

                  <section className={`flex-col flex items-center gap-4`}>
                     <h2 className={`text-2xl text-black`}>
                        Оцени този продукт
                     </h2>
                     <div className={`flex items-center gap-1`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                           <StarIcon height={40} width={40} key={i} />
                        ))}
                     </div>
                  </section>
               </div>
               <Separator.Root
                  className={`w-full mt-8 bg-gray-100 h-[1px]`}
                  orientation={"horizontal"}
               />
               <div
                  className={`w-full mt-8 flex justify-around items-start gap-8`}
               >
                  <div className={`w-2/5 flex flex-col items-center gap-8`}>
                     {R.sort((ra, rb) => {
                        if (reviewsSortOrder === "1")
                           return (
                              rb.timestamp.getTime() - ra.timestamp.getTime()
                           );
                        if (reviewsSortOrder === "2")
                           return rb.rating - ra.rating;
                        if (reviewsSortOrder === "3")
                           return ra.rating - rb.rating;
                        return rb.rating - ra.rating;
                     }, product.ratings).map((r, i) => (
                        <ProductReviewCard key={i} review={r} />
                     ))}
                  </div>
                  <div className={`w-[250px]`}>
                     <SelectInput
                        placeholder={"Сортирай по"}
                        defaultValue={"0"}
                        value={reviewsSortOrder}
                        options={[
                           {
                              value: "0",
                              label: "Сортирай по",
                           },
                           {
                              value: "1",
                              label: "Най-скорошни",
                           },
                           {
                              value: "2",
                              label: "Най-позитивни",
                           },
                           {
                              value: "3",
                              label: "Най-негативни",
                           },
                        ]}
                        onChange={setReviewsSortOrder}
                     />
                  </div>
               </div>
            </section>
         </section>
      </div>
   );
};
