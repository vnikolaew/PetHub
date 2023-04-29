import { useSearchParams } from "next/navigation";
import { ALL_PRODUCTS, PetType, ProductType } from "./ProductCard";

export function useProducts() {
   const params = useSearchParams();
   const page = Number(params.get("page") ?? "1");

   const pathSegments = window.location.pathname
      .split("/")
      .filter((s) => s.length !== 0);

   const pt: ProductType =
      pathSegments[0] === "foods" ? ProductType.Food : ProductType.Accessory;
   const petType: PetType =
      pathSegments[1] === "cats" ? PetType.Cats : PetType.Dogs;

   const category = pathSegments[2];
   const filteredProducts = ALL_PRODUCTS.filter(
      (p) =>
         p.productType === pt &&
         p.petType === petType &&
         p.category === category
   );

   return { products: filteredProducts, page };
}
