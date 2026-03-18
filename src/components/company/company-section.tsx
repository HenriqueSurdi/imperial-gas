import Image from "next/image"

import { CTAButton, CTAGroup } from "@/components/hero/hero-section"

export function CompanySection() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e preciso de gás."
  )

  return (
    <section id="sobre-nos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fb8404]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
              Sobre a empresa
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl font-heading">
              Imperial Gás servindo as famílias de Betim
            </h2>
            <p className="text-lg text-[#3d3d3d] font-body">
              Seu tele gás em Betim com entrega rápida e atendimento confiável.
            </p>
            <p className="text-base text-[#5a5a5a] font-body">
              Atendemos residências que precisam de botijão de gás com entrega
              rápida.
            </p>
            <div className="flex w-full">
              <CTAGroup>
                <CTAButton
                  variant="primary"
                  icon={<span className="text-base"></span>}
                  text="Peça Agora"
                  link={`https://wa.me/5531973343912?text=${whatsappMessage}`}
                  trackingLabel="company_whatsapp"
                />
              </CTAGroup>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/images/mapa-betim.png"
                alt="Mapa de Betim"
                width={520}
                height={520}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
