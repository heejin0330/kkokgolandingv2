export const GA_MEASUREMENT_ID = 'G-LRMGG69CXY'

// 페이지뷰 추적
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// 이벤트 추적
type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// 사전예약 전환 이벤트
export const trackPreRegistration = (data: {
  grade: string
  interest: string
  major: string
}) => {
  event({
    action: 'pre_registration_submit',
    category: 'conversion',
    label: `${data.interest} - ${data.major} - ${data.grade}`,
  })
}

// CTA 버튼 클릭 이벤트
export const trackCTAClick = (buttonName: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: buttonName,
  })
}

// 섹션 조회 이벤트
export const trackSectionView = (sectionName: string) => {
  event({
    action: 'section_view',
    category: 'engagement',
    label: sectionName,
  })
}

// Window 타입 확장
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
  }
}
