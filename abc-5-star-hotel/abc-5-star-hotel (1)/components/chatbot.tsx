"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9998] h-[600px] w-[400px] max-h-[calc(100vh-140px)] max-w-[calc(100vw-48px)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/15/03/20251015031024-29IO3BHM.json"
            className="h-full w-full rounded-xl border-none shadow-2xl"
            title="Chat Support"
          />
        </div>
      )}
    </>
  )
}
