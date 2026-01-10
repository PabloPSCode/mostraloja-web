"use client";

import { useEffect } from "react";
import { storeData } from "../../mock/store";
import { buildThemeVars } from "../../utils/theme";

export default function ThemeTokens() {
  useEffect(() => {
    if (!storeData.design) return;
    const vars = buildThemeVars(
      storeData.design.primaryColor,
      storeData.design.secondaryColor
    );
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, []);

  return null;
}
