import { SteeringWheelIcon, TireIcon } from "@phosphor-icons/react/dist/ssr";
import { BannerImage, ICategory, IProduct, ISODateString } from "../types";
const nowIso: ISODateString = new Date().toISOString();

export const categories: ICategory[] = [
  {
    id: "cat-pirelli",
    companyId: "company-demo",
    name: "Pneus Pirelli",
    slug: "pneus-pirelli",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <TireIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-goodyear",
    companyId: "company-demo",
    name: "Pneus Goodyear",
    slug: "pneus-goodyear",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <TireIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-michelin",
    companyId: "company-demo",
    name: "Pneus Michelin",
    slug: "pneus-michelin",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <SteeringWheelIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-dunlop",
    companyId: "company-demo",
    name: "Pneus Dunlop",
    slug: "pneus-dunlop",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <SteeringWheelIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-levorin",
    companyId: "company-demo",
    name: "Pneus Levorin",
    slug: "pneus-levorin",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <TireIcon size={48} weight="duotone" />,
  },
  {
    id: "cat-comfort",
    companyId: "company-demo",
    name: "Confort",
    slug: "confort",
    createdAt: nowIso,
    updatedAt: nowIso,
    icon: <SteeringWheelIcon size={48} weight="duotone" />,
  },
];

export const products: IProduct[] = [
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
    shareUrl: "https://rgpneus.com.br/",
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
    shareUrl: "https://rgpneus.com.br/",
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
    shareUrl: "https://rgpneus.com.br/",
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
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-pirelli-cinturato-p7",
    companyId: "company-demo",
    categoryId: "cat-pirelli",
    name: "Pneu Pirelli Cinturato P7",
    slug: "pneu-pirelli-cinturato-p7",
    description: "Economia de combustivel e estabilidade em alta velocidade.",
    status: "active",
    priceCents: 62999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-pirelli-powergy",
    companyId: "company-demo",
    categoryId: "cat-pirelli",
    name: "Pneu Pirelli Powergy 205/55R16",
    slug: "pneu-pirelli-powergy-205-55r16",
    description: "Boa aderencia e baixa resistencia ao rolamento.",
    status: "active",
    priceCents: 58999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-goodyear-assurance-maxlife",
    companyId: "company-demo",
    categoryId: "cat-goodyear",
    name: "Pneu Goodyear Assurance MaxLife",
    slug: "pneu-goodyear-assurance-maxlife",
    description: "Alta durabilidade para uso urbano e estrada.",
    status: "active",
    priceCents: 69999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-goodyear-eagle-sport-2",
    companyId: "company-demo",
    categoryId: "cat-goodyear",
    name: "Pneu Goodyear Eagle Sport 2",
    slug: "pneu-goodyear-eagle-sport-2",
    description: "Controle e resposta em curvas com chuva.",
    status: "active",
    priceCents: 75999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-michelin-ltx-force",
    companyId: "company-demo",
    categoryId: "cat-michelin",
    name: "Pneu Michelin LTX Force",
    slug: "pneu-michelin-ltx-force",
    description: "Robustez para uso misto em SUVs e caminhonetes.",
    status: "active",
    priceCents: 81999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-michelin-energy-xm2-plus",
    companyId: "company-demo",
    categoryId: "cat-michelin",
    name: "Pneu Michelin Energy XM2+",
    slug: "pneu-michelin-energy-xm2-plus",
    description: "Conforto e eficiencia no dia a dia.",
    status: "active",
    priceCents: 58999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-dunlop-sp-sport-fm800",
    companyId: "company-demo",
    categoryId: "cat-dunlop",
    name: "Pneu Dunlop SP Sport FM800",
    slug: "pneu-dunlop-sp-sport-fm800",
    description: "Dirigibilidade e conforto em asfalto.",
    status: "active",
    priceCents: 55999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-dunlop-at25",
    companyId: "company-demo",
    categoryId: "cat-dunlop",
    name: "Pneu Dunlop AT25",
    slug: "pneu-dunlop-at25",
    description: "Aderencia em terrenos mistos com conforto.",
    status: "active",
    priceCents: 63999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-levorin-matrix-175-70r13",
    companyId: "company-demo",
    categoryId: "cat-levorin",
    name: "Pneu Levorin Matrix 175/70R13",
    slug: "pneu-levorin-matrix-175-70r13",
    description: "Eficiencia e bom custo-beneficio.",
    status: "active",
    priceCents: 37999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-levorin-chrono-195-55r15",
    companyId: "company-demo",
    categoryId: "cat-levorin",
    name: "Pneu Levorin Chrono 195/55R15",
    slug: "pneu-levorin-chrono-195-55r15",
    description: "Controle em piso seco e molhado.",
    status: "active",
    priceCents: 42999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
  },
  {
    id: "prod-comfort-drive-205-55r16",
    companyId: "company-demo",
    categoryId: "cat-comfort",
    name: "Pneu Comfort Drive 205/55R16",
    slug: "pneu-comfort-drive-205-55r16",
    description: "Conforto e baixa vibracao para uso diario.",
    status: "active",
    priceCents: 48999,
    currency: "BRL",
    isAvailable: true,
    coverImageUrl:
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    imageUrls: [
      "https://rgpneus.com.br/admin/DiretorioImagens/25567140000681/ControleImagens/PROD_NCR22560182/scorpion-209.webp",
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    shareUrl: "https://rgpneus.com.br/",
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
      "https://images.unsplash.com/photo-1585252522525-4f9ad48a24ea?q=80&w=954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://iili.io/fepSgbj.png",
    name: "Promoção de pneus 1",
    linkUrl: "#promocoes",
  },
  {
    id: "promo-2",
    companyId: "company-demo",
    imageUrl: "https://iili.io/fepgZNa.png",
    name: "Promoção de pneus 2",
    linkUrl: "#promocoes",
  },
  {
    id: "promo-3",
    companyId: "company-demo",
    imageUrl: "https://iili.io/fep44v1.png",
    name: "Promoção de pneus 3",
    linkUrl: "#promocoes",
  },
];

