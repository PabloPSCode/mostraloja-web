import { cache } from "react";
import type {
  ICategory,
  IProduct,
  MediaImage,
  StoreData,
  StorePayload,
} from "../types";

const STORE_SOURCES = {
  skatestore: {
    storeData:
      "https://gist.githubusercontent.com/PabloPSCode/b892723de5a7d08ce140892074d9637a/raw/fa532dcefb7d06d0f2f4611fa7fc67caf22acb6c/skate_store_store-data.json",
    products:
      "https://gist.githubusercontent.com/PabloPSCode/4786b34c7732eea951a50e07795fd70d/raw/202ecbe2807414640bfb0cadf656c0a19e0b4c9f/skate_store_products.json",
    categories:
      "https://gist.githubusercontent.com/PabloPSCode/a5efafcd3b6b05db94d5350e65feac73/raw/dbf7ebb06e2c6b9eb8a1fdf4c2c29e7c6bb490be/skate_store_categories.json",
    mediaItems:
      "https://gist.githubusercontent.com/PabloPSCode/d027d7ecc17f91b7836c2656df705aaa/raw/7f86e14f2908069633d92373fd6eaaea7acdcea1/skate_store_media.json",
  },
  tirestore: {
    storeData:
      "https://gist.githubusercontent.com/PabloPSCode/51993c1319c04e71e0dd15bb0909e480/raw/605b02f2dfefcb59e9ff9cdddc6d428eeb4e724b/tire_store_store-data.json",
    products:
      "https://gist.githubusercontent.com/PabloPSCode/f19340ab55615b78b809e595ffcdf990/raw/d412f14cf3386499a6f0d0ecd700e76d69ad23f4/tire_store_products.json",
    categories:
      "https://gist.githubusercontent.com/PabloPSCode/94c8d1377420b82e4c54493c887d2e06/raw/739c1849926a1ee0b8fc7194d42b8f5e2f4f4431/tire_store_categories.json",
    mediaItems:
      "https://gist.githubusercontent.com/PabloPSCode/ceae3c4f397c72f0828ecd7bb45c13a7/raw/6ba05ce9586384b6185a2b89f86aeb0dd8e29828/tire_store_media.json",
  },
} as const;

type StoreSlug = keyof typeof STORE_SOURCES;

const DEFAULT_STORE_SLUG: StoreSlug = "skatestore";

const DEFAULT_STORE_DATA: StoreData = {
  store: {
    name: "MostraLoja",
    slogan: null,
    operation: {
      mondayToFriday: null,
      saturday: null,
      sunday: null,
    },
    deliveryMethods: {
      pickOnStore: null,
      motoBoy: null,
      ownVehicle: null,
    },
    companyLogoUrl: null,
  },
  design: {
    primaryColor: "#2700dd",
    secondaryColor: "#f4f4f4",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  legal: {
    cnpj: null,
  },
  address: {
    street: null,
    city: null,
    state: null,
    zipCode: null,
  },
  contact: {
    phone: null,
    email: null,
    whatsapp: null,
  },
  social_medias: {
    instagram: null,
    facebook: null,
  },
};

const resolveStoreSlug = (hostname?: string | null): StoreSlug => {
  if (!hostname) return DEFAULT_STORE_SLUG;
  const normalized = hostname.toLowerCase().split(":")[0];
  const withoutWww = normalized.startsWith("www.")
    ? normalized.slice(4)
    : normalized;
  const candidate = withoutWww.split(".")[0];
  return (
    candidate in STORE_SOURCES ? candidate : DEFAULT_STORE_SLUG
  ) as StoreSlug;
};

const normalizeList = <T>(data: unknown, keys: string[]): T[] => {
  if (Array.isArray(data)) return data as T[];
  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) return value as T[];
    }
  }
  return [];
};

const mergeStoreData = (data?: StoreData | null): StoreData => ({
  store: {
    ...DEFAULT_STORE_DATA.store,
    ...(data?.store ?? {}),
    operation: {
      ...DEFAULT_STORE_DATA.store.operation,
      ...(data?.store?.operation ?? {}),
    },
    deliveryMethods: {
      ...DEFAULT_STORE_DATA.store.deliveryMethods,
      ...(data?.store?.deliveryMethods ?? {}),
    },
  },
  design: {
    ...DEFAULT_STORE_DATA.design,
    ...(data?.design ?? {}),
  },
  legal: {
    ...DEFAULT_STORE_DATA.legal,
    ...(data?.legal ?? {}),
  },
  address: {
    ...DEFAULT_STORE_DATA.address,
    ...(data?.address ?? {}),
  },
  contact: {
    ...DEFAULT_STORE_DATA.contact,
    ...(data?.contact ?? {}),
  },
  social_medias: {
    ...DEFAULT_STORE_DATA.social_medias,
    ...(data?.social_medias ?? {}),
  },
});

const normalizeStoreData = (data: unknown): StoreData => {
  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    if (record.store && typeof record.store === "object") {
      return mergeStoreData(record as unknown as StoreData);
    }
    if (record.storeData && typeof record.storeData === "object") {
      return mergeStoreData(record.storeData as StoreData);
    }
  }
  return mergeStoreData(null);
};

const safeFetchJson = async (url: string) => {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch {
    return null;
  }
};

export const getStoreByDomain = cache(
  async (hostname?: string | null): Promise<StorePayload> => {
    const storeSlug = resolveStoreSlug(hostname);
    const sources = STORE_SOURCES[storeSlug];

    const [storeResponse, productsResponse, categoriesResponse, mediaResponse] =
      await Promise.all([
        safeFetchJson(sources.storeData),
        safeFetchJson(sources.products),
        safeFetchJson(sources.categories),
        safeFetchJson(sources.mediaItems),
      ]);

    const storeData = normalizeStoreData(storeResponse);
    const products = normalizeList<IProduct>(productsResponse, ["products"]);
    const categories = normalizeList<ICategory>(categoriesResponse, [
      "categories",
    ]);
    const mediaItems = normalizeList<MediaImage>(mediaResponse, [
      "mediaItems",
      "media",
    ]);

    return {
      storeData,
      products,
      categories,
      mediaItems,
    };
  }
);
