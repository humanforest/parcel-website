'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    // <div className="flex gap-6 md:gap-10">
    //   <Link href="/" className="flex items-center space-x-2">
    //     <Icons.logo className="h-6 w-6" />
    //     <span className="inline-block font-bold">{siteConfig.name}</span>
    //   </Link>
    //   {items?.length ? (
    //     <nav className="flex gap-6">
    //       {items?.map(
    //         (item, index) =>
    //           item.href && (
    //             <Link
    //               key={index}
    //               href={item.href}
    //               className={buttonVariants({
    //                 variant: "ghost",
    //                 rounded: "lg",
    //               })}
    //             >
    //               {item.title}
    //             </Link>
    //           )
    //       )}
    //     </nav>
    //   ) : null}
    // </div>
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">

                  <Link href="/" className="flex items-center space-x-2">
                    <Icons.logo className="h-6 w-6" />
                    <span className="inline-block font-bold">{siteConfig.name}</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {items?.length ? (
                    <nav className="flex gap-6">
                      {items?.map(
                        (item, index) =>
                          item.href && (
                            <Link
                              key={index}
                              href={item.href}
                              className={buttonVariants({
                                variant: "ghost",
                                rounded: "lg",
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

          <Disclosure.Panel className="sm:hidden fixed bg-white w-screen">
            <div className="pt-2 pb-3 space-y-1">
              {items?.length ? (
                <nav>
                  {items?.map((item, index) =>
                    item.href ? (
                      <Link key={index} href={item.href} passHref>
                        <p className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                          {item.title}
                        </p>
                      </Link>
                    ) : null
                  )}
                </nav>
              ) : null}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}
