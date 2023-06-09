import React, { FC, Fragment, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
   Breadcrumb,
   BreadcrumbSegment,
   currencyFormatter,
   SelectInput,
   useProductsContext,
   useRecommendedProducts,
} from "@pethub/components";
import {
   CheckIcon,
   Cross1Icon,
   StarFilledIcon,
   StarIcon,
} from "@radix-ui/react-icons";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Progress from "@radix-ui/react-progress";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import { IProductRating, useCurrentUser, useShoppingCart } from "@pethub/state";
import ProductReviewCard from "./ProductReviewCard";
import * as R from "ramda";
import RateProductSection from "./RateProductSection";
import RecommendedProductsSection from "./RecommendedProductsSection";

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
   const [reviewsSortOrder, setReviewsSortOrder] = useState("2");
   const recommendedProducts = useRecommendedProducts(product.id);
   const { setProducts } = useProductsContext();
   const user = useCurrentUser();

   console.log(product);

   const rateProduct = (rating: number, comment: string) =>
      setProducts((p) =>
         p.map((pr, i) =>
            pr.product.id === product.id
               ? {
                    ...pr,
                    product: {
                       ...pr.product,
                       ratings: [
                          ...pr.product.ratings,
                          {
                             rating,
                             from: user.user!.firstName,
                             image: "",
                             reviewText: comment,
                             timestamp: new Date(),
                             userImage: user.user!.profilePicture!,
                          },
                       ],
                    },
                 }
               : pr
         )
      );

   // @ts-ignore
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={
               breadcrumbs.map((b, i) =>
                  i === breadcrumbs.length - 1
                     ? {
                          ...b,
                          label: `${product.name.slice(0, 30)}...`,
                       }
                     : b
               ) ?? [
                  { label: "PetHub", path: "/" },
                  { label: "Храна", path: "foods" },
                  { label: "Кучета", path: "dogs" },
                  { label: "Суха храна", path: "dry-food" },
                  {
                     label: `${product.name.slice(0, 30)}...`,
                     path: product.name,
                  },
               ]
            }
         />
         <section className={`flex flex-col mt-12 items-start gap-12`}>
            <div className={`flex items-start gap-8`}>
               <div className={`relative`}>
                  {(product as any).discount !== undefined && (
                     <div
                        className={`absolute flex items-center justify-center p-2 -top-2 -right-2 bg-red-500 text-white text-sm w-10 h-10 rounded-full`}
                     >
                        -{Math.round((product as any).discount * 100)}%
                     </div>
                  )}
                  <Image
                     width={350}
                     height={350}
                     className={`rounded-lg shadow-md`}
                     src={product.image}
                     alt={"Product image"}
                  />
               </div>
               <div
                  className={`flex bg-white p-8 rounded-md shadow-md flex-col items-start gap-6 justify-between`}
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
                  <div className={`flex items-center w-1/4 gap-12`}>
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
                  <div
                     className={`flex text-2xl self-center items-center gap-12`}
                  >
                     <span className={`text-xl`}>Цена: </span>
                     <span>
                        {currencyFormatter.format(
                           product.price *
                              (1 - ((product as any).discount ?? 0))
                        )}{" "}
                        {(product as any).discount !== undefined && (
                           <span
                              className={`line-through font-thin text-[1.2rem] text-gray-400`}
                           >
                              {currencyFormatter.format(product.price)}
                           </span>
                        )}
                     </span>
                  </div>
                  <div
                     className={`flex w-full self-center mt-2 justify-center items-center gap-8`}
                  >
                     <span className={`text-lg`}>Количество: </span>
                     <input
                        defaultValue={"1"}
                        value={productQuantity}
                        onChange={(e) =>
                           setProductQuantity(e.target.valueAsNumber)
                        }
                        min={0}
                        autoComplete={"off"}
                        className={`text-lg w-1/6 px-4 py-1 block rounded-md shadow-md`}
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
                  <div className={`flex flex-col mt-4 items-start gap-2`}>
                     <div className={`flex items-center gap-2`}>
                        <h2 className={`text-2xl`}>Описание</h2>
                     </div>
                     <div>
                        <p className={`text-lg leading-5 w-full`}>
                           {product.description
                              .replaceAll("\n", "")
                              .replaceAll("&nbsp;", "").length > 5 ? (
                              <span className={`text-black`}>
                                 {product.description}
                              </span>
                           ) : (
                              <span className={`text-gray-400`}>Липсва.</span>
                           )}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className={`flex flex-col mt-8 w-full items-start gap-2`}>
               <h2 className={`text-3xl font-semibold text-raw-sienna`}>
                  Може да харесате
               </h2>
               <Separator.Root
                  className={`w-full bg-black h-[1px]`}
                  orientation={"horizontal"}
               />
               <RecommendedProductsSection products={recommendedProducts} />
            </div>
            <section
               id={"reviews"}
               className={`flex flex-col w-full items-start gap-2`}
            >
               <h2 className={`text-3xl font-semibold text-raw-sienna`}>
                  Отзиви
               </h2>
               <Separator.Root
                  className={`w-full bg-black h-[1px]`}
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
                           <span>
                              {rating} звезди (
                              {
                                 product.ratings.filter(
                                    (r) => Math.round(r.rating) === rating
                                 ).length
                              }
                              )
                           </span>
                           <Progress.Root
                              max={product.ratings.length}
                              value={
                                 product.ratings.filter(
                                    (r) => Math.round(r.rating) === rating
                                 ).length
                              }
                              className={`h-6 w-64 relative rounded-full overflow-hidden bg-white shadow-md bg-opacity-60`}
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
                              {Array.from({
                                 length: 5 - Math.round(product.averageRating),
                              }).map((_, i) => (
                                 <StarIcon
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
                     <RateProductSection onRate={rateProduct} />
                  </section>
               </div>
               <Separator.Root
                  className={`w-full mt-8 bg-black h-[1px]`}
                  orientation={"horizontal"}
               />
               <div
                  className={`w-full mt-12 flex justify-around items-start gap-8`}
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
                        defaultValue={"2"}
                        value={reviewsSortOrder}
                        options={[
                           {
                              value: "0",
                              disabled: true,
                              label: "Сортитай по",
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
