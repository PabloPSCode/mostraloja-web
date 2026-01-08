"use client";
import Breadcrumb from "react-ultimate-components/src/components/navigation/BreadCrumb/index.tsx";
import {
  GenericProductDetails,
  TopMenu,
} from "../../../libs/react-ultimate-components/src/index.tsx";
import { products } from "../../../mock/store.tsx";
import { topMenuItems } from "../../constants/home.tsx";
import {usePathname} from 'next/navigation'

export default function Home() {

  const pathname = usePathname();
  const currentPath = pathname.replace('/product/', '');

  return (
    <main className="w-full bg-background text-foreground">
      {/* Top categories */}
      <div className="w-full p-2 bg-background">
        <TopMenu
          menuItems={topMenuItems}
          className="w-full bg-background"
          itemClassName="text-sm font-semibold text-foreground"
          subItemClassName="text-foreground/80"
        />
      </div>

      <div className=" w-full max-w-7xl flex items-center gap-2 mx-auto px-4 pt-4 text-sm text-foreground/70">
        <span className="min-w-[120px] line-clamp-1 font-semibold">Você está em:</span>
        <Breadcrumb currentPath={currentPath} />
      </div>

      {/* Products */}
      <section id="produto" className="bg-background pb-12 sm:pb-24 pt-6 sm:pt-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4">
          <GenericProductDetails
            product={{
              ...products[0],
              price: products[0].priceCents / 100,
              photos: products[0].imageUrls.map((url) => ({
                src: url,
                alt: products[0].name,
              })),
              description: products[0].description || "",
              shareUrl: products[0].shareUrl,
            }}
          />
        </div>
      </section>
    </main>
  );
}
