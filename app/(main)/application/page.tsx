import { Input } from "@/components/ui/input"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"


const stats = [


  { id: 1, name: 'Download the app', value: 'Step One' },
  { id: 2, name: 'Login', value: 'Step Two' },
  { id: 3, name: 'Start Earning!', value: 'Step Three' },

]


export const metadata = {
  title: "Apply now",
}

export default function Page() {
  return (<div>
    <div className="bg-forest-800">

      <div className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-center text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Apply to get started
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <Card className="p-4 mt-4 flex-wrap">
                <form>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                      <div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-8 ">
                        <div className="col-span-2">
                          <Label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                          </Label>
                          <div className="mt-2">
                            <Input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-2">
                          <Label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                          </Label>
                          <div className="mt-2">
                            <Input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-4">
                          <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </Label>
                          <div className="mt-2">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-3">
                          <Label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Country
                          </Label>
                          <div className="mt-2">
                            <Input
                              type="text"
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"

                            />
                          </div>
                        </div>

                        <div className="col-span-4">
                          <Label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Street address
                          </Label>
                          <div className="mt-2">
                            <Input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-2 col-start-1">
                          <Label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            City
                          </Label>
                          <div className="mt-2">
                            <Input
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>



                        <div className="col-span-2">
                          <Label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            Postcode
                          </Label>
                          <div className="mt-2">
                            <Input
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                    </button>
                    <button className="drop-shadow-lg">

                      <Link
                        href="/application"
                        className={buttonVariants({ variant: "primary", size: "md" })}
                      >
                        Sign Up
                      </Link>


                    </button>
                  </div>
                </form>
              </Card>
            </div>
            <img
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>



    </div>

    <div className="bg-sky-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-autumn-900 sm:text-4xl">Whats Next?</h2>
            <p className="mt-4 text-lg leading-8 text-autumn-900">
              Follow these steps to start working!
            </p>
          </div>
          <dl className="bg-forest-700 mt-16 grid grid-cols-1 gap-8 overflow-hidden rounded-2xl text-center sm:grid-cols-1 lg:grid-cols-3 drop-shadow-lg">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>


  )
}
