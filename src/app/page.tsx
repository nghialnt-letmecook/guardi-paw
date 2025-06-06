import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductShowcase from "@/components/product-showcase"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
