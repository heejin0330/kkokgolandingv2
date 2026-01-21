import { School, ClipboardCheck, TrendingUp } from "lucide-react"

const solutions = [
  {
    icon: School,
    title: "맞춤형 학교 큐레이션",
    description: "전국 마이스터고/특성화고 최신 데이터를 분석해 최적의 리스트 제공.",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "실전형 적성 소양검사",
    description: "학교별 인적성 검사 유형을 미리 체험하고 완벽 보완.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "졸업 후 로드맵",
    description: "취업 성공 사례부터 특성화고 특별전형 대입 전략까지 확인.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm mb-4 block">SOLUTIONS</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            꼭고가 드리는 3가지 약속
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className={`w-20 h-20 ${solution.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <solution.icon className={`w-10 h-10 ${solution.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
