import Link from "next/link"


import { buttonVariants } from "@/components/ui/button"
import { XMarkIcon } from '@heroicons/react/20/solid'

export const metadata = {
  title: "Couriers",
}

const stats = [


  { id: 1, name: 'Green E-Bikes', value: 'USP' },
  { id: 2, name: 'Save Trees', value: 'USP' },
  { id: 3, name: 'Looks Cool', value: 'USP' },
]
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
  // More questions...
]
export default function Page() {


  return (

    <div className="bg-white">
      <div className="relative bg-forest-700">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">


              <h1 className="mt-24 text-4xl font-bold tracking-tight text-sky-100 sm:mt-10 sm:text-6xl">
                Boost your delivery.
                <br />
                Start using our app today.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                What we offer: Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/application"
                  className={buttonVariants({ variant: "primary", size: "xl" })}
                >
                  Get Started
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
      <div className="bg-autumn-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">

            <dl className="mt-16 grid grid-cols-1 gap-20 overflow-hidden rounded text-center sm:grid-cols-1 lg:grid-cols-3 drop-shadow-2xl">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-forest-500 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-100">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
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
        {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}



        <div className="fixed inset-x-0 bottom-0">
          <div className="flex flex-1 gap-x-6 bg-forest-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-1 justify-end gap-40">
              <Link
                href="/application"
                className={buttonVariants({ variant: "primary", size: "xl" })}
              >
                Get Started
              </Link>
              <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

      </>
    </div>
  )
}
