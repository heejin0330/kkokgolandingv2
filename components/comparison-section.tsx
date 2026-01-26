"use client"

import { useState } from "react"
import { ExternalLink, Info, X } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ComparisonItem {
  text: string
  tooltip?: string
  highlight?: boolean
}

interface ComparisonRow {
  category: string
  meister: {
    title: string
    badge?: string
    items: ComparisonItem[]
  }
  vocational: {
    title: string
    badge?: string
    items: ComparisonItem[]
  }
}

const comparisonData: ComparisonRow[] = [
  {
    category: "핵심\n목표",
    meister: {
      title: "산업수요 맞춤형 영마이스터 양성",
      items: [],
    },
    vocational: {
      title: "소질과 적성을 반영한 실무 인재 양성",
      items: [],
    },
  },
  {
    category: "입학\n전형",
    meister: {
      title: "심층 면접 및 적성 소양검사 필수",
      badge: "경쟁률 높음",
      items: [
        { text: "2026학년도 서울 지역 지원율 159.8% 기록", highlight: true },
      ],
    },
    vocational: {
      title: "내신 및 출결 기반 선발",
      badge: "디자인 인기",
      items: [
        { text: "문화·예술·디자인 분야 지원율 138.5%로 최고 인기", highlight: true },
      ],
    },
  },
  {
    category: "취업\n역량",
    meister: {
      title: "'경력 같은 신입'을 만드는 실전 교육",
      items: [
        { text: "NCS 중심 교육과정 및 공사취업반 운영", tooltip: "NCS(국가직무능력표준): 산업현장에서 요구하는 직무 능력을 체계화한 국가 표준입니다." },
        { text: "에너지ICT, 철도 등 핵심 산업 특화 교육" },
      ],
    },
    vocational: {
      title: "현장 밀착형 실무 교육 및 기업 협약",
      items: [
        { text: "기업 맞춤형 취업 동아리 및 현장실습 지원" },
        { text: "지역 산업체와 연계된 채용형 업무협약(MOU) 활발", tooltip: "MOU(업무협약): 기업과 학교 간 채용 연계를 약속하는 협약으로, 졸업 후 취업을 보장받을 수 있습니다." },
      ],
    },
  },
  {
    category: "취업\n성과",
    meister: {
      title: "공공기관 및 국가 핵심 산업 취업 강세",
      badge: "취업 강세",
      items: [
        { text: "한국철도공사(코레일) 등 공기업 대거 합격", highlight: true },
        { text: "신용보증기금 등 금융권 공공기관 6급 합격", highlight: true },
      ],
    },
    vocational: {
      title: "대기업 공채 및 공무원 진출 활성화",
      badge: "공무원 강세",
      items: [
        { text: "메리츠증권 등 주요 금융권 고졸 공채 실시" },
        { text: "전남 지역 작년 한 해 공직자 70명 배출", highlight: true },
      ],
    },
  },
  {
    category: "대학\n진학",
    meister: {
      title: "'선취업 후학습' 경로 특화",
      items: [
        { text: "취업 후 3년 경력 시 '재직자 특별전형' 지원", tooltip: "재직자 특별전형: 3년 이상 재직 중인 직장인이 대학에 지원할 수 있는 특별 전형으로, 경쟁률이 낮고 수능 없이 지원 가능합니다." },
        { text: "기업-학교 연계 맞춤형 학위 과정 운영" },
      ],
    },
    vocational: {
      title: "'일하며 대학가기' 유연한 경로",
      badge: "대입 유리",
      items: [
        { text: "특성화고 특별전형을 통한 전략적 대입 가능", tooltip: "특성화고 특별전형: 특성화고 졸업자를 대상으로 하는 대학 입학 전형으로, 일반 전형보다 경쟁률이 낮습니다." },
        { text: "'취업하고 대학가자' 핸드북 등 진로 정보 제공" },
      ],
    },
  },
  {
    category: "혜택",
    meister: {
      title: "전액 장학금 및 전원 기숙사 지원",
      items: [
        { text: "(학교별 상이)" },
      ],
    },
    vocational: {
      title: "입학금 및 수업료 전액 지원",
      items: [
        { text: "(학교별/지역별 상이)" },
      ],
    },
  },
]

