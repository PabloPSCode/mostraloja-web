import Image from "next/image";
import { bannerImages, categories, products } from "../../mock/store.tsx";

export const topMenuItems = categories.map((category) => ({
  label: category.name,
  href: `#${category.name}`,
  icon: <span aria-hidden className="h-2 w-2 rounded-full bg-gray-400" />,
  subItems: Array.from({ length: 5 }).map((_, index) => ({
    label: `Opção ${index + 1}`,
    href: `#${category.name}-option-${index + 1}`,
  })),
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

export const bannerSlides = bannerImages
  .filter((banner) => banner.isActive)
  .sort((a, b) => a.position - b.position)
  .map((banner) => (
    <a
      key={banner.id}
      href={banner.linkUrl}
      className="relative block h-[220px] sm:h-[320px] md:h-[380px]"
    >
      <Image
        src={banner.imageUrl}
        alt={banner.altText ?? "Banner promocional"}
        fill
        className="object-cover"
        priority={banner.position === 1}
        sizes="100vw"
      />
    </a>
  ));
