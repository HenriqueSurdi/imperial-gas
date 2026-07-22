"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { Flame, PhoneCall, ShieldCheck, Truck, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CTAButtonProps = {
  variant: "primary" | "secondary"
  icon: React.ReactNode
  text: string
  link: string
  trackingLabel?: string
}

type GtagWindow = typeof window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}

const CONVERSION_LABELS = {
  whatsapp: "AW-17876528745/CxYpCOz649QcEOncmMxC",
  call: "AW-17876528745/y_IxCOKL-tQcEOncmMxC",
} as const

const reportConversion = (
  url: string | undefined,
  openInNewTab: boolean,
  sendTo: string
) => {
  if (typeof window === "undefined") {
    return
  }

  const typedWindow = window as GtagWindow
  let didNavigate = false

  const navigate = () => {
    if (!url) {
      return
    }

    if (openInNewTab) {
      window.open(url, "_blank", "noopener,noreferrer")
      return
    }

    window.location.href = url
  }

  const callback = () => {
    if (didNavigate) {
      return
    }
    didNavigate = true
    navigate()
  }

  if (typeof typedWindow.gtag !== "function") {
    callback()
    return
  }

  typedWindow.gtag("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "BRL",
    event_callback: callback,
  })

  window.setTimeout(callback, 1000)
}

const trackContactEvent = (action: string, label: string) => {
  if (typeof window === "undefined") {
    return
  }

  const typedWindow = window as GtagWindow

  if (typeof typedWindow.gtag === "function") {
    typedWindow.gtag("event", "contato", {
      event_category: "contato",
      event_label: label,
      contact_action: action,
    })
    return
  }

  typedWindow.dataLayer = typedWindow.dataLayer || []
  typedWindow.dataLayer.push({
    event: "contato",
    event_category: "contato",
    event_label: label,
    contact_action: action,
  })
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.52 3.5A11.88 11.88 0 0 0 12.06 0C5.63 0 .4 5.23.4 11.66c0 2.06.53 4.06 1.54 5.84L0 24l6.68-1.76a11.64 11.64 0 0 0 5.38 1.38h.01c6.43 0 11.66-5.23 11.66-11.66a11.6 11.6 0 0 0-3.21-8.46Zm-8.46 18.25h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.96 1.05 1.06-3.86-.23-.38a9.9 9.9 0 1 1 18.54-5.3c0 5.46-4.44 9.9-9.99 9.9Zm5.43-7.45c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.3 1.27.48 1.7.61.71.22 1.35.19 1.86.11.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  )
}

function CTAButton({ variant, icon, text, link, trackingLabel }: CTAButtonProps) {
  const isPrimary = variant === "primary"
  const isExternal =
    link.startsWith("https://") || link.startsWith("http://")
  const isWhatsAppLink = link.startsWith("https://wa.me/")
  const isPhoneLink = link.startsWith("tel:")
  const action = isWhatsAppLink
    ? "whatsapp_click"
    : isPhoneLink
      ? "call_click"
      : null

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-12 w-full gap-2 rounded-full text-base font-semibold sm:flex-1",
        isPrimary
          ? "bg-[#fb8404] text-white hover:!bg-[#e97904]"
          : "border border-[#fb8404] bg-white text-[#fb8404] hover:!border-[#e97904] hover:!bg-[#e97904] hover:!text-white"
      )}
    >
      <a
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        onClick={(event) => {
          if (!action || !trackingLabel) {
            return
          }
          event.preventDefault()
          trackContactEvent(action, trackingLabel)
          reportConversion(
            link,
            isExternal,
            isPhoneLink
              ? CONVERSION_LABELS.call
              : CONVERSION_LABELS.whatsapp
          )
        }}
      >
        <span className="inline-flex items-center gap-2">
          {icon}
          <span>{text}</span>
        </span>
      </a>
    </Button>
  )
}

type CTAGroupProps = {
  children: React.ReactNode
}

function CTAGroup({ children }: CTAGroupProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch">
      {children}
    </div>
  )
}

type BenefitsListProps = {
  children: React.ReactNode
}

function BenefitsList({ children }: BenefitsListProps) {
  return (
    <div className="flex flex-row items-stretch justify-evenly gap-3">
      {children}
    </div>
  )
}

type BenefitItemProps = {
  icon: React.ReactNode
  title: React.ReactNode
  description: string
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="group flex w-[30%] flex-col items-center gap-2 rounded-2xl border border-[#fb8404]/15 bg-white px-3 py-3 text-center text-xs text-[#2b2b2b] shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#fb8404]/35 hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] sm:px-4 sm:py-4 sm:text-sm">
      <span className="text-[#fb8404]">{icon}</span>
      <span className="text-sm font-semibold sm:text-base">{title}</span>
      <span className="text-xs text-[#5a5a5a] sm:text-sm">{description}</span>
    </div>
  )
}

