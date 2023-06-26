import Link from "next/link"
import { PlusIcon } from '@heroicons/react/20/solid'


import { buttonVariants } from "@/components/ui/button"
import ScrollBanner from '@/components/banner';
import { Scroll } from "lucide-react";

export const metadata = {
  title: "Couriers",
}

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "Can i work if i'm not a UK national?",
    answer: "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    question: "I don't know how to ride a bike, what do I do?",
    answer: "Go learn then come back."
  }

]
export default function Page() {


  return (

    <div className="bg-white">

      <div className="relative bg-forest-700">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">


              <h1 className="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">
                Boost your delivery.
                <br />
                Start using our app today.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Ride with HumanForest and deliver parcels the smart way.
              </p>
              <div className="mt-10 flex items-center gap-x-6 drop-shadow-xl">
                <Link
                  href="/application"
                  className={buttonVariants({ variant: "primary", size: "xl" })}
                >
                  Sign Up
                </Link>

              </div>



            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center items-center gap-x-16">
            <div className="flex flex-col items-center">
              <img
                className="max-h-12 w-auto object-contain"
                src="$icon-l-light-bell-on"
                alt="Transistor"
                width={158}
                height={48}
              />
              <h2 className="mt-2 text-center font-bold">Green Energy</h2>
              <p className="text-center">Every ride you do saves on CO2</p>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <img
                  className="max-h-12 w-auto object-contain"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <h2 className="mt-2 text-center font-bold">Fast Bikes</h2>
                <p className="text-center">Reach speeds of up to 25km/h</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <img
                  className="max-h-12 w-auto object-contain"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <h2 className="mt-2 text-center font-bold">Earn Rewards</h2>
                <p className="text-center">With our new TreeCoins</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ */}

      <div className="bg-autumn-100">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <>

        <ScrollBanner />

      </>
    </div>
  )
}
