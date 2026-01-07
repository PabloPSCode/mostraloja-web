"use client";
import {
  GenericProductDetails,
  TopMenu,
} from "../../../libs/react-ultimate-components/src/index.tsx";
import { products } from "../../../mock/store.tsx";
import { topMenuItems } from "../../constants/home.tsx";

export default function Home() {
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

      {/* Products */}
      <section id="produto" className="bg-background py-12 sm:py-24">
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
