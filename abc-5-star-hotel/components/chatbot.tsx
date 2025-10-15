"use client"

import { useEffect } from "react"

export function ChatBot() {
  useEffect(() => {
    const container = document.createElement("div")
    container.id = "botpress-webchat-container"
    container.style.position = "fixed"
    container.style.bottom = "20px"
    container.style.right = "20px"
    container.style.zIndex = "9999"
    container.style.width = "400px"
    container.style.height = "600px"
    container.style.maxWidth = "calc(100vw - 40px)"
    container.style.maxHeight = "calc(100vh - 40px)"

    const iframe = document.createElement("iframe")
    iframe.src =
      "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/15/03/20251015031024-29IO3BHM.json"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.border = "none"
    iframe.style.borderRadius = "12px"
    iframe.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.15)"

    container.appendChild(iframe)
    document.body.appendChild(container)

    return () => {
      // Cleanup on unmount
      if (container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }
  }, [])

  return null
}
