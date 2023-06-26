"use client"

import React, { useEffect } from "react"

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const typeformStyle = {
    width: "100%",
    height: "650px",
  }

  return (
    <div
      data-tf-widget="QL1aiZ3A"
      data-tf-opacity="100"
      data-tf-iframe-props="title=Courier Onboarding"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      style={typeformStyle}
    ></div>
  )
}

export default TypeformEmbed
