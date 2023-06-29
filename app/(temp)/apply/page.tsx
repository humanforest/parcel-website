import Image from "next/image"
import Link from "next/link"
import {
  ArrowPathIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid"

import { buttonVariants } from "@/components/ui/button"

const hero = {
  heading: "Earn at least £5.75 per delivery",
  description:
    "Deliver parcels with HumanForest and get paid £5.75 per delivery + £1.70 per km while using a HumanForest eBike or eMoped.",
}

const signup = {
  requirements: [
    "+18 years old",
    "HumanForest user account. Download here.",
    "Smartphone",
    "UK bank account",
  ],
  documents: [
    "ID",
    "Proof of address (i.e. Driving licence, bank statement, utility bill)",
    "Right to work in the UK (Passport/Visa/birth certificate)",
  ],
  emoped: ["Driving licence", "CBT certificate", "Personal SD&P"],
}

const primaryFeatures = [
  {
    name: "Use the app to collect the parcel from the customer",
    description: "The app will guide you to the customer's location.",
    image: "/images/step1.png",
  },
  {
    name: "Use a HumanForest eBike or eMoped",
    description: "Use a HumanForest eBike or eMoped to deliver the parcel.",
    image: "/images/step2.png",
  },
  {
    name: "Drop the parcel at the selected destination",
    description:
      "Once you've dropped the parcel at the selected destination, you're done!",
    image: "/images/step3.png",
  },
]
const secondaryFeatures = [
  {
    name: "Competitive pay.",
    description: "£5.75 per delivery + £1.70 per km (after 4km).",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Flexible hours.",
    description: "Complete jobs when it’s convenient for you.",
    icon: LockClosedIcon,
  },
  {
    name: "Easy sign up.",
    description: "We just need a few details to get you started.",
    icon: ArrowPathIcon,
  },
]
const stats = [
  { id: 1, name: "Electric Bikes", value: "3,000+" },
  { id: 2, name: "Electric Mopeds", value: "200+" },
  { id: 3, name: "Discount in minute bundles", value: "Up to 50%" },
]
const footerNavigation = {
  main: [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
}

export default function Example() {
  return (
    <div className="bg-forest-800">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>

          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <svg
                width="180"
                height="32"
                viewBox="0 0 180 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M29.4817 8.62407L19.4817 3.12407C19.334 3.04284 19.1682 3.00024 18.9997 3.00024C18.8312 3.00024 18.6654 3.04284 18.5177 3.12407L8.51769 8.62407C8.3609 8.7104 8.23016 8.83722 8.1391 8.99131C8.04804 9.14539 8 9.32109 8 9.50007C8 9.67905 8.04804 9.85475 8.1391 10.0088C8.23016 10.1629 8.3609 10.2897 8.51769 10.3761L17.9997 15.5911V26.3101L14.9637 24.6401L13.9997 26.3911L18.5177 28.8761C18.6653 28.9575 18.8311 29.0002 18.9997 29.0002C19.1683 29.0002 19.3341 28.9575 19.4817 28.8761L29.4817 23.3761C29.6385 23.2898 29.7693 23.163 29.8605 23.0089C29.9516 22.8548 29.9997 22.6791 29.9997 22.5001V9.50007C29.9997 9.32106 29.9516 9.14534 29.8605 8.99125C29.7693 8.83716 29.6385 8.71036 29.4817 8.62407ZM18.9997 5.14207L26.9247 9.50007L18.9997 13.8581L11.0747 9.50007L18.9997 5.14207ZM27.9997 21.9091L19.9997 26.3091V15.5901L27.9997 11.1901V21.9091Z" />
                <path d="M10 16H2V14H10V16ZM12 24H4V22H12V24ZM14 20H6V18H14V20Z" />
                <path d="M37.85 7.5H49.15V11H41.35V14.5H49.15V18H41.35V25H37.85V7.5ZM50.5422 18.75C50.5422 17.4667 50.8339 16.3333 51.4172 15.35C52.0005 14.35 52.8005 13.575 53.8172 13.025C54.8505 12.475 56.0005 12.2 57.2672 12.2C58.5339 12.2 59.6755 12.475 60.6922 13.025C61.7255 13.575 62.5339 14.35 63.1172 15.35C63.7005 16.3333 63.9922 17.4667 63.9922 18.75C63.9922 20.0333 63.7005 21.175 63.1172 22.175C62.5339 23.1583 61.7255 23.925 60.6922 24.475C59.6755 25.025 58.5339 25.3 57.2672 25.3C56.0005 25.3 54.8505 25.025 53.8172 24.475C52.8005 23.925 52.0005 23.1583 51.4172 22.175C50.8339 21.175 50.5422 20.0333 50.5422 18.75ZM60.5922 18.75C60.5922 17.7667 60.2755 16.9667 59.6422 16.35C59.0089 15.7333 58.2172 15.425 57.2672 15.425C56.3172 15.425 55.5255 15.7333 54.8922 16.35C54.2589 16.9667 53.9422 17.7667 53.9422 18.75C53.9422 19.7333 54.2589 20.5333 54.8922 21.15C55.5255 21.7667 56.3172 22.075 57.2672 22.075C58.2172 22.075 59.0089 21.7667 59.6422 21.15C60.2755 20.5333 60.5922 19.7333 60.5922 18.75ZM69.2871 14.55C70.0204 12.9833 71.2038 12.2 72.8371 12.2C73.1871 12.2 73.5954 12.2583 74.0621 12.375V15.925C73.6621 15.7917 73.1621 15.725 72.5621 15.725C71.4788 15.725 70.6788 16.025 70.1621 16.625C69.6621 17.225 69.4121 18.1333 69.4121 19.35V25H66.1121V12.5H69.2871V14.55ZM74.5168 18.75C74.5168 17.5167 74.7751 16.4083 75.2918 15.425C75.8251 14.425 76.5751 13.6417 77.5418 13.075C78.5085 12.4917 79.6335 12.2 80.9168 12.2C82.1835 12.2 83.2751 12.475 84.1918 13.025C85.1251 13.575 85.8418 14.35 86.3418 15.35C86.8418 16.35 87.0918 17.5167 87.0918 18.85V19.75H77.8918L77.9168 19.8C78.1001 20.5833 78.5085 21.1833 79.1418 21.6C79.7751 22 80.4835 22.2 81.2668 22.2C82.6501 22.2 83.8335 21.775 84.8168 20.925L86.1918 23.65C84.8585 24.75 83.2001 25.3 81.2168 25.3C79.8501 25.3 78.6585 25.0167 77.6418 24.45C76.6251 23.8833 75.8501 23.1083 75.3168 22.125C74.7835 21.125 74.5168 20 74.5168 18.75ZM83.4918 17.35C83.4085 16.65 83.1335 16.0833 82.6668 15.65C82.2168 15.2167 81.6001 15 80.8168 15C80.0335 15 79.3835 15.2 78.8668 15.6C78.3668 16 78.0335 16.5833 77.8668 17.35H83.4918ZM88.9078 16.175C88.9078 14.9083 89.3745 13.9333 90.3078 13.25C91.2411 12.55 92.5328 12.2 94.1828 12.2C96.3161 12.2 97.9745 12.8167 99.1578 14.05L97.3078 16.45C96.9411 16.05 96.4495 15.7417 95.8328 15.525C95.2161 15.2917 94.5745 15.175 93.9078 15.175C93.4078 15.175 93.0161 15.25 92.7328 15.4C92.4661 15.55 92.3328 15.7667 92.3328 16.05C92.3328 16.25 92.4078 16.4083 92.5578 16.525C92.7245 16.6417 92.9828 16.75 93.3328 16.85C93.6828 16.9333 94.3161 17.0833 95.2328 17.3C96.5495 17.6 97.5411 18.0417 98.2078 18.625C98.8911 19.1917 99.2328 20.0583 99.2328 21.225C99.2328 22.575 98.7661 23.5917 97.8328 24.275C96.9161 24.9583 95.5828 25.3 93.8328 25.3C92.5828 25.3 91.4745 25.125 90.5078 24.775C89.5578 24.4083 88.8161 23.8917 88.2828 23.225L90.2078 20.725C90.6411 21.225 91.1911 21.625 91.8578 21.925C92.5245 22.2083 93.2995 22.35 94.1828 22.35C94.6828 22.35 95.0828 22.275 95.3828 22.125C95.6828 21.975 95.8328 21.7333 95.8328 21.4C95.8328 21.1833 95.7495 21.0167 95.5828 20.9C95.4328 20.7667 95.1828 20.65 94.8328 20.55C94.4828 20.45 93.8911 20.3083 93.0578 20.125C91.8245 19.8583 90.8245 19.4333 90.0578 18.85C89.2911 18.2667 88.9078 17.375 88.9078 16.175ZM108.646 24.75C107.613 25 106.713 25.125 105.946 25.125C104.746 25.125 103.83 24.8167 103.196 24.2C102.58 23.5667 102.271 22.5583 102.271 21.175V15.275H99.9963V12.5H102.271V9.15H105.571V12.5H108.746V15.275H105.571V20.7C105.571 21.1 105.671 21.3917 105.871 21.575C106.071 21.7417 106.388 21.825 106.821 21.825C107.238 21.825 107.846 21.7583 108.646 21.625V24.75ZM111.385 7.5H118.235C119.402 7.5 120.452 7.76667 121.385 8.3C122.335 8.83333 123.068 9.56667 123.585 10.5C124.118 11.4167 124.385 12.4583 124.385 13.625C124.385 14.7917 124.118 15.8417 123.585 16.775C123.068 17.6917 122.343 18.4167 121.41 18.95C120.477 19.4667 119.418 19.725 118.235 19.725H114.885V25H111.385V7.5ZM118.235 16.225C119.052 16.225 119.693 15.9833 120.16 15.5C120.643 15.0167 120.885 14.3917 120.885 13.625C120.885 12.8417 120.643 12.2083 120.16 11.725C119.693 11.2417 119.052 11 118.235 11H114.885V16.225H118.235ZM125.844 15.05C126.227 14.1333 126.894 13.4333 127.844 12.95C128.811 12.45 130.002 12.2 131.419 12.2C133.269 12.2 134.644 12.625 135.544 13.475C136.444 14.3083 136.894 15.5833 136.894 17.3V25.025H133.594V23.325C133.194 23.9417 132.661 24.425 131.994 24.775C131.327 25.125 130.577 25.3 129.744 25.3C128.511 25.3 127.494 24.9333 126.694 24.2C125.911 23.4667 125.519 22.525 125.519 21.375C125.519 20.2917 125.877 19.4 126.594 18.7C127.327 17.9833 128.302 17.5667 129.519 17.45L132.944 17.15C133.377 17.1 133.594 16.9333 133.594 16.65V16.45C133.594 16.05 133.402 15.7417 133.019 15.525C132.652 15.2917 132.119 15.175 131.419 15.175C130.619 15.175 129.944 15.3167 129.394 15.6C128.861 15.8833 128.494 16.2833 128.294 16.8L125.844 15.05ZM130.494 19.825C130.011 19.8917 129.627 20.05 129.344 20.3C129.077 20.5333 128.944 20.8333 128.944 21.2C128.944 21.6333 129.102 21.975 129.419 22.225C129.736 22.4583 130.169 22.575 130.719 22.575C131.536 22.575 132.219 22.325 132.769 21.825C133.319 21.3083 133.594 20.6833 133.594 19.95V19.45L130.494 19.825ZM142.871 14.55C143.604 12.9833 144.788 12.2 146.421 12.2C146.771 12.2 147.179 12.2583 147.646 12.375V15.925C147.246 15.7917 146.746 15.725 146.146 15.725C145.063 15.725 144.263 16.025 143.746 16.625C143.246 17.225 142.996 18.1333 142.996 19.35V25H139.696V12.5H142.871V14.55ZM148.101 18.75C148.101 17.4667 148.384 16.3333 148.951 15.35C149.517 14.35 150.301 13.575 151.301 13.025C152.317 12.475 153.476 12.2 154.776 12.2C155.726 12.2 156.601 12.3583 157.401 12.675C158.217 12.975 158.926 13.425 159.526 14.025L157.651 16.675C156.817 15.8417 155.859 15.425 154.776 15.425C153.809 15.425 153.017 15.7333 152.401 16.35C151.801 16.9667 151.501 17.7667 151.501 18.75C151.501 19.7167 151.801 20.5167 152.401 21.15C153.017 21.7667 153.809 22.075 154.776 22.075C155.859 22.075 156.842 21.65 157.726 20.8L159.551 23.45C158.951 24.05 158.234 24.5083 157.401 24.825C156.584 25.1417 155.692 25.3 154.726 25.3C153.426 25.3 152.276 25.025 151.276 24.475C150.276 23.925 149.492 23.1583 148.926 22.175C148.376 21.175 148.101 20.0333 148.101 18.75ZM160.332 18.75C160.332 17.5167 160.591 16.4083 161.107 15.425C161.641 14.425 162.391 13.6417 163.357 13.075C164.324 12.4917 165.449 12.2 166.732 12.2C167.999 12.2 169.091 12.475 170.007 13.025C170.941 13.575 171.657 14.35 172.157 15.35C172.657 16.35 172.907 17.5167 172.907 18.85V19.75H163.707L163.732 19.8C163.916 20.5833 164.324 21.1833 164.957 21.6C165.591 22 166.299 22.2 167.082 22.2C168.466 22.2 169.649 21.775 170.632 20.925L172.007 23.65C170.674 24.75 169.016 25.3 167.032 25.3C165.666 25.3 164.474 25.0167 163.457 24.45C162.441 23.8833 161.666 23.1083 161.132 22.125C160.599 21.125 160.332 20 160.332 18.75ZM169.307 17.35C169.224 16.65 168.949 16.0833 168.482 15.65C168.032 15.2167 167.416 15 166.632 15C165.849 15 165.199 15.2 164.682 15.6C164.182 16 163.849 16.5833 163.682 17.35H169.307ZM178.348 25H175.023V7.5H178.348V25Z" />
              </svg>
              <h1 className="outline-title mt-10 p-2 text-5xl font-bold text-white sm:text-7xl">
                {hero.heading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-wood-50">
                {hero.description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/application-form"
                  className={buttonVariants({ size: "2xl" })}
                >
                  Apply now
                </Link>
              </div>
            </div>
            <div className="mx-auto -mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-16">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="/images/herodom.png"
                  alt="App screenshot"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        {/*<div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">*/}
        {/*  <h2 className="text-center text-lg font-semibold leading-8 text-white">*/}
        {/*    The world’s most innovative companies use our app*/}
        {/*  </h2>*/}
        {/*  <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">*/}
        {/*    <img*/}
        {/*      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
        {/*      src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"*/}
        {/*      alt="Transistor"*/}
        {/*      width={158}*/}
        {/*      height={48}*/}
        {/*    />*/}
        {/*    <img*/}
        {/*      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
        {/*      src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"*/}
        {/*      alt="Reform"*/}
        {/*      width={158}*/}
        {/*      height={48}*/}
        {/*    />*/}
        {/*    <img*/}
        {/*      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
        {/*      src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"*/}
        {/*      alt="Tuple"*/}
        {/*      width={158}*/}
        {/*      height={48}*/}
        {/*    />*/}
        {/*    <img*/}
        {/*      className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"*/}
        {/*      src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"*/}
        {/*      alt="SavvyCal"*/}
        {/*      width={158}*/}
        {/*      height={48}*/}
        {/*    />*/}
        {/*    <img*/}
        {/*      className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"*/}
        {/*      src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"*/}
        {/*      alt="Statamic"*/}
        {/*      width={158}*/}
        {/*      height={48}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* Feature section */}
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to deliver parcels
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start delivering parcels in minutes. Our app is easy to use and
              has everything you need to get started.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-xl font-bold leading-7 text-white">
                    <div className="mb-6 flex  items-center justify-center rounded-lg">
                      <Image
                        src={feature.image}
                        width={240}
                        height={240}
                        alt={""}
                        unoptimized={true}
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-lg leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-forest-300">
                Everything you wanted
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join Our Delivery Team Today
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join us today and start enjoying the perks of being a valued
                member of our delivery network.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div className="rounded-2xl border-2 border-forest-900 bg-white p-4 md:p-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mb-4 mt-2 text-gray-800 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <Link
                    href="/application-form"
                    className={buttonVariants({ size: "xl" })}
                  >
                    Apply now
                  </Link>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-forest-300">
              Move smarter
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              No bike? No problem.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The best way to move around the city. Our whole fleet is electric
              and we are committed to reducing emissions in our cities.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="text-sm leading-6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Requirements section */}
        <div className="relative isolate z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 border-2 border-forest-900 bg-white px-6 py-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:h-auto lg:max-w-sm"
                src="/images/hero.jpg"
                alt=""
                width={400}
                height={600}
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
                  What do I need to sign up?
                </h2>
                <p className="mt-6 text-lg leading-8 text-wood-700">
                  Be sure to have the following information ready:
                </p>
                <div className="mt-10 flex flex-col">
                  <p className="text-lg font-bold">Requirements</p>
                  <ul
                    role="list"
                    className="mt-4 flex flex-col gap-x-8 gap-y-3 text-base leading-7 text-wood-900 sm:grid-cols-2"
                  >
                    {signup.requirements.map((item) => (
                      <li key={item} className="flex gap-x-3">
                        <CheckCircleIcon
                          className="h-7 w-5 flex-none"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex flex-col">
                  <p className="text-lg font-bold">Documents</p>
                  <ul
                    role="list"
                    className="mt-4 flex flex-col gap-x-8 gap-y-3 text-base leading-7 text-wood-900 sm:grid-cols-2"
                  >
                    {signup.documents.map((item) => (
                      <li key={item} className="flex gap-x-3">
                        <CheckCircleIcon
                          className="h-7 w-5 flex-none"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex flex-col">
                  <p className="text-lg font-bold">eMoped drivers also need</p>
                  <ul
                    role="list"
                    className="mt-4 flex flex-col gap-x-8 gap-y-3 text-base leading-7 text-wood-900 sm:grid-cols-2"
                  >
                    {signup.emoped.map((item) => (
                      <li key={item} className="flex gap-x-3">
                        <CheckCircleIcon
                          className="h-7 w-5 flex-none"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex">
                  <Link
                    href="/application-form"
                    className={buttonVariants({ size: "2xl" })}
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate mt-32 px-6 py-12 sm:mt-56 sm:py-24 lg:px-8">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
            />
          </svg>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your delivery service.
              <br />
              Start using ForestParcel today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Get started with a free account. Sign up now and start delivering
              parcels in no time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/application-form"
                className={buttonVariants({ size: "2xl" })}
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-wood-100 hover:text-wood-50"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-wood-100">
          &copy; 2023 Human Forest Limited. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
