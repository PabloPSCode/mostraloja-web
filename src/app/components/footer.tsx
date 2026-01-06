"use client";
import { Footer as FooterRC } from "../../libs/react-ultimate-components";
export default function Footer() {
  return (
    <div className="bg-background text-foreground">
      <FooterRC.Root bordered>
        <FooterRC.Top columns={4}>
          <FooterRC.Column
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
          <FooterRC.Column
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
          <FooterRC.Column
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
          <FooterRC.Column
            items={[
              {
                imageUrl: "/lets_encrypt.png",
                label: "",
              },
            ]}
            title="Site seguro"
          />
        </FooterRC.Top>
        <FooterRC.SocialRow
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
        <FooterRC.Bottom>
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
        </FooterRC.Bottom>
      </FooterRC.Root>
    </div>
  );
}