export const storeData = {
  store: {
    name: "MostraLoja Pneus",
    slogan: "A melhor seleção de pneus para seu veículo com preços imbatíveis!",
    operation: {
      mondayToFriday: "08:00 - 18:00",
      saturday: "08:00 - 12:00",
      sunday: "Fechado",
    },
    deliveryMethods: {
      pickOnStore: true,
      motoBoy: true,
      ownVehicle: true,
    },
    companyLogoUrl: "https://iili.io/fepi214.md.png",
  },
  design: {
    primaryColor: "#83770b",
    secondaryColor: "#260a07",
    fontFamily: "Raleway, sans-serif",
  },
  legal: {
    cnpj: "12.345.678/0001-90",
  },
  address: {
    street: "Av. Exemplo, 1234",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567",
  },
  contact: {
    phone: "(11) 1234-5678",
    email: "contato@mostralojapneus.com",
    whatsapp: "5531985187963",
  },
  social_medias: {
    instagram: "https://www.instagram.com/mostralojapneus",
    facebook: "https://www.facebook.com/mostralojapneus",
  },
  medias: {
    banners: bannerImages,
    promotionalImages: promotionalImages,
  },
  products: products,
  categories: categories,
};

// ========================================= NEW STORE DATA =============================================

// import {
//   SealCheckIcon,
//   SparkleIcon,
//   SunglassesIcon,
//   TagIcon,
// } from "@phosphor-icons/react";
// import { BannerImage, ICategory, IProduct, ISODateString } from "../types";
// import { EyeIcon } from "@phosphor-icons/react/dist/ssr";
// import { SelectAllCommand } from "https://cdn.ckeditor.com/typings/ckeditor5.d.ts";
// const nowIso: ISODateString = new Date().toISOString();

