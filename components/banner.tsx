"use client"


import { useEffect, useState } from "react"
import Link from "next/link"
import { XMarkIcon } from "@heroicons/react/20/solid"

import { buttonVariants } from "@/components/ui/button"

const ScrollBanner = () => {
  const [showBanner, setShowBanner] = useState(true)

  const dismissBanner = () => {
    setShowBanner(false)
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50 // Adjust this value as per your requirement
      const shouldShowBanner = window.scrollY > scrollThreshold
      setShowBanner(shouldShowBanner)
    }


    window.addEventListener("scroll", handleScroll)
    return () => {

      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {

    if (!showBanner) {
      sessionStorage.setItem("bannerDismissed", "true")
    }
  }, [showBanner])

  useEffect(() => {
    const isBannerDismissed = sessionStorage.getItem("bannerDismissed")
    if (isBannerDismissed === "true") {
      setShowBanner(false)
    }
  }, [])

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0">
          <div className="flex flex-1 gap-x-6 bg-forest-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-1 justify-end gap-40 drop-shadow-lg">
              <Link
                href="/application"
                className={buttonVariants({ variant: "primary", size: "xl" })}
              >
                Sign Up
              </Link>
              <button
                type="button"
                className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                onClick={dismissBanner}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default ScrollBanner
