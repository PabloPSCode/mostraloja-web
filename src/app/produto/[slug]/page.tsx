"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "react-ultimate-components/src/components/navigation/BreadCrumb/index.tsx";
import {
  GenericProductDetails,
  TopMenu,
} from "../../../libs/react-ultimate-components/src/index.tsx";
import { products } from "../../../mock/store.tsx";
import { topMenuItems } from "../../constants/home.tsx";

export default function Home() {
  const pathname = usePathname();
  const currentPath = pathname.replace("/produto/", "");
  const selectedProduct =
    products.find((product) => product.slug === currentPath) ?? products[0];

  return (
    <main className="w-full bg-background text-foreground">
      {/* Top categories */}
      <div className="w-screen bg-foreground px-2">
        <TopMenu
          menuItems={topMenuItems}
          className="w-full bg-foreground text-background"
          itemClassName="text-sm font-semibold text-background"
          subItemClassName="text-foreground"
        />
      </div>

      <div className=" w-full max-w-7xl flex items-center gap-2 mx-auto px-4 pt-4 text-sm text-foreground/70">
        <span className="min-w-[120px] line-clamp-1 font-semibold">
          Você está em:
        </span>
        <Breadcrumb currentPath={currentPath} />
      </div>

      {/* Products */}
      <section
        id="produto"
        className="bg-background pb-12 sm:pb-24 pt-6 sm:pt-12"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4">
          <GenericProductDetails
            product={{
              ...selectedProduct,
              price: selectedProduct.priceCents / 100,
              photos: selectedProduct.imageUrls.map((url) => ({
                src: url,
                alt: selectedProduct.name,
              })),
              description: selectedProduct.description || "",
              shareUrl: selectedProduct.shareUrl,
            }}
          />
        </div>
      </section>
    </main>
  );
}
