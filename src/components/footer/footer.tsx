import Image from "next/image"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre-nos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Encontre-nos", href: "#encontre-nos" },
]

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 text-center md:grid-cols-[1.2fr_1fr_1fr] md:text-left">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a
              href="#inicio"
              className="flex items-center gap-3 text-lg font-bold text-white font-heading uppercase"
            >
              <Image
                src="/images/logo-com-nome.png"
                alt="Logo Imperial Gás"
                width={200}
                height={200}
                className="h-26 w-26 object-contain"
              />
            </a>
            <p className="text-sm text-white/70 font-body">
              Entrega rápida de gás de cozinha em Betim.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
              Mapa do site
            </span>
            <nav className="flex flex-col items-center gap-2 text-sm font-semibold text-white/80 md:items-start">
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
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
              Políticas
            </span>
            <div className="flex flex-col items-center gap-2 text-sm font-semibold text-white/80 md:items-start">
              <a
                href="/politica-de-privacidade-cookies"
                className="transition-colors hover:text-[#fb8404]"
              >
                Política de Privacidade & Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs font-semibold text-white/70 md:text-sm">
          Desenvolvido com estratégia e 🧡 por{" "}
          <a
            href="https://callup.net.br/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#fb8404]"
          >
            CallUp - Soluções Digitais
          </a>
        </div>
      </div>
    </footer>
  )
}
