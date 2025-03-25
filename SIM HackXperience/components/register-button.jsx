"use client"

import { Button } from "@/components/ui/button"

export function RegisterButton() {
  return (
    <Button
      size="lg"
      className="px-8 bg-white text-brand-red hover:bg-brand-pink/90 hover:text-brand-red font-semibold transition-colors"
      onClick={() => (window.location.href = "https://forms.office.com/r/ZTYZrKLmP3")}
    >
      Register Now
    </Button>
  )
}

