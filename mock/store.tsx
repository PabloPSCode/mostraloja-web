import { SteeringWheelIcon, TireIcon } from "@phosphor-icons/react";
import { BannerImage, Category, ISODateString, Product } from "../types";
const nowIso: ISODateString = new Date().toISOString();

export const storeData = {
  logoUrl: "/logo.png",
  primaryColor: "#FFCC00",
};

export const categories: Category[] = [
  {
    id: "cat-pirelli",
    companyId: "company-demo",
    name: "Pneus Pirelli",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <TireIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-dunlop",
    companyId: "company-demo",
    name: "Pneus Dunlop",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <SteeringWheelIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-levorin",
    companyId: "company-demo",
    name: "Pneus Levorin",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <TireIcon size={48} weight="duotone" />,
  },

  {
    id: "cat-comfort",
    companyId: "company-demo",
    name: "Confort",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <SteeringWheelIcon size={48} weight="duotone" />,
  },
];

export const products: Product[] = [
  {
    id: "prod-scorpion-at",
    companyId: "company-demo",
    categoryId: "cat-pirelli",
    name: "Pneu Pirelli 225/65R17 Scorpion AT+",
    slug: "pneu-pirelli-225-65r17-scorpion-at",
    description: "Tração reforçada para SUV e picape.",
    status: "active",
    priceCents: 69999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    isPromotional: true,
    featuredPosition: 1,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
  {
    id: "prod-terrains",
    companyId: "company-demo",
    categoryId: "cat-goodyear",
    name: "Pneu Goodyear Wrangler Territory",
    slug: "pneu-goodyear-wrangler-territory",
    description: "Desempenho equilibrado on e off-road.",
    status: "active",
    priceCents: 68999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    isPromotional: true,
    featuredPosition: 2,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
  {
    id: "prod-michelin-primacy",
    companyId: "company-demo",
    categoryId: "cat-michelin",
    name: "Pneu Michelin Primacy SUV",
    slug: "pneu-michelin-primacy-suv",
    description: "Silêncio e conforto em alta velocidade.",
    status: "active",
    priceCents: 70999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    isPromotional: true,
    featuredPosition: 3,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
  {
    id: "prod-dunlop",
    companyId: "company-demo",
    categoryId: "cat-dunlop",
    name: "Pneu Dunlop AT5",
    slug: "pneu-dunlop-at5",
    description: "Resistência e aderência em terrenos mistos.",
    status: "active",
    priceCents: 67999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    isPromotional: true,
    featuredPosition: 4,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
];

export const bannerImages: BannerImage[] = [
  {
    id: "banner-roadtrip",
    companyId: "company-demo",
    imageUrl:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Caminhonete em estrada ao pôr do sol",
    linkUrl: "#promocoes",
    position: 1,
    isActive: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
  {
    id: "banner-offroad",
    companyId: "company-demo",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    altText: "Aventura off-road com montanhas ao fundo",
    linkUrl: "#ofertas",
    position: 2,
    isActive: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
  {
    id: "banner-urban",
    companyId: "company-demo",
    imageUrl:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    altText: "SUV em cenário urbano",
    linkUrl: "#categorias",
    position: 3,
    isActive: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
];

export const promotionalImages = [
  {
    id: "promo-1",
    companyId: "company-demo",
    imageUrl: "/deals1.png",
    altText: "Promoção de pneus 1",
    linkUrl: "#promocoes",
  },
  {
    id: "promo-2",
    companyId: "company-demo",
    imageUrl: "/deals2.png",
    altText: "Promoção de pneus 2",
    linkUrl: "#promocoes",
  },
  {
    id: "promo-2",
    companyId: "company-demo",
    imageUrl: "/deals3.png",
    altText: "Promoção de pneus 3",
    linkUrl: "#promocoes",
  },
];
