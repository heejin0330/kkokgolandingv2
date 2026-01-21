"use client"

import React from "react"

import { useState } from "react"
import { Gift, Send, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { supabase } from "@/lib/supabase"

const interestAreas = [
  "IT/소프트웨어",
  "기계/자동화",
  "전기/전자",
  "디자인/미디어",
  "건축/토목",
  "바이오/화학",
  "요리/제과제빵",
  "기타",
]

const grades = [
  "초등학교 6학년",
  "중학교 1학년",
  "중학교 2학년",
  "중학교 3학년",
]

export function PreRegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    interest: "",
  })

  // 전화번호 포맷팅 (자동 하이픈 추가)
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '')
    
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
    }
  }

  // 차단할 더미/테스트 번호 목록
  const blockedNumbers = [
    '01012345678',
    '01011112222',
    '01098765432',
    '01033333333',
    '01000000000',
    '01011111111',
    '01022222222',
    '01044444444',
    '01055555555',
    '01066666666',
    '01077777777',
    '01088888888',
    '01099999999',
    '01012341234',
    '01056785678',
    '01000001111',
    '01011110000',
  ]

  // 전화번호 유효성 검사
  const validatePhone = (phone: string) => {
    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/
    const numbersOnly = phone.replace(/[^\d]/g, '')
    
    if (!phone) {
      return '연락처를 입력해 주세요.'
    }
    if (numbersOnly.length < 10 || numbersOnly.length > 11) {
      return '올바른 전화번호 형식이 아닙니다.'
    }
    if (!phoneRegex.test(phone.replace(/-/g, '').replace(/^(\d{3})(\d{3,4})(\d{4})$/, '$1-$2-$3'))) {
      return '올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)'
    }
    
    // 차단된 번호 체크
    if (blockedNumbers.includes(numbersOnly)) {
      return '유효하지 않은 전화번호입니다. 실제 연락 가능한 번호를 입력해 주세요.'
    }
    
    // 같은 숫자 4개 이상 연속 패턴 체크 (예: 1111, 2222)
    if (/(\d)\1{3,}/.test(numbersOnly.slice(3))) {
      return '유효하지 않은 전화번호입니다. 실제 연락 가능한 번호를 입력해 주세요.'
    }
    
    return null
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formatted })
    
    // 입력 중에는 에러 메시지 숨기기
    if (phoneError) {
      setPhoneError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setPhoneError(null)

    // 전화번호 유효성 검사
    const phoneValidationError = validatePhone(formData.phone)
    if (phoneValidationError) {
      setPhoneError(phoneValidationError)
      setIsLoading(false)
      return
    }

    try {
      const { error: supabaseError } = await supabase
        .from('pre_registrations')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            grade: formData.grade,
            interest: formData.interest,
          }
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('신청 중 오류가 발생했습니다. 다시 시도해 주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="pre-registration" className="py-24 px-4 bg-primary">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-[2rem] p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              사전예약이 완료되었습니다!
            </h2>
            <p className="text-muted-foreground text-lg">
              정식 오픈 시 등록하신 연락처로
              <br />
              &apos;2026 직업계고 완벽 분석 리포트&apos;를 보내드립니다.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="pre-registration" className="py-24 px-4 bg-primary">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Gift className="w-4 h-4" />
              <span>사전예약 이벤트</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              지금 사전예약하고
              <br />
              분석 리포트를 받으세요!
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              지금 사전예약 신청을 완료하신 분들께는 서비스 정식 오픈 시
              <br className="hidden md:block" />
              <span className="font-semibold text-foreground">&apos;2026 직업계고 완벽 분석 리포트&apos; PDF</span>를 
              <br className="hidden md:block" />
              등록하신 연락처로 가장 먼저 발송해 드립니다.
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                이름
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="보호자 이름을 입력해 주세요"
                className="h-14 rounded-2xl px-5 text-base"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                연락처
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="010-0000-0000"
                className={`h-14 rounded-2xl px-5 text-base ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`}
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={13}
                required
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade" className="text-foreground font-medium">
                자녀 학년
              </Label>
              <Select 
                value={formData.grade}
                onValueChange={(value) => setFormData({ ...formData, grade: value })}
                required
              >
                <SelectTrigger className="h-14 rounded-2xl px-5 text-base">
                  <SelectValue placeholder="학년을 선택해 주세요" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-foreground font-medium">
                관심 분야
              </Label>
              <Select
                value={formData.interest}
                onValueChange={(value) => setFormData({ ...formData, interest: value })}
                required
              >
                <SelectTrigger className="h-14 rounded-2xl px-5 text-base">
                  <SelectValue placeholder="관심 분야를 선택해 주세요" />
                </SelectTrigger>
                <SelectContent>
                  {interestAreas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl">
                {error}
              </div>
            )}
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-14 text-lg rounded-2xl font-semibold mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  신청 중...
                </>
              ) : (
                <>
                  사전예약 신청하기
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
