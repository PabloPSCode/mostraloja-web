"use client";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import type { Metadata } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import {
  ItemsSearchList,
  LandingHeader,
  SearchInput,
} from "../../libs/react-ultimate-components/src";
import useTheme from "../../libs/react-ultimate-components/src/hooks/useTheme";
import { categories, products, storeData } from "../../mock/store";

export const metadata: Metadata = {
  title: "MostraLoja",
  description: "Next.js 15 starter with TypeScript and TailwindCSS",
};

export default function Header() {
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const MIN_SEARCH_LENGTH = 3;

  useEffect(() => {
    setSearch("");
  }, [pathname]);

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
    <LandingHeader.Root
      className="relative bg-background shadow-sm z-90"
      size="lg"
      bordered={false}
      sticky
      style={{ zIndex: 9999 }}
    >
      <LandingHeader.Left className="flex items-center">
        <div
          className="flex items-center"
          role="button"
          onClick={() => router.push("/")}
        >
          <Image
            src={storeData.logoUrl}
            alt="Mostraloja Logo"
            width={612}
            height={408}
            className="h-12 w-auto sm:h-14 md:h-16"
            quality={100}
            priority
          />
        </div>
      </LandingHeader.Left>

      <div className="flex flex-col flex-1 items-center justify-center mx-4 relative">
        <SearchInput
          search={search}
          setSearch={(e) => setSearch(e)}
          placeholder="Pesquise um produto"
          variant="button-highlight"
        />
        {search.length >= MIN_SEARCH_LENGTH && (
          <ItemsSearchList
            searchTerm={search}
            className="absolute bottom-[-160px] left-0"
            items={products as never}
            onItemClick={() => setSearch("")}
          />
        )}
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
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className="text-sm sm:text-base"
            >
              {item.label}
            </a>
          </li>
        ))}
      </LandingHeader.MobileMenuPanel>
    </LandingHeader.Root>
  );
}
