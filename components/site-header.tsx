"use client"

import React, { useEffect, useState } from "react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const [activeNavItem, setActiveNavItem] = useState("")

  // This effect will run when the pathname changes
  useEffect(() => {
    const currentPathname = window.location.pathname

    // Find the matching navigation item based on the current pathname
    const activeItemIndex = siteConfig.mainNav.findIndex(
      (item) => item.href === currentPathname
    )

    if (activeItemIndex !== -1) {
      setActiveNavItem(activeItemIndex)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full bg-forest-800">
      <div className="">
        <MainNav
          items={siteConfig.mainNav}
          activeItem={activeNavItem}
          onItemClick={(index) => setActiveNavItem(index)}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1"></nav>
        </div>
      </div>
    </header>
  )
}
