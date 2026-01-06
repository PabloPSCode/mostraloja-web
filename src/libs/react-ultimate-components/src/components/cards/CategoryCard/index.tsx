"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface CategoryCardProps {
  /** Nome da categoria exibida no card. */
  name: string;
  /** Link para a listagem da categoria. */
  href: string;
  /** URL da imagem apresentada no card. */
  imgUrl?: string;
  /** Ícone exibido apenas quando nenhuma imagem é enviada. */
  icon?: React.ReactNode;
  /** Classes extras aplicadas ao contêiner externo. */
  className?: string;
  /** Abre o link em uma nova aba (opcional). */
  newTab?: boolean;
}

/**
 * Card clicável para destacar categorias em vitrines ou seções de navegação.
 * Prioriza a imagem fornecida via `imgUrl` e, na ausência dela, aceita qualquer
 * ReactNode como ícone (componente SVG etc.) mantendo uma área padronizada e
 * responsiva.
 */
export default function CategoryCard({
  name,
  href,
  imgUrl,
  icon,
  className,
  newTab,
}: CategoryCardProps) {
  const media = imgUrl ? (
    <Image
      src={imgUrl}
      alt={name}
      width={96}
      height={96}
      className="h-full w-full rounded-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
      loading="lazy"
      sizes="(min-width: 768px) 96px, (min-width: 640px) 80px, 64px"
    />
  ) : (
    icon
  );

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={clsx(
        "group flex flex-col items-center gap-3 rounded-xl border border-border-card bg-bg-card p-4 sm:p-5 shadow-sm text-foreground",
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/40",
        className
      )}
      aria-label={`Ver categoria ${name}`}
    >
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center overflow-hidden rounded-full  bg-gray-200 text-primary-600 dark:text-primary-400 text-2xl sm:text-3xl transition-colors ">
        {media}
      </div>
      <span className="text-sm sm:text-base font-semibold text-primary-600 dark:text-primary-400 text-center leading-tight line-clamp-2">
        {name}
      </span>
    </a>
  );
}
