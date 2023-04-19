import React, { FC } from "react";

export interface IUserOrder {
   orderNumber: string;
   status: string;
   address: string;
   orderTotal: number;
   timestamp: Date;
}

export interface UserOrderInfoCardProps {
   order: IUserOrder;
}

export const currencyFormatter = new Intl.NumberFormat("bg", {
   currency: "BGN",
   style: "currency",
   maximumFractionDigits: 2,
});

export const dateTimeFormatter = new Intl.DateTimeFormat("bg", {
   dateStyle: "long",
});

const UserOrderInfoCard: FC<UserOrderInfoCardProps> = ({ order }) => {
   return (
      <div
         className={`flex gap-12 rounded-xl shadow-md border border-gray-100 items-start py-3 px-12`}
      >
         <div className={`flex-col flex items-start gap-6`}>
            <div className={`flex items-center gap-2`}>
               <h2 className={`text-2xl`}>Поръчка No</h2>
               <span className={`text-xl`}>{order.orderNumber}</span>
            </div>

            <div className={`flex items-start gap-12`}>
               <div className={`flex flex-col items-start gap-0`}>
                  <h2 className={`text-xl text-gray-500`}>Статус</h2>
                  <span className={`text-lg`}>{order.status}</span>
               </div>

               <div className={`flex flex-col items-start gap-0`}>
                  <h2 className={`text-xl text-gray-500`}>Адрес</h2>
                  <span className={`text-lg`}>{order.address}</span>
               </div>

               <div className={`flex flex-col items-start gap-0`}>
                  <h2 className={`text-xl text-gray-500`}>Общо</h2>
                  <span className={`text-lg`}>
                     {currencyFormatter.format(order.orderTotal)}
                  </span>
               </div>
            </div>
         </div>
         <div className={`flex flex-col items-start gap-0`}>
            <h2 className={`text-2xl`}>Регистрирана на</h2>
            <span className={`text-xl text-gray-500`}>
               {dateTimeFormatter.format(order.timestamp)}
            </span>
            <button
               className={`flex hover:opacity-80 mt-4 transition-all duration-200 shadow-md mb-6 px-6 py-1 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-2 self-end`}
            >
               Детайли
            </button>
         </div>
      </div>
   );
};

export default UserOrderInfoCard;
