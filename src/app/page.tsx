import { CompanySection } from "@/components/company/company-section"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { HeroSection } from "@/components/hero/hero-section"
import { ProductsSection } from "@/components/products/products-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CompanySection />
      <ProductsSection />
      <Footer />
    </main>
  )
}
