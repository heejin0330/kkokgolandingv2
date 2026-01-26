"use client"

import { useState } from "react"
import { ArrowRight, Clock, Play, Share2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { trackCTAClick } from "@/lib/gtag"

export function CTASection() {
  const aptitudeTestUrl = "https://kkokgo-landing.vercel.app/?mode=premium"
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(aptitudeTestUrl)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link")
    }
  }
  
  return (
    <section className="py-24 px-4 bg-background rounded-none">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                <span>단 5분이면 충분해요</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                지금 바로 테스트해 보세요
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                우리 아이의 잠재력을 확인하는 5분,
                <br className="hidden md:block" />
                진로 선택의 첫 걸음을 함께 시작하세요.
              </p>
              
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all w-full sm:w-auto"
                onClick={() => {
                  trackCTAClick('cta_aptitude_test')
                  setIsModalOpen(true)
                }}
              >
                우리 자녀 적성 검사하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Selection Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="sm:max-w-md rounded-3xl p-0 overflow-hidden border-0">
                <DialogHeader className="p-6 pb-2">
                  <DialogTitle className="text-xl font-bold text-center">
                    어떻게 시작할까요?
                  </DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2 space-y-3">
                  {/* Option 1: Start directly */}
                  <Button
                    asChild
                    variant="default"
                    className="w-full h-16 rounded-2xl text-base font-semibold justify-start px-5 gap-4"
                  >
                    <Link href={aptitudeTestUrl} target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
                        <Play className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div>검사 바로 시작</div>
                        <div className="text-xs font-normal opacity-80">지금 바로 적성 검사를 시작합니다</div>
                      </div>
                    </Link>
                  </Button>
                  
                  {/* Option 2: Share with child */}
                  <Button
                    variant="outline"
                    className="w-full h-16 rounded-2xl text-base font-semibold justify-start px-5 gap-4 bg-transparent"
                    onClick={handleCopyLink}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      {isCopied ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <Share2 className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="text-left flex-1">
                      <div>{isCopied ? "링크가 복사되었어요!" : "자녀에게 공유하기"}</div>
                      <div className="text-xs font-normal text-muted-foreground">
                        {isCopied ? "카카오톡 등으로 보내주세요" : "링크를 복사해서 자녀에게 전달합니다"}
                      </div>
                    </div>
                    {!isCopied && <Copy className="w-4 h-4 text-muted-foreground" />}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* QR Code */}
            <div className="shrink-0">
              <Link href={aptitudeTestUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/qr-code.png"
                    alt="우리 자녀 적성 검사하기 QR 코드"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
