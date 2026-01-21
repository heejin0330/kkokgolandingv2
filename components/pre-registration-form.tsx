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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    interest: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

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
                className="h-14 rounded-2xl px-5 text-base"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
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
