"use client";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useTheme from "react-ultimate-components/src/hooks/useTheme";
import { topMenuItems } from "react-ultimate-components/src/mocks";
import {
  BannerCarousel,
  CategoryCard,
  Footer,
  ImageLink,
  LandingHeader,
  ProductCard,
  SearchInput,
  TopMenu,
} from "../libs/react-ultimate-components/src";
import {
  categories,
  products,
  promotionalImages,
  storeData,
} from "../mock/store.tsx";
import {
  bannerSlides,
  dealDeadline,
  featuredProducts,
  originalPrices,
} from "./constants/home";

export default function Home() {
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const menuItems = categories.map((category) => ({
    label: category.name,
    name: category.name,
    href: `#${category.id}`,
    target: "_self",
  }));

  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      {/* Header */}
      <LandingHeader.Root
        className="relative bg-background shadow-sm z-90"
        size="lg"
        bordered={false}
        sticky
        style={{ zIndex: 9999 }}
      >
        <LandingHeader.Left className="flex items-center">
          <div className="flex items-center">
            <Image
              src={storeData.logoUrl}
              alt="Mostraloja Logo"
              width={40}
              height={40}
              className="w-24 sm:w-40 aspect-auto"
              quality={100}
            />
          </div>
        </LandingHeader.Left>

        <div className="flex flex-1 items-center justify-center mx-4">
          <SearchInput
            search={search}
            setSearch={(e) => setSearch(e)}
            placeholder="Pesquise um produto"
            variant="button-highlight"
          />
        </div>
        <LandingHeader.Right className="flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            {theme === "light" ? (
              <MoonIcon size={20} className="text-foreground" />
            ) : (
              <SunIcon size={20} className="text-foreground" />
            )}
          </button>
          <LandingHeader.MobileMenuToggle
            open={showMobileMenu}
            onToggle={handleToggleMobileMenu}
          />
        </LandingHeader.Right>
        <LandingHeader.MobileMenuPanel open={showMobileMenu}>
          <h2 className="text-lg sm:text-xl font-black uppercase text-foreground">
            Compre por categoria
          </h2>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="inline-block"
              onClick={handleToggleMobileMenu}
            >
              <a
                href={resolveHref(item.href)}
                target={item.target}
                rel={
                  item.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className="text-sm sm:text-base"
              >
                {item.label}
              </a>
            </li>
          ))}
        </LandingHeader.MobileMenuPanel>
      </LandingHeader.Root>

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
          <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground">
            Produtos em promoção
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => {
              const salePrice = (product.priceCents ?? 0) / 100;
              const originalPrice =
                originalPrices[product.id] ?? salePrice * 1.12;

              return (
                <ProductCard
                  key={product.id}
                  imageUrl={product.coverImageUrl ?? product.imageUrls[0]}
                  title={product.name}
                  price={originalPrice}
                  showDeal
                  dealPrice={salePrice}
                  dealEndsWithIn={dealDeadline}
                  installments={3}
                  installmentValue={salePrice / 3}
                  ctaLabel="Tenho interesse"
                  shareLabel="Compartilhar"
                  className="h-full"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section id="categorias" className="bg-background pb-14 sm:pb-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground">
            Compre por categoria
          </h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                icon={category.icon}
                href={category.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="promocoes" className="bg-background ">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground">
            Todos os produtos
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const salePrice = (product.priceCents ?? 0) / 100;
              const originalPrice =
                originalPrices[product.id] ?? salePrice * 1.12;

              return (
                <ProductCard
                  key={product.id}
                  imageUrl={product.coverImageUrl ?? product.imageUrls[0]}
                  title={product.name}
                  price={originalPrice}
                  dealPrice={salePrice}
                  installments={3}
                  installmentValue={salePrice / 3}
                  ctaLabel="Tenho interesse"
                  shareLabel="Compartilhar"
                  className="h-full"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotional Images */}
      <section id="promocoes" className="bg-background py-12 sm:py-14">
        <div className="mx-auto w-full max-w-7xl flex flex-col gap-6 px-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground">
            Confira nossas Promoções
          </h2>
          <div className="gap-6  grid grid-cols-2 sm:grid-cols-3 ">
            {promotionalImages.map((promo) => (
              <ImageLink
                key={promo.id}
                width={400}
                height={300}
                imgUrl={promo.imageUrl}
                href="#promocoes"
                className="aspect-video"
              />
            ))}
          </div>
        </div>
      </section>

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
