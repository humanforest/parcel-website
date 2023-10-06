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

    // Check if the scroll position is greater than or equal to the container's top offset
    // and less than the container's bottom offset
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
    <div className="sticky left-0 right-0 top-0 overflow-hidden">
      {/* Outer sticky div */}

      <div className="relative bg-white mb-14 mx-auto max-w-full   lg:mt-24 px-6 lg:px-28">
        {/* Your ScrollableSections component */}
        <div
          className={`h-[67vh] relative ${isSticky ? "sticky top-0" : ""}`}
          ref={scrollableContainerRef}
        >
          {/* First section */}
          <div
            className={`h-full flex absolute top-0 left-0 w-full transition-opacity duration-500 overflow-hidden ${
              currentSection === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className=" flex grid grid-cols-12">
              <div className="lg:col-span-5 pt-14 xs:pt-32">
                <img
                  src="/Images/MikeyBike.png"
                  alt="manOnBike"
                  className="w-[500px] h-[520px]"
                />
              </div>
              <div className="lg:col-span-7 lg:left-1/2">
                <div className="flex pb-24 pt-14 lg:col-span-7 lg:left-1/2 lg:px-0 xl:col-span-6 lg:order-2">
                  <div className="mx-auto max-w-full lg:ml-6 justify-center items-center pl-16">
                    <h1 className="text-5xl font-bold tracking-tight text-wood-900 justify-center leading-[3.5rem]">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="one"
                        className="w-[52px] h-[52px]"
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
            className={`h-full flex absolute top-0 left-0 w-full transition-opacity duration-500 overflow-hidden ${
              currentSection === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="flex grid grid-cols-12">
              <div className="lg:col-span-5 pt-14 xs:pt-32">
                <img
                  src="/Images/PhoneSlide1.png"
                  alt="manOnBike"
                  className="w-[450px] h-[534px]"
                />
              </div>
              <div className="lg:col-span-7 lg:left-1/2">
                <div className="flex pb-24 pt-14 lg:col-span-7 lg:left-1/2 lg:px-0 xl:col-span-6 lg:order-2">
                  <div className="mx-auto max-w-full lg:ml-6 justify-center items-center pl-16">
                    <h1 className="text-5xl font-bold tracking-tight text-wood-900 justify-center leading-[3.5rem]">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="one"
                        className="w-[52px] h-[52px]"
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
                        className="w-[52px] h-[52px]"
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
            className={`h-full flex absolute top-0 left-0 w-full transition-opacity duration-500 overflow-hidden ${
              currentSection === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="flex grid grid-cols-12">
              <div className="lg:col-span-5 pt-14 xs:pt-32">
                <img
                  src="/Images/PhoneSlide2.png"
                  alt="manOnBike"
                  className="w-[450px] h-[534px]"
                />
              </div>
              <div className="lg:col-span-7 lg:left-1/2">
                <div className="flex pb-24 pt-14 lg:col-span-7 lg:left-1/2 lg:px-0 xl:col-span-6 lg:order-2">
                  <div className="mx-auto max-w-full lg:ml-6 justify-center items-center pl-16">
                    <h1 className="text-5xl font-bold tracking-tight text-wood-900 justify-center leading-[3.5rem]">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="manOnBike"
                        className="w-[52px] h-[52px]"
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
                        className="w-[52px] h-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Start the order (booking).
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Three.png"
                        alt="three"
                        className="w-[52px] h-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Navigate to "Pick up point" and pick up parcel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* Fourth section */}
          <div
            className={`h-full flex absolute top-0 left-0 w-full transition-opacity duration-500  ${
              currentSection === 5 ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <div className="flex grid grid-cols-12">
              <div className="lg:col-span-5 pt-14 xs:pt-32">
                <img
                  src="/Images/PhoneSlide3.png"
                  alt="manOnBike"
                  className="w-[650px] h-[524px]"
                />
              </div>
              <div className="lg:col-span-7 lg:left-1/2">
                <div className="flex pb-24 pt-14 lg:col-span-7 lg:left-1/2 lg:px-0 xl:col-span-6 lg:order-2">
                  <div className="mx-auto max-w-full lg:ml-6 justify-center items-center pl-16">
                    <h1 className="text-5xl font-bold tracking-tight text-wood-900 justify-center leading-[3.5rem]">
                      An innovative and sustainable way to deliver packages
                      across London
                    </h1>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/One.png"
                        alt="manOnBike"
                        className="w-[52px] h-[52px]"
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
                        className="w-[52px] h-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Start the order (booking).
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Three.png"
                        alt="three"
                        className="w-[52px] h-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Navigate to "Pick up point" and pick up parcel.
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <img
                        src="/Images/Four.png"
                        alt="four"
                        className="w-[52px] h-[52px]"
                      />
                      <p className="text-lg font-bold text-wood-900">
                        Navigate to "Drop off point" and complete the delivery.
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
