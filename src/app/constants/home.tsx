import { TireIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { bannerImages, categories, products, storeData } from "../../mock/store.tsx";
import { sendMessageWhatsapp } from "../../utils/helpers.ts";

const normalizeMenuSegment = (value: string) => {
  const trimmed = value.trim().replace(/^#+/, "");
  const withoutPrefix = trimmed.replace(/^pneus?\s+/i, "");
  const base = withoutPrefix || trimmed;
  return base
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const buildSearchHref = (category: (typeof categories)[number], subLabel?: string) => {
  const categorySlug = category.slug || normalizeMenuSegment(category.name);
  const queryLabel = subLabel ?? category.name;
  const subSlug = subLabel ? normalizeMenuSegment(subLabel) : "";
  const slug = subSlug ? `${categorySlug}-${subSlug}` : categorySlug;
  return `/pesquisa/${slug}?search=${encodeURIComponent(queryLabel)}`;
};

export const topMenuItems = storeData.categories.map((category) => ({
  label: category.name,
  href: buildSearchHref(category),
}));

export const featuredProducts = products
  .filter((product) => product.isPromotional)
  .sort((a, b) => (a.featuredPosition ?? 0) - (b.featuredPosition ?? 0));

export const originalPrices: Record<string, number> = {
  "prod-scorpion-at": 799.99,
  "prod-terrains": 789.99,
  "prod-michelin-primacy": 809.99,
  "prod-dunlop": 779.99,
};

export const dealDeadline = new Date(
  Date.now() + 23 * 60 * 60 * 1000
).toISOString();

const activeBanners = bannerImages;

const buildBannerSlides = (heightClassName: string) =>
  activeBanners.map((banner, index) => (
    <div
      key={banner.id}
      onClick={() => sendMessageWhatsapp(
        `Olá, tenho interesse na promoção: ${banner.altText ?? "sem descrição"}`,
        "5531985187963"
      )}
      className={`relative block ${heightClassName} cursor-pointer`}
    >
      <Image
        src={banner.imageUrl}
        alt={banner.altText ?? "Banner promocional"}
        fill
        className="object-cover"
        priority={index + 1 === 1}
        sizes="100vw"
      />
    </div>
  ));

export const bannerSlides = buildBannerSlides(
  "h-[220px] sm:h-[320px] md:h-[380px]"
);
export const heroBannerSlides = buildBannerSlides("min-h-[60vh]");
