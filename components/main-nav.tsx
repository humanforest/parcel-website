"use client"

import * as React from "react"
import { Fragment } from "react"
import Link from "next/link"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <Disclosure as="nav" className="bg-forest-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex text-xl justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="inline-block font-bold text-forest-100">
                      Forest
                      <span className="text-forest-200">Parcel</span>
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex  sm:space-x-8 ">
                  {items?.length ? (
                    <nav className="flex">
                      {items?.map(
                        (item, index) =>
                          item.href && (
                            <Link
                              key={index}
                              href={item.href}
                              className={buttonVariants({
                                className:
                                  "text-forest-100 hover:text-forest-200 bg-forest-800 border-0 hover:bg-forest-800",

                                size: "xl",
                              })}
                            >
                              {item.title}
                            </Link>
                          )
                      )}
                    </nav>
                  ) : null}
                </div>
              </div>
              <div className="hidden lg:flex space-x-4">
                <Link
                  href="/application"
                  className={buttonVariants({ variant: "primary", size: "xl" })}
                >
                  Sign In
                </Link>
                <Link
                  href="/application"
                  className={buttonVariants({
                    size: "xl",
                    className:
                      "border-b-4 bg-wood-50 text-wood-900 hover:bg-sky-100",
                  })}
                >
                  Start Your Delivery
                </Link>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/couriers"
                className="block border-l-4 border-forest-500 bg-forest-50 py-2 pl-3 pr-4 text-base font-medium text-forest-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/application"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-wood-500 hover:border-forest-300 hover:bg-forest-50 hover:text-wood-700"
              >
                Become a Courier
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-wood-500 hover:border-forest-300 hover:bg-forest-50 hover:text-wood-700"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-wood-500 hover:border-forest-300 hover:bg-forest-50 hover:text-wood-700"
              >
                Help
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
