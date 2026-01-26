import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { DataDrivenSection } from "@/components/data-driven-section"
import { SolutionsSection } from "@/components/solutions-section"
import { GuidebookSection } from "@/components/guidebook-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CTASection } from "@/components/cta-section"
import { PreRegistrationForm } from "@/components/pre-registration-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <DataDrivenSection />
      <SolutionsSection />
      <GuidebookSection />
      <ComparisonSection />
      <CTASection />
      <PreRegistrationForm />
      <Footer />
    </main>
  )
}
