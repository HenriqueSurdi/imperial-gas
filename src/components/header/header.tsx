"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre-nos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Encontre-nos", href: "#encontre-nos" },
]

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

export function Header() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e preciso de gás."
  )
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    const targetElement = document.querySelector(href)

    if (targetElement instanceof HTMLElement) {
      requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-lg font-bold text-[#1d1d1d] font-heading uppercase"
        >
          <Image
            src="/images/logo-sem-nome-positivo.png"
            alt="Logo Imperial Gás"
            width={64}
            height={64}
            className="h-9 w-9 rounded-full object-contain"
            priority
          />
          Imperial Gás
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#3d3d3d] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#fb8404]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-[#fb8404] px-6 text-base font-semibold text-white hover:!bg-[#e97904]"
          >
            <a
              href={`https://wa.me/5531973343912?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            onClick={(event) => {
              event.preventDefault()
              trackContactEvent("whatsapp_click", "header_desktop")
              reportConversion(
                `https://wa.me/5531973343912?text=${whatsappMessage}`,
                true
              )
            }}
            >
              Pedir agora
            </a>
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#fb8404]/20 text-[#fb8404] hover:!border-[#fb8404] hover:!bg-[#fb8404] hover:!text-white"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] max-w-none p-0"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <div className="flex h-full flex-col overflow-y-auto pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
                <div className="px-6">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                </div>
                <nav className="mt-6 flex flex-col gap-4 px-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => {
                        const targetElement = document.querySelector(item.href)
                        if (targetElement instanceof HTMLElement) {
                          event.preventDefault()
                        }
                        handleNavClick(item.href)
                      }}
                      className="text-base font-semibold text-[#1d1d1d] transition-colors hover:text-[#fb8404]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 px-6">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 w-full rounded-full bg-[#fb8404] text-base font-semibold text-white hover:!bg-[#e97904]"
                  >
                    <a
                      href={`https://wa.me/5531973343912?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => {
                        event.preventDefault()
                        trackContactEvent("whatsapp_click", "header_mobile")
                        setIsOpen(false)
                        reportConversion(
                          `https://wa.me/5531973343912?text=${whatsappMessage}`,
                          true
                        )
                      }}
                    >
                      Pedir agora
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