function TooltipItem({ item }: { item: ComparisonItem }) {
  const [showMobileTooltip, setShowMobileTooltip] = useState(false)

  if (item.tooltip) {
    return (
      <>
        {/* Desktop tooltip */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <li className="hidden md:flex items-start gap-2 text-muted-foreground leading-relaxed cursor-help group">
                <span className={item.highlight ? "text-foreground font-medium" : ""}>
                  · {item.text}
                </span>
                <Info className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-1 group-hover:text-primary transition-colors" />
              </li>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-xs text-sm">
              {item.tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Mobile tooltip */}
        <li 
          className="md:hidden flex items-start gap-2 text-muted-foreground leading-relaxed cursor-pointer"
          onClick={() => setShowMobileTooltip(!showMobileTooltip)}
        >
          <span className={item.highlight ? "text-foreground font-medium" : ""}>
            · {item.text}
          </span>
          <Info className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-1" />
        </li>
        {showMobileTooltip && (
          <div className="md:hidden bg-accent text-accent-foreground text-xs p-3 rounded-xl mt-1 mb-2 relative">
            <button 
              onClick={() => setShowMobileTooltip(false)}
              className="absolute top-2 right-2 text-muted-foreground"
            >
              <X className="w-3 h-3" />
            </button>
            {item.tooltip}
          </div>
        )}
      </>
    )
  }

  return (
    <li className="flex items-start gap-2 text-muted-foreground leading-relaxed">
      <span className={item.highlight ? "text-foreground font-medium" : ""}>
        · {item.text}
      </span>
      {item.highlight && <ExternalLink className="w-3 h-3 text-primary/40 shrink-0 mt-1.5" />}
    </li>
  )
}

export function ComparisonSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            UPGRADE
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            마이스터고 vs 특성화고 완벽 비교
          </h2>
          <p className="text-muted-foreground">
            최신 뉴스 기반 상세 정보로 한눈에 비교하세요
          </p>
        </div>
        
        <div className="bg-background rounded-3xl overflow-hidden shadow-lg border border-border">
          {/* Header */}
          <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[100px_1fr_1fr] bg-primary text-primary-foreground">
            <div className="p-4 md:p-5 font-semibold text-center text-sm md:text-base">구분</div>
            <div className="p-4 md:p-5 font-semibold text-center border-l border-primary-foreground/20 text-sm md:text-base">
              마이스터고
              <span className="block text-xs font-normal opacity-80 mt-0.5">(Meister High School)</span>
            </div>
            <div className="p-4 md:p-5 font-semibold text-center border-l border-primary-foreground/20 text-sm md:text-base">
              특성화고
              <span className="block text-xs font-normal opacity-80 mt-0.5">(Vocational High School)</span>
            </div>
          </div>
          
          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div 
              key={index}
              className={`grid grid-cols-[80px_1fr_1fr] md:grid-cols-[100px_1fr_1fr] ${index !== comparisonData.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Category */}
              <div className="p-4 md:p-5 font-semibold text-foreground text-center bg-muted/30 text-xs md:text-sm whitespace-pre-line flex items-center justify-center">
                {row.category}
              </div>
              
              {/* Meister */}
              <div className="p-4 md:p-5 border-l border-border">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
                    {row.meister.title}
                  </span>
                  {row.meister.badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-primary/10 text-primary shrink-0">
                      {row.meister.badge}
                    </span>
                  )}
                </div>
                {row.meister.items.length > 0 && (
                  <ul className="space-y-1.5 text-xs md:text-sm mt-3">
                    {row.meister.items.map((item, i) => (
                      <TooltipItem key={i} item={item} />
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Vocational */}
              <div className="p-4 md:p-5 border-l border-border">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
                    {row.vocational.title}
                  </span>
                  {row.vocational.badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-emerald-500/10 text-emerald-600 shrink-0">
                      {row.vocational.badge}
                    </span>
                  )}
                </div>
                {row.vocational.items.length > 0 && (
                  <ul className="space-y-1.5 text-xs md:text-sm mt-3">
                    {row.vocational.items.map((item, i) => (
                      <TooltipItem key={i} item={item} />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Source Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            출처: 2025-2026 최신 교육 뉴스 및 교육부 자료
          </p>
        </div>
      </div>
    </section>
  )
}
