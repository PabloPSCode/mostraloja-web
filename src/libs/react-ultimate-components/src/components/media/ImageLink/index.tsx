"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface ImageLinkProps {
  /** URL da imagem exibida como banner/link. */
  imgUrl: string;
  /** Largura original da imagem (utilizada para manter a proporção). */
  width: number | string;
  /** Altura original da imagem (utilizada para manter a proporção). */
  height: number | string;
  /** Texto alternativo para acessibilidade. */
  alt?: string;
  /** URL de destino. */
  onSeePromotion?: () => void;
  /** Abre o link em uma nova aba. */
  newTab?: boolean;
  /** Classes extras aplicadas ao container externo. */
  className?: string;
  /** Classes extras aplicadas à imagem. */
  imageClassName?: string;
}

/**
 * Banner clicável baseado em imagem.
 * Mantém a proporção original a partir das props `width` e `height`,
 * ocupa 100% do espaço disponível e aplica foco acessível quando usado como link.
 */
export default function ImageLink({
  imgUrl,
  width,
  height,
  alt = "Banner promocional",
  onSeePromotion,
  newTab,
  className,
  imageClassName,
}: ImageLinkProps) {
  const Wrapper: React.ElementType = onSeePromotion ? "button" : "div";
  const normalizedWidth =
    typeof width === "number" ? `${width}px` : String(width);
  const normalizedHeight =
    typeof height === "number" ? `${height}px` : String(height);

  const aspectRatio =
    typeof width === "number" && typeof height === "number" && height !== 0
      ? `${width}/${height}`
      : undefined;

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: normalizedWidth,
  };

  if (aspectRatio) {
    wrapperStyle.aspectRatio = aspectRatio;
  } else {
    wrapperStyle.height = normalizedHeight;
  }
  const imageSizes = typeof width === "number" ? `${width}px` : "100vw";

  return (
    <Wrapper
      onClick={onSeePromotion}
      className={clsx(
        "group relative block overflow-hidden rounded-md",
        "transition-shadow duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        className
      )}
      style={wrapperStyle}
    >
      <Image
        src={imgUrl}
        alt={alt}
        loading="lazy"
        fill
        sizes={imageSizes}
        className={clsx(
          "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]",
          imageClassName
        )}
      />
    </Wrapper>
  );
}