// const toId = (prefix: string, value: string) =>
//   `${prefix}-${value
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)/g, "")}`;

// const toSlug = (value: string) =>
//   value
//     .toLowerCase()
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)/g, "");

// const resizeVtex = (url: string, size = 800) =>
//   url
//     .replace(/\/ids\/(\d+)-\d+-auto\//, `/ids/$1-${size}-auto/`)
//     .replace(/\/ids\/(\d+)-\d+-/g, `/ids/$1-${size}-`);

// /** Categories (based on the eÓtica top navigation) */
// export const categories: ICategory[] = [
//   {
//     id: "cat-promocao",
//     companyId: "company-eotica",
//     name: "Promoção",
//     slug: "promocao",
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     icon: <TagIcon size={48} weight="duotone" />,
//   },
//   {
//     id: "cat-lancamentos",
//     companyId: "company-eotica",
//     name: "Lançamentos",
//     slug: "lancamentos",
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     icon: <SparkleIcon size={48} weight="duotone" />,
//   },
//   {
//     id: "cat-oculos-grau",
//     companyId: "company-eotica",
//     name: "Óculos de grau",
//     slug: "oculos-de-grau",
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     icon: <SunglassesIcon size={48} weight="duotone" />,
//   },
//   {
//     id: "cat-oculos-sol",
//     companyId: "company-eotica",
//     name: "Óculos de sol",
//     slug: "oculos-de-sol",
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     icon: <SunglassesIcon size={48} weight="duotone" />,
//   },
//   {
//     id: "cat-lentes-contato",
//     companyId: "company-eotica",
//     name: "Lentes de contato",
//     slug: "lentes-de-contato",
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     icon: <EyeIcon size={48} weight="duotone" />,
//   },
//   {
//     id: "cat-marcas",
//     companyId: "company-eotica",
//     name: "Marcas",
//     slug: "marcas",
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     icon: <SealCheckIcon size={48} weight="duotone" />,
//   },
// ];

// /** Products (sample: “Top Ofertas” + “Para aproveitar o verão”) */
// export const products: IProduct[] = [
//   {
//     id: "prod-j84177",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Jean Monnier J84177",
//     slug: "jean-monnier-j84177",
//     description:
//       "Excelente escolha para quem busca estilo e conforto; ideal para looks modernos no dia a dia.",
//     status: "active",
//     priceCents: 26600,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/595431-80-auto/-cdn-record-files-pi-966a66c4-190c-4c46-ab60-b31500c9b108-db79eeea-1e48-4580-8bbf-b31d00ce2e19-0J84177__N495__PIC04__noshad__qt.png?v=639014010503630000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/595431-80-auto/-cdn-record-files-pi-966a66c4-190c-4c46-ab60-b31500c9b108-db79eeea-1e48-4580-8bbf-b31d00ce2e19-0J84177__N495__PIC04__noshad__qt.png?v=639014010503630000",
//         800
//       ),
//     ],
//     isPromotional: true,
//     featuredPosition: 1,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/7895653309241-jean-monnier-j84177/p",
//   },
//   {
//     id: "prod-gu7741",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Guess GU7741",
//     slug: "guess-gu7741",
//     description:
//       "Estilo jovem, ousado e glamouroso, com armações modernas e proteção UV.",
//     status: "active",
//     priceCents: 30500,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/585273-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-0ef29fdd-63c0-4532-b144-af4301189f56-GU7741__01B__P21__shad__qt.png?v=638992359274770000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/585273-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-0ef29fdd-63c0-4532-b144-af4301189f56-GU7741__01B__P21__shad__qt.png?v=638992359274770000",
//         800
//       ),
//     ],
//     isPromotional: true,
//     featuredPosition: 2,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/889214226310-guess-gu7741/p",
//   },
//   {
//     id: "prod-gu7742",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Guess GU7742",
//     slug: "guess-gu7742",
//     description:
//       "Estilo jovem, ousado e glamouroso, com armações modernas e proteção UV.",
//     status: "active",
//     priceCents: 30500,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/585272-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-ae41b654-0c1f-454b-b447-af4301189cc4-GU7742__01D__P21__shad__qt.png?v=638992359267170000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/585272-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-ae41b654-0c1f-454b-b447-af4301189cc4-GU7742__01D__P21__shad__qt.png?v=638992359267170000",
//         800
//       ),
//     ],
//     isPromotional: true,
//     featuredPosition: 3,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/889214226365-guess-gu7742/p",
//   },
//   {
//     id: "prod-gu7681",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Guess GU7681",
//     slug: "guess-gu7681",
//     description:
//       "Estilo jovem, ousado e glamouroso, com armações modernas e proteção UV.",
//     status: "active",
//     priceCents: 26500,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/583841-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-93fd4471-7efb-4a1f-bec2-af4301189f4e-GU7681__20W__P21__shad__qt.png?v=638992358871470000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/583841-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-93fd4471-7efb-4a1f-bec2-af4301189f4e-GU7681__20W__P21__shad__qt.png?v=638992358871470000",
//         800
//       ),
//     ],
//     isPromotional: true,
//     featuredPosition: 4,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/889214148285-guess-gu7681/p",
//   },
//   {
//     id: "prod-gu7771",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Guess GU7771",
//     slug: "guess-gu7771",
//     description:
//       "Estilo jovem, ousado e glamouroso, com armações modernas e proteção UV.",
//     status: "active",
//     priceCents: 26500,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/588220-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-bd2e9dd5-76c2-4f49-bebd-af43011898e4-GU7771__55E__P21__shad__qt.png?v=638992366995370000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/588220-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-bd2e9dd5-76c2-4f49-bebd-af43011898e4-GU7771__55E__P21__shad__qt.png?v=638992366995370000",
//         800
//       ),
//     ],
//     isPromotional: true,
//     featuredPosition: 5,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/889214231987-guess-gu7771/p",
//   },
//   {
//     id: "prod-vo5616s",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Vogue Eyewear VO5616S",
//     slug: "vogue-eyewear-vo5616s",
//     description:
//       "Armação em formato olho-caixote com lentes polarizadas para reduzir ofuscamento e melhorar a clareza visual.",
//     status: "active",
//     priceCents: 67000,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/589082-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-74e9ee24-1836-40a6-a82d-af4301189d52-0VO5616S__W44M82__P21__shad__qt.png?v=638992371140900000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/589082-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-74e9ee24-1836-40a6-a82d-af4301189d52-0VO5616S__W44M82__P21__shad__qt.png?v=638992371140900000",
//         800
//       ),
//     ],
//     isPromotional: false,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/8056262245385-vogue-eyewear-vo5616s/p",
//   },
//   {
//     id: "prod-vo4339s",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Vogue Eyewear VO4339S",
//     slug: "vogue-eyewear-vo4339s",
//     description:
//       "Escolha para quem busca estilo e conforto, ideal para compor looks modernos no dia a dia.",
//     status: "active",
//     priceCents: 67000,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/589115-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-a405b551-3d4b-4c27-bf5a-af4301189d4c-0VO4339S__W65671__P21__shad__qt.png?v=638992371279670000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/589115-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-a405b551-3d4b-4c27-bf5a-af4301189d4c-0VO4339S__W65671__P21__shad__qt.png?v=638992371279670000",
//         800
//       ),
//     ],
//     isPromotional: false,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/8056262532317-vogue-eyewear-vo4339s/p",
//   },
//   {
//     id: "prod-vo5683sl",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Vogue Eyewear VO5683SL",
//     slug: "vogue-eyewear-vo5683sl",
//     description:
//       "Modelo quadrado com lentes marrom degradê e armação havana escura para um visual sofisticado e versátil.",
//     status: "active",
//     priceCents: 52000,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/594631-150-auto/-cdn-record-files-pi-0e8b2c0f-cc56-4251-a9ba-b5b600ceaa46-b22524a4-f2a5-476b-b9ba-b5b600cf04c1-0VO5683SL__W65613__P21__shad__qt.png?v=639009517097270000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/594631-150-auto/-cdn-record-files-pi-0e8b2c0f-cc56-4251-a9ba-b5b600ceaa46-b22524a4-f2a5-476b-b9ba-b5b600cf04c1-0VO5683SL__W65613__P21__shad__qt.png?v=639009517097270000",
//         800
//       ),
//     ],
//     isPromotional: false,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl:
//       "https://www.eotica.com.br/7895653344563-vogue-eyewear-vo5683sl/p",
//   },
//   {
//     id: "prod-vo4342s",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Vogue Eyewear VO4342S",
//     slug: "vogue-eyewear-vo4342s",
//     description:
//       "Armação metálica ouro-pálido com lentes vermelhas sólidas para um visual elegante e marcante.",
//     status: "active",
//     priceCents: 73000,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/589117-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-15e74aa7-38cd-46ed-ab32-af4301189e4e-0VO4342S__W6565D__P21__shad__qt.png?v=638992371296200000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/589117-150-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-15e74aa7-38cd-46ed-ab32-af4301189e4e-0VO4342S__W6565D__P21__shad__qt.png?v=638992371296200000",
//         800
//       ),
//     ],
//     isPromotional: false,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl: "https://www.eotica.com.br/8056262533871-vogue-eyewear-vo4342s/p",
//   },
//   {
//     id: "prod-vo5504sl",
//     companyId: "company-eotica",
//     categoryId: "cat-oculos-sol",
//     name: "Óculos de Sol Vogue Eyewear VO5504SL",
//     slug: "vogue-eyewear-vo5504sl",
//     description:
//       "Combina estilo e funcionalidade para um visual moderno e proteção em diversas ocasiões.",
//     status: "active",
//     priceCents: 68000,
//     currency: "BRL",
//     isAvailable: true,
//     coverImageUrl: resizeVtex(
//       "https://eotica.vtexassets.com/arquivos/ids/571618-80-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-d4a34dcf-286e-476f-b647-af43011897db-0VO5504SL__2426I6__P21__shad__qt.png?v=638988171069430000",
//       800
//     ),
//     imageUrls: [
//       resizeVtex(
//         "https://eotica.vtexassets.com/arquivos/ids/571618-80-auto/-cdn-record-files-pi-b08299a9-d4b8-4f48-bb12-af43011894b6-d4a34dcf-286e-476f-b647-af43011897db-0VO5504SL__2426I6__P21__shad__qt.png?v=638988171069430000",
//         800
//       ),
//     ],
//     isPromotional: false,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//     shareUrl:
//       "https://www.eotica.com.br/7895653259201-vogue-eyewear-vo5504sl/p",
//   },
// ];

// export const bannerImages: BannerImage[] = [
//   {
//     id: "banner-presentes-elas",
//     companyId: "company-eotica",
//     imageUrl:
//       "https://eotica.vtexassets.com/assets/vtex.file-manager-graphql/images/210de7cb-2170-413a-b9a8-02313db02792___d7f3c9df23d04be0a164fa3356ace386.png",
//     altText: "Presentes para elas",
//     linkUrl: "https://www.eotica.com.br/",
//     position: 1,
//     isActive: true,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//   },
//   {
//     id: "banner-presentes-eles",
//     companyId: "company-eotica",
//     imageUrl:
//       "https://eotica.vtexassets.com/assets/vtex.file-manager-graphql/images/fc8f4a73-73a4-49f0-8d4b-a3991164bb1f___169c8034374f770fba295a4ffc1ab2d9.png",
//     altText: "Presentes para eles",
//     linkUrl: "https://www.eotica.com.br/",
//     position: 2,
//     isActive: true,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//   },
//   {
//     id: "banner-clipon",
//     companyId: "company-eotica",
//     imageUrl:
//       "https://eotica.vtexassets.com/assets/vtex.file-manager-graphql/images/77e398b8-21e1-4292-97d1-30510908e858___85471f640cfc0c83ad12ffa1c7ed343e.png",
//     altText: "Seleção de Clip On",
//     linkUrl: "https://www.eotica.com.br/",
//     position: 3,
//     isActive: true,
//     createdAt: nowIso,
//     updatedAt: nowIso,
//   },
// ];

// export const promotionalImages = [
//   {
//     id: "promo-verao",
//     companyId: "company-eotica",
//     imageUrl:
//       "https://eotica.vtexassets.com/assets/vtex.file-manager-graphql/images/5f04f836-bb2e-4635-9f57-14b6c8d5e620___17b548180393f81e523a628f1cee5c82.png",
//     name: "Solares para aproveitar o verão",
//     linkUrl: "https://www.eotica.com.br/",
//   },
//   {
//     id: "promo-kids",
//     companyId: "company-eotica",
//     imageUrl:
//       "https://eotica.vtexassets.com/assets/vtex.file-manager-graphql/images/ccb559c9-0497-4cdb-8c1d-7a35c6363e04___d6eb079773666041e0bcb478f319dbbf.png",
//     name: "Presentes Kids",
//     linkUrl: "https://www.eotica.com.br/",
//   },
//   {
//     id: "promo-presentes",
//     companyId: "company-eotica",
//     imageUrl:
//       "https://eotica.vtexassets.com/assets/vtex.file-manager-graphql/images/210de7cb-2170-413a-b9a8-02313db02792___d7f3c9df23d04be0a164fa3356ace386.png",
//     name: "Presentes para elas",
//     linkUrl: "https://www.eotica.com.br/",
//   },
// ];

// export const storeData = {
//   store: {
//     name: "eÓtica",
//     slogan: "Ótica online: lentes de contato, óculos de sol e de grau.",
//     companyLogoUrl: "https://www.eotica.com.br/",
//     operation: {
//       mondayToFriday: "09:00 - 17:00",
//       saturday: "Fechado",
//       sunday: "Fechado",
//     },
//     deliveryMethods: {
//       pickOnStore: false,
//       motoBoy: false,
//       ownVehicle: true, // entrega (e-commerce)
//     },
//   },
//   design: {
//     primaryColor: "#87bced",
//     secondaryColor: "#260a07",
//   },
//   legal: {
//     cnpj: "13.257.648/0001-90",
//   },
//   address: {
//     street: "Rua Ministro Jesuíno Cardoso, 52, 3º andar, ala “A”",
//     city: "São Paulo",
//     state: "SP",
//     zipCode: "04544-050",
//   },
//   contact: {
//     phone: "(11) 4000-2973",
//     email: "contato@eotica.com.br",
//   },
//   social_medias: {
//     instagram: "https://www.instagram.com/mostralojapneus",
//     facebook: "https://www.facebook.com/mostralojapneus",
//   },
//   medias: {
//     banners: bannerImages,
//     promotionalImages: promotionalImages,
//   },
//   products,
//   categories,
// };
