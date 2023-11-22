"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

function ScrollableSections() {
  const scrollableContainerRef = useRef(null)
  const [currentSection, setCurrentSection] = useState(1)
  const [isSticky, setIsSticky] = useState(false) // Initialize as false
  const [isScrollStarted, setIsScrollStarted] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset
    const windowHeight = window.innerHeight
    const sectionHeight = windowHeight
    const containerTopOffset = scrollableContainerRef.current.offsetTop
    const containerBottomOffset = containerTopOffset + sectionHeight

    let newCurrentSection

    if (
      scrollY >= containerTopOffset &&
      scrollY <= containerBottomOffset - windowHeight
    ) {
      newCurrentSection = 1
    } else {
      newCurrentSection = Math.max(
        1,
        Math.ceil(
          (scrollY - containerBottomOffset + windowHeight) / sectionHeight
        )
      )
    }

    setCurrentSection(newCurrentSection)

    if (!isScrollStarted && scrollY >= containerTopOffset) {
      setIsScrollStarted(true)
    }

    if (newCurrentSection >= 4) {
      setIsSticky(false)
    } else {
      setIsSticky(true)
    }
  }

  useEffect(() => {
    const container = scrollableContainerRef.current

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="sticky inset-x-0 top-0 overflow-hidden">
      <div className="relative mx-auto mb-14 max-w-full bg-white   px-6 lg:mt-24 lg:px-28">
        <div
          className={`relative h-[67vh] ${isSticky ? "sticky top-0" : ""}`}
          ref={scrollableContainerRef}
        >
          <div
            className={`absolute left-0 top-0 flex h-full w-full overflow-hidden transition-opacity duration-500 ${
              currentSection === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="grid grid-cols-12">
              <div className="xs:pt-32 pt-14 lg:col-span-5">
                <img
                  src="/Images/MikeyBike.png"
                  alt="manOnBike"
                  className="h-[520px] w-[500px]"
                />
              </div>
              <div className="lg:left-1/2 lg:col-span-7">
                <div className="flex pb-24 pt-14 lg:left-1/2 lg:order-2 lg:col-span-7 lg:px-0 xl:col-span-6">
                  <div className="mx-auto max-w-full items-center justify-center pl-16 lg:ml-6">
                    <h1 className="justify-center text-5xl font-bold leading-[3.5rem] tracking-tight text-wood-900">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="one"
                        className="h-[52px] w-[52px]"
                      />
                      <Link
                        href="/application"
                        className={buttonVariants({
                          variant: "primary",
                          size: "xl",
                          className: "border-b-4 text-lg w-48 h-[60px] px-4",
                        })}
                      >
                        Go Online
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second section */}
          <div
            className={`absolute left-0 top-0 flex h-full w-full overflow-hidden transition-opacity duration-500 ${
              currentSection === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="grid grid-cols-12">
              <div className="xs:pt-32 pt-14 lg:col-span-5">
                <img
                  src="/Images/PhoneSlide1.png"
                  alt="manOnBike"
                  className="h-[534px] w-[450px]"
                />
              </div>
              <div className="lg:left-1/2 lg:col-span-7">
                <div className="flex pb-24 pt-14 lg:left-1/2 lg:order-2 lg:col-span-7 lg:px-0 xl:col-span-6">
                  <div className="mx-auto max-w-full items-center justify-center pl-16 lg:ml-6">
                    <h1 className="justify-center text-5xl font-bold leading-[3.5rem] tracking-tight text-wood-900">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="one"
                        className="h-[52px] w-[52px]"
                      />
                      <Link
                        href="/application"
                        className={buttonVariants({
                          variant: "primary",
                          size: "xl",
                          className: "border-b-4 text-lg w-48 h-[60px] px-4",
                        })}
                      >
                        Go Online
                      </Link>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Two.png"
                        alt="two"
                        className="h-[52px] w-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Start the order (booking).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third section */}
          <div
            className={`absolute left-0 top-0 flex h-full w-full overflow-hidden transition-opacity duration-500 ${
              currentSection === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="grid grid-cols-12">
              <div className="xs:pt-32 pt-14 lg:col-span-5">
                <img
                  src="/Images/PhoneSlide2.png"
                  alt="manOnBike"
                  className="h-[534px] w-[450px]"
                />
              </div>
              <div className="lg:left-1/2 lg:col-span-7">
                <div className="flex pb-24 pt-14 lg:left-1/2 lg:order-2 lg:col-span-7 lg:px-0 xl:col-span-6">
                  <div className="mx-auto max-w-full items-center justify-center pl-16 lg:ml-6">
                    <h1 className="justify-center text-5xl font-bold leading-[3.5rem] tracking-tight text-wood-900">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="manOnBike"
                        className="h-[52px] w-[52px]"
                      />
                      <Link
                        href="/application"
                        className={buttonVariants({
                          variant: "primary",
                          size: "xl",
                          className: "border-b-4 text-lg w-48 h-[60px] px-4",
                        })}
                      >
                        Go Online
                      </Link>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Two.png"
                        alt="two"
                        className="h-[52px] w-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Start the order (booking).
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Three.png"
                        alt="three"
                        className="h-[52px] w-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Navigate to &quot;Pick up point&quot; and pick up parcel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* Fourth section */}
          <div
            className={`absolute left-0 top-0 flex h-full w-full transition-opacity duration-500  ${
              currentSection === 5 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="grid grid-cols-12">
              <div className="xs:pt-32 pt-14 lg:col-span-5">
                <img
                  src="/Images/PhoneSlide3.png"
                  alt="manOnBike"
                  className="h-[524px] w-[650px]"
                />
              </div>
              <div className="lg:left-1/2 lg:col-span-7">
                <div className="flex pb-24 pt-14 lg:left-1/2 lg:order-2 lg:col-span-7 lg:px-0 xl:col-span-6">
                  <div className="mx-auto max-w-full items-center justify-center pl-16 lg:ml-6">
                    <h1 className="justify-center text-5xl font-bold leading-[3.5rem] tracking-tight text-wood-900">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="manOnBike"
                        className="h-[52px] w-[52px]"
                      />
                      <Link
                        href="/application"
                        className={buttonVariants({
                          variant: "primary",
                          size: "xl",
                          className: "border-b-4 text-lg w-48 h-[60px] px-4",
                        })}
                      >
                        Go Online
                      </Link>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Two.png"
                        alt="two"
                        className="h-[52px] w-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Start the order (booking).
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Three.png"
                        alt="three"
                        className="h-[52px] w-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Navigate to &quot;Pick up point&quot; and pick up parcel.
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Four.png"
                        alt="four"
                        className="h-[52px] w-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Navigate to &quot;Drop off point&quot; and complete the delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollableSections
