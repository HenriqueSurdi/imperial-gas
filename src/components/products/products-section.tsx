"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

import { Clock, PhoneCall } from "lucide-react"
import type { Icon as LeafletIcon } from "leaflet"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

type GtagWindow = typeof window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}

const reportConversion = (url: string | undefined, openInNewTab: boolean) => {
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
    send_to: "AW-17876528745/CxYpCOz649QcEOncmMxC",
    value: 1.0,
    currency: "BRL",
    event_callback: callback,
  })

  window.setTimeout(callback, 1000)
}

const trackContactEvent = (action: string, label: string) => {
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

type Product = {
  name: string
  description: string
  tag: string
  imageSrc?: string
  whatsappMessage: string
}

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  { ssr: false }
)

const products: Product[] = [
  {
    name: "Gás de cozinha",
    description: "Botijão P13 lacrado com pronta entrega.",
    tag: "Mais pedido",
    imageSrc: "/images/P13.jpg",
    whatsappMessage: "Olá! Vim pelo site e quero pedir um botijão P13.",
  },
  {
    name: "Água Mineral",
    description: "Água mineral gelada para completar o pedido.",
    tag: "Refrescante",
    imageSrc: "/images/agua-mineral.jpg",
    whatsappMessage: "Olá! Vim pelo site e quero pedir água mineral.",
  },
  {
    name: "Válvula para Botijão",
    description: "Válvula certificada para uso seguro do botijão.",
    tag: "Acessório",
    imageSrc: "/images/valvula.jpg",
    whatsappMessage: "Olá! Vim pelo site e quero pedir uma válvula para botijão.",
  },
]

type ProductCardProps = Product

function ProductCard({
  name,
  description,
  tag,
  imageSrc,
  whatsappMessage,
}: ProductCardProps) {
  const whatsappLink = `https://wa.me/5531973343912?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <div className="group relative flex h-full flex-col rounded-3xl border border-[#fb8404]/15 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-[#fb8404]/35 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <span className="absolute right-4 top-4 rounded-full bg-[#fb8404]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
        {tag}
      </span>
      <div className="flex flex-col gap-5">
        <div className="overflow-hidden rounded-2xl bg-[#fb8404]/10">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              width={520}
              height={390}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center text-sm font-semibold text-[#fb8404]">
              Imagem do produto
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 text-left">
          <h3 className="text-xl font-semibold text-[#1d1d1d] font-heading">
            {name}
          </h3>
          <p className="text-base text-[#5a5a5a] font-body">{description}</p>
        </div>
        <Button
          asChild
          size="lg"
          className="mt-auto h-12 w-full rounded-full text-base font-semibold bg-[#fb8404] text-white hover:!bg-[#e97904]"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              event.preventDefault()
              trackContactEvent("whatsapp_click", `product_${name}`)
              reportConversion(whatsappLink, true)
            }}
          >
            Comprar no WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}

const betimBounds: [[number, number], [number, number]] = [
  [-20.05, -44.35],
  [-19.85, -44.05],
]

const deliveryPoint: [number, number] = [-19.9344962,-44.177863]

export function ProductsSection() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e preciso de gás."
  )
  const [markerIcon, setMarkerIcon] = useState<LeafletIcon | null>(null)

  useEffect(() => {
    let isMounted = true

    import("leaflet").then((leaflet) => {
      if (!isMounted) {
        return
      }

      setMarkerIcon(
        new leaflet.Icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          shadowSize: [41, 41],
        })
      )
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <section id="produtos" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#fb8404]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
                Produtos
              </span>
              <h2 className="text-3xl font-bold leading-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl font-heading">
                Tudo o que você precisa com entrega rápida
              </h2>
              <p className="max-w-2xl text-lg text-[#3d3d3d] font-body">
                Itens essenciais para o seu dia a dia, disponíveis para pedir em
                poucos cliques.
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#fb8404]/20 bg-white px-4 py-1 text-xs font-semibold text-[#3d3d3d]">
                <Clock className="size-3.5 text-[#fb8404]" />
                Entrega em até 20 minutos para Betim.
              </span>
            </div>
            <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-12 overflow-hidden">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="py-4">
                  {products.map((product) => (
                    <CarouselItem
                      key={product.name}
                      className="basis-full md:basis-1/3"
                    >
                      <ProductCard {...product} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 flex sm:-left-6" />
                <CarouselNext className="right-2 flex sm:-right-6" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section id="encontre-nos" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[45%_55%] lg:items-center">
            <div className="flex flex-col gap-6 text-[#1d1d1d]">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl font-heading">
                Encontre a Imperial Gás
              </h2>
              <p className="text-lg font-body text-[#3d3d3d]">
                Atendimento rápido em toda a região de Betim.
              </p>
              <div className="rounded-3xl border border-[#fb8404]/20 bg-[#fb8404]/10 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
                  📍 Endereço
                </p>
                <div className="mt-3 flex flex-col gap-1 text-base font-body text-[#1d1d1d]">
                  <span className="text-lg font-semibold">Imperial Gás</span>
                  <span>Betim – Minas Gerais</span>
                  <span className="text-[#5a5a5a]">
                    Rua A, 79 - Vila das Flores
                  </span>
                  <span className="text-[#5a5a5a]">
                    Betim - MG, CEP: 32605-350
                  </span>
                  <div className="flex items-center gap-2 text-[#5a5a5a]">
                    <PhoneCall className="size-4 text-[#fb8404]" />
                    <span>(31) 3162-7461</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] overflow-hidden rounded-3xl border border-[#fb8404]/15 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:h-[360px] lg:h-[420px]">
              <MapContainer
                center={deliveryPoint}
                zoom={13}
                maxBounds={betimBounds}
                maxBoundsViscosity={0.8}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                touchZoom={false}
                boxZoom={false}
                keyboard={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={deliveryPoint}
                  icon={markerIcon ?? undefined}
                >
                  <Popup>Rua A, 79 - Vila das Flores</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fb8404]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="flex flex-col items-center gap-6 text-center text-white">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl font-heading">
              Precisando de Gás agora?
            </h2>
            <p className="max-w-2xl text-lg font-body text-white/90">
              A Imperial Gás é a solução para quem procura gás de cozinha com
              entrega rápida em Betim.
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-8 text-base font-semibold text-[#fb8404] hover:!bg-white/90"
            >
              <a
                href={`https://wa.me/5531973343912?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => {
                  event.preventDefault()
                  trackContactEvent("whatsapp_click", "cta_whatsapp")
                  reportConversion(
                    `https://wa.me/5531973343912?text=${whatsappMessage}`,
                    true
                  )
                }}
              >
                Pedir no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
