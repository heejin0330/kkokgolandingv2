"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("pre-registration")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-card px-4 py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>AI 기반 진학 매칭 서비스 - 꼭고</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6 text-balance">
          우리 아이의 10년 뒤를 결정할 
          <br />
          <span className="text-primary">고등학교 선택</span> 
          <br />
          데이터가 답입니다. 
        </h1>
        
        {/* Sub copy */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          꼭고는 AI 데이터 분석 알고리즘에 기반하여 자녀의 적성에 맞는 학교와 전공을 매칭해 드립니다.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            우리 자녀 적성 검사하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 text-lg rounded-2xl font-semibold border-2 hover:bg-muted transition-all bg-transparent"
            onClick={scrollToForm}
          >
            사전예약 신청하기
          </Button>
        </div>
      </div>
    </section>
  )
}
