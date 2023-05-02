import { useSearchParams } from "next/navigation";
import { PetType, ProductType, useProductsContext } from "./products";
import { ProductCardProps } from "./ProductCard";

export function useProducts() {
   const params = useSearchParams();
   const page = Number(params.get("page") ?? "1");
   const products = useProductsContext();

   const pathSegments = window.location.pathname
      .split("/")
      .filter((s) => s.length !== 0);

   const pt: ProductType =
      pathSegments[0] === "foods" ? ProductType.Food : ProductType.Accessory;
   const petType: PetType = pathSegments[1] as PetType;

   const category = pathSegments[2];
   const filteredProducts = products.filter(
      (p) =>
         p.productType === pt &&
         p.petType === petType &&
         p.category === category
   );
   console.log("filtered: ", filteredProducts);

   return { products: filteredProducts, page };
}

export function useProduct(idOrName: string): ProductCardProps | null {
   const products = useProductsContext();
   return (
      products.find(
         (p) => p.product.id === idOrName || p.product.name === idOrName
      ) ?? null
   );
}

export function useRecommendedProducts(
   productIdOrName: string
): ProductCardProps[] {
   const products = useProductsContext();
   const product = products.find(
      (p) =>
         p.product.id === productIdOrName || p.product.name === productIdOrName
   );

   return !product
      ? []
      : products
           .filter(
              (p) =>
                 p.petType === product.petType &&
                 p.category === product.category
           )
           .slice(0, 6) ?? null;
}
