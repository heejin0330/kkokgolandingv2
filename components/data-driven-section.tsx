import { TrendingUp, BookOpen, Handshake } from "lucide-react"

const dataPoints = [
  {
    icon: TrendingUp,
    title: "대기업/공기업 합격으로 증명된 결과",
    stats: "159.8%",
    statsLabel: "마이스터고 경쟁률",
    description: "서울 마이스터고는 3년 연속 충원율 100%를 달성하고, 한국철도고등학교는 코레일 고졸 공채에서 단일 학교 최다 16명 합격이라는 놀라운 성과를 기록했습니다.",
    highlights: ["코레일 16명 합격", "신용보증기금 6급 합격", "메리츠증권 고졸 공채"],
  },
  {
    icon: BookOpen,
    title: "경력 같은 신입을 만드는 실무 교육",
    stats: "138.5%",
    statsLabel: "디자인/IT 분야 지원율",
    description: "NCS 기반 맞춤형 교육으로 산업 현장에 즉시 투입 가능한 실무 역량을 키웁니다. 문화, 예술, 디자인, 방송 분야의 높은 인기가 이를 증명합니다.",
    highlights: ["NCS 기반 직무교육", "현장 밀착형 실습", "공사취업반 운영"],
  },
  {
    icon: Handshake,
    title: "기업 협약으로 열리는 취업의 문",
    stats: "70명",
    statsLabel: "전남 특성화고 공직자 배출",
    description: "한전KDN, 대한전문건설협회 등 기업·기관과의 MOU를 통해 인턴 채용 및 졸업생 취업 연계를 강화하고 있습니다.",
    highlights: ["한전KDN 인턴 채용", "건설협회 취업 연계", "지자체 맞춤형 지원"],
  },
]

export function DataDrivenSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>데이터로 보는 직업계고</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            지금, 학부모님들이
            <br className="md:hidden" />
            <span className="text-primary"> 직업계고에 주목</span>하는 3가지 이유
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            취업 시장이 얼어붙은 상황에서도 직업계고는 독보적인 성과를 기록하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Stats */}
              <div className="mb-4">
                <div className="text-4xl font-bold text-primary mb-1">{point.stats}</div>
                <div className="text-sm text-muted-foreground">{point.statsLabel}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {point.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {point.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="text-center text-xs text-muted-foreground mt-10">
          출처: 2025-2026 최신 뉴스 및 교육부 자료
        </p>
      </div>
    </section>
  )
}
