import { BookOpen, Calendar, Route } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    text: "마이스터고 vs 특성화고 차이점 총정리",
  },
  {
    icon: Calendar,
    text: "2026학년도 최신 입시 스케줄",
  },
  {
    icon: Route,
    text: "졸업 후 취업 및 대입 로드맵 시나리오",
  },
]

export function GuidebookSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              FREE REPORT
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              2026 직업계고 입시,
              <br />
              무엇이 달라질까요?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              마이스터고와 특성화고 사이에서 고민하는 부모님들을 위해 꼭고(kkokgo)가 
              전국 학교 데이터를 완벽 분석한 <span className="font-semibold text-foreground">&apos;2026 직업계고 완벽 분석 리포트&apos;</span>를 준비했습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-background p-5 rounded-2xl"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
