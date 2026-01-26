import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 px-4 text-primary-foreground bg-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/pada-labs-logo.png"
            alt="PADA Labs - Path · Analysis · Data · AI"
            width={200}
            height={60}
            className="h-auto font-semibold"
          />
        </div>
        
        {/* Description */}
        <p className="mb-8 max-w-md mx-auto text-secondary-foreground">
          진로 데이터를 분석하는 AI 기업, 파다랩스
        </p>
        
        {/* Divider */}
        <div className="w-16 h-px bg-primary-foreground/20 mx-auto mb-8" />
        
        {/* Copyright */}
        <p className="text-slate-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} PADA Labs. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
