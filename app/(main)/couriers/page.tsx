import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Couriers",
}

const faqs = [
  {
    id: 1,
    question: "Requirements?",
    answer: [
      " Age: +18",
      " Forest user account: Download the app for e-Bikes below.",
      {
        text: "iOS",
        link: "https://example.com/download",
      },
      {
        text: "Android",
        link: "https://example.com/download",
      },
      " Equipment: You must have your own helmet and backpack (minimum size 35cm x 26cm x 25cm).",
      " Smartphone",
      " UK bank account",
    ],
  },
  {
    id: 2,
    question: "Documents",
    answer: [
      " Proof of ID",
      " Proof of address: You can provide a driving license, bank statement, or utilities bill (please provide a unique document, different from your proof of ID).",
      " Right to work in the UK: Provide a passport, visa, or immigration status document.",
    ],
  },
]

const benefits = [
  {
    title: "Earn More",
    description: "Fast bikes that reach up to 25km/hr speed",
  },
  {
    title: "Work that suits you",
    description: "Full flexibility on working hours",
  },
  {
    title: "Paid weekly",
    description: "Recieve your earnings weekly",
  },
  {
    title: "Help the planet",
    description: "Every ride you do saves on CO2",
  },
  {
    title: "Be fully supported",
    description: "Real human support while you are working",
  },
]

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative bg-forest-800 pb-20">
        <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 sm:grid-cols-1 lg:gap-x-8 lg:px-28 lg:h-[657px] sm:h-[685px] px-6  top-24">
          {/* Images */}

          <div className="lg:absolute order-2 lg:order-1 lg:col-span-5 lg:-mr-8 lg:inset-0 lg:left-1/2 lg:mr-0 xs:pt-6 flex items-center justify-center">
            <div className="relative lg:w-[529px]  lg:h-[529px] h-[317px] w-[317px]  aspect-square rounded-full">
              <img src="/Images/Hero1Bike.png" alt="pie_chart" className="" />

              <div className="absolute w-[35%] h-[35%] top-8 -left-8 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Layer_1.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div>
                <div className="absolute w-[40%] h-[40%] -bottom-12 -right-8 z-10">
                  <div
                    className="bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url("/Images/Frame_2470.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
                <div className="absolute w-[40%] h-[40%] right-0  -bottom-8 z-9">
                  <div
                    className="bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url("/Images/Vector_140.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}

          <div className="flex sm:gap-10  order-1 lg:order-2 sm:pb-32 lg:col-span-7 lg:py-48 xl:col-span-6">
            <div className="mx-auto lg:mx-0 pt-10">
              <h1 className="lg:text-5xl text-2xl font-bold tracking-tight text-white  ">
                Deliver with Forest Parcel
              </h1>

              <p className="mt-6 text-lg text-gray-100">
                Complete Jobs when it's convenient for you
              </p>
              <div className="mt-10 mb-12 flex">
                <Link
                  href="/application"
                  className={buttonVariants({
                    variant: "primary",
                    size: "xl",
                    className:
                      "border-b-4 text-lg w-48 h-[60px] px-4 hidden lg:flex",
                  })}
                >
                  Apply Now
                </Link>
                <div className="lg:hidden xs:flex">
                  <Link
                    href="/application"
                    className={buttonVariants({
                      size: "xl",
                      className:
                        "border-b-4 bg-wood-50 text-wood-900 hover:bg-sky-100 text-lg mr-4",
                    })}
                  >
                    Apply Now
                  </Link>

                  <Link
                    href="/application"
                    className={buttonVariants({
                      variant: "primary",
                      size: "xl",
                    })}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}

      <div className="bg-white mt-20">
        <div className="mx-auto max-w-full px-6 lg:px-28">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-wood-900 justify-center">
              Join Our Delivery Team Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-wood-700">
              Join us today and start enjoying the perks of being a valued
              member of our delivery network.
            </p>
          </div>
          <div className="flex justify-center space-x-12 items-center">
            <div className="mt-16 mb-16 grid grid-cols-6 gap-10 lg:grid-cols-6 ">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center border-2 border-forest-900 border-b-4 rounded-3xl p-6 ${
                    index === 3
                      ? "col-span-3 justify-center ml-40" // Apply classes for the 4th item
                      : index === 4
                      ? "col-span-3 justify-center mr-40" // Apply classes for the 5th item
                      : "col-span-2" // Apply default classes for other items
                  }`}
                >
                  <img
                    src="/Images/Group_624720.png"
                    alt="pie_chart"
                    className="w-[74.53px] h-[80px]"
                  />
                  <h2 className="mt-2 text-center font-bold">{item.title}</h2>
                  <p className="mt-2 text-center text-wood-700 text-md">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Two */}
      <div className="relative bg-white mb-20">
        <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 mt-12 lg:mb-16 lg:mt-24 px-6 lg:gap-x-8 lg:px-28">
          {/* Image */}
          <div className="order-2 lg:col-span-5 xs:pt-32 lg:flex items-center lg:order-1">
            <img
              src="/Images/MikeyBike.png"
              alt="manOnBike"
              className="w-[600px] h-[520px]"
            />
          </div>

          {/* Text */}
          <div className="flex pb-24 pt-10 lg:col-span-7 lg:left-1/2 lg:px-0 xl:col-span-6 lg:order-2">
            <div className="mx-auto max-w-full lg:ml-6 justify-center items-center">
              <h1 className="text-5xl font-bold tracking-tight text-wood-900 justify-center leading-[3.5rem]">
                An innovative and sustainable way to deliver packages across
                London
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
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="relative bg-forest-800 ">
        <div className="text-center pt-16 px-6 lg:px-28">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-wood-0 items-center justify-center">
            Testimonials
          </h1>
        </div>
        <div className="relative flex items-center justify-center mx-auto text-center pt-14 pb-12 lg:pb-24">
          <div>
            <img
              className="w-[160px] lg:w-[320px] inline-block p-2 "
              src="/Images/Testimonial1.png"
              alt="/"
            />
            <div className="relative aspect-square inline-block p-2 ">
              <img
                className="w-[210px] h-[210px] lg:w-[432px] lg:h-[432px] inline-block p-2"
                src="/Images/Testimonial2.png"
                alt="/"
              />
              <div className="absolute w-full -top-20 -left-10 lg:-top-40 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/MusaSmith.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[25%] h-[25%] left-12  top-8 lg:top-14 lg:left-20 z-9">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Vector_141.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>

              <div className="hidden w-full -bottom-52 left-16 z-10  absolute lg:flex ">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/testimonial.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
            </div>
            <img
              className="w-[160px] lg:w-[320px] inline-block p-2 "
              src="/Images/Testimonial3.png"
              alt="/"
            />
          </div>
        </div>
      </div>

      {/* eBikes */}

      <div className="relative bg-white">
        <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 mt-12 lg:mb-16 lg:mt-24 px-6 lg:gap-x-8 lg:px-28">
          <div className=" lg:absolute order-2 lg:order-1 lg:col-span-5 lg:inset-0 lg:left-1/2 xs:pt-32 lg:flex items-center ">
            <div className="relative w-[342px] lg:w-[529px] aspect-square rounded-full ">
              <img
                className="w-[327px] h-[327px] lg:w-[529px] lg:h-[529px] bg-contain bg-no-repeat bg-center rounded-full"
                style={{
                  backgroundImage: `url("Images/eBike1.png")`,
                }}
              />
              <div className="absolute w-[35%] h-[35%] top-0 left-25 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Frame_2470.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div>
                <div className="absolute w-[70%] h-[70%] -bottom-20 -right-24 lg:-right-32 lg:-bottom-32 z-10">
                  <div
                    className="bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url("/Images/bike.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex pb-24 pt-10 order-1 lg:order-2 sm:pb-32 lg:col-span-7 lg:px-0 xl:col-span-6">
            <div className="mx-auto max-w-full lg:mx-0">
              <div className="flex col-span-2">
                <h3 className="font-bold px-2 text-forest-500 border-4 border-forest-100 rounded-full bg-forest-100">
                  eBikes
                </h3>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-wood-900 sm:mt-10 lg:text-5xl pb-4">
                No Bike? No Problem.
              </h1>
              <p className="pb-4 font-normal text-lg leading-7 text-wood-700">
                The best way to move around the city. Our whole fleet is
                electric and we are committed to reducing emissions in our
                cities.
              </p>
              <div
                id="slider"
                className="w-full scroll whitespace-nowrap scroll-smooth overflow-x-auto scroll-left"
              >
                <div className="flex  gap-2 mt-4">
                  <div className="border-b-4 flex flex-col border-2 border-forest-900 bg-cassia-200 rounded-3xl p-4 ">
                    <h2 className="mt-2 text-2xl font-bold leading-7">
                      3,000+
                    </h2>
                    <p>Electric Bikes</p>
                  </div>

                  <div className="border-b-4 flex flex-col border-2 border-forest-900 rounded-3xl p-4 ">
                    <h2 className="mt-2 text-2xl font-bold leading-7">
                      Up to 50%
                    </h2>
                    <p>Discount in minute bundles</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/application"
                  className={buttonVariants({
                    variant: "primary",
                    size: "xl",
                    className: "border-b-4 text-lg w-48 h-[60px] px-4",
                  })}
                >
                  Apply Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className="bg-white px-6 lg:px-28">
        <div className="mx-auto mb-16 max-w-full border-2 border-b-8 border-forest-900 rounded-3xl divide-x  px-6 py-6 lg:px-[72px] lg:py-10">
          <h1 className="text-3xl lg:text-center font-bold leading-9 tracking-tight text-wood-900 sm:mt-10 lg:text-5xl">
            What do I need to start using ForestParcel?
          </h1>
          <p className="mt-6 text-lg font-normal lg:text-center leading-8 text-wood-700">
            Be sure to have the following information ready:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:mt-16 mt-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="lg:p-4 mb-10">
                <h2 className="text-xl font-bold text-forest-900 lg:mb-2 mb-4">
                  {faq.question}
                </h2>
                <ul className="list-disc list-inside text-wood-700 text-lg lg:pt-4">
                  {faq.answer.map((item, index) => (
                    <li key={index} className="flex mt-4">
                      {typeof item === "object" ? (
                        <a
                          href={item.link}
                          className="text-forest-500 hover:underline pl-10 -mt-3 inline-flex"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <>
                          <img
                            src="/Images/check.png"
                            alt="check"
                            className="mr-4 mt-0.5 h-6 w-6 aspect-square"
                          />
                          {item}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg font-normal lg:text-center leading-8 text-wood-700">
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:parcel@humanforest.co.uk"
              className="text-green-700 underline"
            >
              parcel@humanforest.co.uk
            </a>
          </p>
          <div className="lg:mt-10 lg:mb-16 flex lg:justify-center gap-x-6">
            <Link
              href="/application"
              className={buttonVariants({
                variant: "primary",
                size: "xl",
                className: "border-b-4 text-lg w-48 h-[60px] px-4",
              })}
            >
              Apply Now!
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="bg-forest-800 relative ">
        <div className="mx-auto max-w-full px-6 lg:px-28 grid">
          <div className="order-2 lg:order-1 grid lg:text-center">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-wood-0 justify-center mt-10 lg:mt-12 lg:leading-[62px] ">
              Boost your delivery service. <br />
              Start using ForestParcel today.
            </h1>
            <p className="mt-6 text-lg leading-8 text-wood-0 pb-10 lg:pb-12">
              Get started with a free account. Sign up now and start delivering
              parcels in no time.
            </p>
            <div className="flex gap-x-6 lg:justify-center">
              <Link
                href="/application"
                className={buttonVariants({
                  variant: "primary",
                  size: "xl",
                  className: "border-b-4 text-lg w-48 h-[60px] px-4",
                })}
              >
                Apply Now!
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid lg:justify-items-center">
            <div className="inline-flex relative w-[342px] h-[200px] lg:w-[633px] lg:h-[366px]  justify-center items-center">
              <div className="absolute w-[45%] h-[45%] -top-4">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/cloud.png")`,
                    width: "40%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[30%] h-[30%] left-10 bottom-20">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Layer_1.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[65%] h-[65%]">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/bike.png")`,
                    width: "100%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[30%] h-[30%] -right-4 bottom-16">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/CuteTree.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <></>
    </div>
  )
}
