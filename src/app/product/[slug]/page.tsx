"use client";

import { BannerCarousel, Footer, GenericProductDetails, TopMenu } from "../../../libs/react-ultimate-components/src/index.tsx";
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
      {/* Footer */}
      <div className="bg-background text-foreground">
        <Footer.Root bordered>
          <Footer.Top columns={4}>
            <Footer.Column
              items={[
                {
                  href: "#",
                  label: "Política de Privacidade",
                },
                {
                  href: "#",
                  label: "Termos de Uso",
                },
                {
                  href: "#",
                  label: "Política de Cookies",
                },
              ]}
              title="Legal"
            />
            <Footer.Column
              items={[
                {
                  label: "Seg–Sex: 08h – 20h",
                },
                {
                  label: "Sáb: 09h – 15h (horário de Brasília)",
                },
                {
                  label: "Fale conosco",
                },
              ]}
              title="Atendimento"
            />
            <Footer.Column
              items={[
                {
                  label: "🫴🏼 Retire na loja",
                },
                {
                  label: "🛵 Entrega via motoboy",
                },
                {
                  label: "🚗 Entrega via veículo próprio",
                },
              ]}
              title="Forma de entrega"
            />
            <Footer.Column
              items={[
                {
                  imageUrl: "/lets_encrypt.png",
                  label: "",
                },
              ]}
              title="Site seguro"
            />
          </Footer.Top>
          <Footer.SocialRow
            iconsClassName="text-foreground/80 hover:text-foreground"
            items={[
              {
                href: "#",
                iconName: "instagram",
              },
              {
                href: "#",
                iconName: "facebook",
              },
            ]}
          />
          <Footer.Bottom>
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <p>© 2026 Minha Empresa — CNPJ: 00.000.000/0001-00</p>
                <p className="text-foreground/70">
                  Av. Wilson Alvarenga, 9999, João Monlevade - MG
                </p>
              </div>
              <p className="text-foreground/70 text-xs">
                Desenvolvido por{" "}
                <a
                  href="https://pablosilvadev.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xs"
                >
                  Pablo Silva Dev
                </a>
              </p>
            </div>
          </Footer.Bottom>
        </Footer.Root>
      </div>
    </main>
  );
}
