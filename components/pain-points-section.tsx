import { GraduationCap, FileQuestion, University, Sparkles, Heart, TrendingUp } from "lucide-react"

// 전체 폭으로 표시될 강조 카드 (3번, 6번)
const highlightedPoints = [
  {
    icon: University,
    title: "직업계고에 가면 대학교는 영영 포기해야 하나요?",
    description: "실무 교육도 좋지만, 나중에 아이가 공부를 더 하고 싶어질 때 대학의 문이 닫혀있을까 봐 선뜻 선택하기 두렵습니다.",
  },
  {
    icon: TrendingUp,
    title: "세상이 변했다는데, 지금 트렌드는 어떤가요?",
    description: "요즘은 신입보다 경력을 선호한다는데, 고졸 공채나 기업 협약 같은 뉴스가 우리 아이에게도 해당되는 이야기일까요?",
  },
]

// 2열로 표시될 일반 카드 (1번, 2번, 4번, 5번)
const regularPoints = [
  {
    icon: GraduationCap,
    title: "대학만이 정답일까, 지금 시작하는 게 맞을까?",
    description: "취업난 소식에 대학 진학이 최선일지, 남들보다 빠른 사회 진출이 기회일지 매일 밤 고민됩니다.",
  },
  {
    icon: FileQuestion,
    title: "전형은 왜 이렇게 복잡하고 학교는 왜 이렇게 많죠?",
    description: "마이스터고, 특성화고... 이름도 낯선 수많은 학교와 전공들 중 우리 아이에게 유리한 곳을 찾기가 너무 막막합니다.",
  },
  {
    icon: Sparkles,
    title: "우리 아이가 진짜 좋아하고 잘하는 게 뭘까요?",
    description: "적성은 찾으라는데, 정작 내 아이가 어떤 분야에서 재능을 꽃피울 수 있을지 객관적으로 알 방법이 없습니다.",
  },
  {
    icon: Heart,
    title: "부모 마음은 다 똑같죠. 그저 안정적으로 컸으면...",
    description: "거창한 성공보다는 아이가 탄탄한 기술을 배워서 사회에서 흔들리지 않고 제 몫을 다하며 살길 바라는 마음뿐입니다.",
  },
]

export function PainPointsSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            이런 고민, 한 번쯤 해보셨죠?
          </h2>
        </div>
        
        {/* 전체 폭 강조 카드 (3번, 6번) */}
        <div className="space-y-6 mb-6">
          {highlightedPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              {/* 좌측 아이콘 영역 - 추후 실사 인물사진으로 교체 가능 */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <point.icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              {/* 우측 텍스트 영역 */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2열 일반 카드 (1번, 2번, 4번, 5번) */}
        <div className="grid md:grid-cols-2 gap-6">
          {regularPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
