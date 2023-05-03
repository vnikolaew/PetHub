import React, { Fragment } from "react";

export interface ListProps<T> {
   items: T[];
   render: (item: T, index: number) => React.ReactNode;
   separator?: React.ReactNode;
}

export function List<T>({ render, separator, items }: ListProps<T>) {
   return (
      <Fragment>
         {items.map((item, i) => (
            <Fragment>
               {render(item, i)}
               {i !== items.length - 1 && separator}
            </Fragment>
         ))}
      </Fragment>
   );
}