export function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e preciso de gás."
  )
  const topBannerMessages = ["Receba seu gás em 20 minutos", "Aceitamos Vale Gás"]
  const [topBannerIndex, setTopBannerIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTopBannerIndex((current) => (current + 1) % topBannerMessages.length)
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [topBannerMessages.length])

  return (
    <>
      <div className="bg-[#fb8404] text-white">
        <div className="mx-auto max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${topBannerMessages.length * 100}%`,
              transform: `translateX(-${topBannerIndex * (100 / topBannerMessages.length)}%)`,
            }}
          >
            {topBannerMessages.map((message) => (
              <div
                key={message}
                className="flex flex-none items-center justify-center gap-2 px-6 py-2 text-center text-sm font-semibold"
                style={{ width: `${100 / topBannerMessages.length}%` }}
              >
                <Flame className="size-4" />
                {message}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section id="inicio" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 text-center">
                <div className="flex justify-center">
                  <Image
                    src="/images/logo-com-nome-positivo.png"
                    alt="Logo Imperial Gás"
                    width={200}
                    height={200}
                    className="h-26 w-26 object-contain"
                    priority
                  />
                </div>
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#fb8404]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
                    <Flame className="size-4" />
                    Pedido Rápido
                  </span>
                </div>
                <p className="max-w-xl text-4xl leading-tight text-[#1d1d1d] sm:text-5xl lg:text-6xl font-heading font-bold">
                  🔥 ACABOU O GÁS?
                </p>
                <h1 className="max-w-xl text-4xl leading-tight text-[#1d1d1d] sm:text-5xl lg:text-6xl font-heading font-bold uppercase">
                  Peça agora seu gás e receba{" "}
                  <span className="text-[#fb8404]">em até 20 minutos</span>
                </h1>
                <p className="max-w-lg text-lg text-[#3d3d3d] font-body">
                  Entrega rápida de gás de cozinha em Betim direto na sua casa.
                </p>
              </div>
              <CTAGroup>
                <CTAButton
                  variant="primary"
                  icon={<WhatsAppIcon className="size-5" />}
                  text="Pedir no WhatsApp"
                  link={`https://wa.me/5531973343912?text=${whatsappMessage}`}
                  trackingLabel="hero_whatsapp"
                />
                <CTAButton
                  variant="secondary"
                  icon={<PhoneCall className="size-5" />}
                  text="Ligar para Disque Gás"
                  link="tel:+553131627461"
                  trackingLabel="hero_call"
                />
              </CTAGroup>
              <BenefitsList>
                <BenefitItem
                  icon={<Truck className="size-4 sm:size-5" />}
                  title={
                    <>
                      Entrega
                      <br />
                      <span className="transition-colors group-hover:text-[#fb8404]">
                        rápida
                      </span>
                    </>
                  }
                  description="Chega em até 20 minutos."
                />
                <BenefitItem
                  icon={<ShieldCheck className="size-4 sm:size-5" />}
                  title={
                    <>
                      Botijão
                      <br />
                      <span className="transition-colors group-hover:text-[#fb8404]">
                        lacrado
                      </span>
                    </>
                  }
                  description="Segurança e procedência garantidas."
                />
                <BenefitItem
                  icon={<Zap className="size-4 sm:size-5" />}
                  title={
                    <>
                      Atendimento
                      <br />
                      <span className="transition-colors group-hover:text-[#fb8404]">
                        imediato
                      </span>
                    </>
                  }
                  description="Resposta rápida no seu pedido."
                />
              </BenefitsList>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex w-full max-w-sm flex-col gap-3">
                <Image
                  src="/images/entrega-gas.png"
                  alt="Entrega de gás"
                  width={480}
                  height={480}
                  className="h-auto w-full rounded-3xl"
                  priority
                />
                <div className="rounded-2xl border border-[#fb8404]/20 bg-[#fb8404]/10 p-4 text-center">
                  <p className="text-sm font-semibold text-[#1d1d1d] font-body">
                    Aceitamos{" "}
                    <span className="font-bold text-[#fb8404]">Vale Gás</span>{" "}
                    pois somos conveniados com o programa do governo,{" "}
                    <span className="font-bold text-[#fb8404]">
                      Gás do Povo
                    </span>
                    .
                  </p>
                  <p className="mt-2 text-xs text-[#5a5a5a] font-body">
                    Vale Gás | Auxílio Gás | Gás do Povo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { BenefitItem, BenefitsList, CTAButton, CTAGroup }
