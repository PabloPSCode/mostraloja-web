"use client";
import {
  BannerCarousel,
  GenericProductDetails,
  TopMenu,
} from "../../../libs/react-ultimate-components/src/index.tsx";
import { products } from "../../../mock/store.tsx";
import { bannerSlides, topMenuItems } from "../../constants/home.tsx";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      {/* Top categories */}
      <div className="w-full p-2 bg-background">
        <TopMenu
          menuItems={topMenuItems}
          className="w-full bg-background"
          itemClassName="text-sm font-semibold text-foreground"
          subItemClassName="text-foreground/80"
        />
      </div>
      {/* Banner */}
      <section className="bg-background max-w-7xl mx-auto">
        <div className="block p-4">
          <BannerCarousel
            items={bannerSlides}
            showDots={false}
            loop
            className="rounded-xl overflow-hidden w-full"
          />
        </div>
      </section>
      {/* Products */}
      <section id="promocoes" className="bg-background py-12 sm:py-14">
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
            }}
          />
        </div>
      </section>
    </main>
  );
}
