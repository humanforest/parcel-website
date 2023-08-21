import Link from "next/link"


import { buttonVariants } from "@/components/ui/button"
import ScrollBanner from "@/components/banner"

export const metadata = {
  title: "Couriers",
}


const faqs = [
  {
    id: 1,
    question: "What are the requirements for being a rider?",
    answer: ` General requirements:
   
    · Age: +18 for e-Bike riders or +21 for e-Moped riders.
    · HumanForest user account.
    · Equipment: You must have your own helmet and backpack (minimum size: 35cm x 26cm x       35cm).
    · Smartphone.
    · UK bank account.
    
 Documentation:

    · Proof of ID.
    · Proof of address: You can provide a driving licence, bank statement, or utilities bill.
    · Right to work in the UK: Provide a passport, visa, or immigration status document.`
  },
  {
    id: 2,
    question: "What vehicles are available for delivering Parcels?",
    answer: `When delivering with HumanForest Parcel, it is mandatory to exclusively use our eBike or eMoped fleet.  We're all about eco-friendly delivery here, so we don't permit the use of cars or personal bikes and mopeds. 
    
Your commitment to our sustainable approach is greatly appreciated!`
  },
  {
    id: 3,
    question: "How much do I get paid?",
    answer: `When you complete a delivery, you will receive payment based on factors such as distance and other variables. Before accepting a job, we will always provide you with the exact amount you will earn. 
For each delivery, you are guaranteed a minimum pay of £5.7, regardless of the distance. In addition, you will earn £2 per extra kilometre covered. This payment structure applies to both bikes and e-mopeds. 
    
Your daily earnings will be visible, and fees are paid on a weekly basis. Furthermore, as a rider, you will receive 100% of any tips you receive, which are currently provided in cash.`
  },

]
export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative bg-forest-800">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    {/* Images */}
  <div className="absolute order-2 lg:order-1 lg:col-span-5 lg:-mr-8 lg:absolute lg:inset-0 lg:left-1/2 lg:mr-0 ">
  <div className="relative w-[70%] aspect-square rounded-full justify-items-center ">
    <img
      className="w-full h-full bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("Images/Ellipse_1.png")`,
      }}
    />
    <div className="absolute w-[25%] h-[25%] top-12 left-25 z-10">
    <div
                className="bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("/Images/Layer_1.png")`,
                  width: '70%',
                  paddingBottom: '100%',
                  
                }}
              />
              </div>
              <div>
                <div className="absolute w-[25%] h-[25%] bottom-8 right-24 z-10">
                  <div
  className="bg-contain bg-no-repeat bg-center"
  style={{
    backgroundImage:`url("/Images/Frame_2470.png")`,
    width: '70%',
    paddingBottom: '100%',
  }}
  />
  </div>
  <div className="absolute w-[15%] h-[15%] right-64  bottom-16 z-9">
    <div
  className="bg-contain bg-no-repeat bg-center"
  style={{
    backgroundImage:`url("/Images/Vector_140.png")`,
    width: '70%',
    paddingBottom: '100%',
  }}
  />
  </div>
  </div>
  </div>
  
  </div>

  
{/* Text */}
    <div className="flex px-6 pb-24 pt-10 order-1 lg:order-2 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">
          Boost your delivery.
          <br />
          Start using our app today.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-100">
          Ride with HumanForest and deliver parcels the smart way.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/application"
            className={buttonVariants({ variant: "primary", size: "xl",  className: "text-lg pl-8 pr-8"})}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
    



  </div>
</div>

{/* Hero 2 */}

<div className="relative bg-white">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    {/* Images */}
  <div className="lg:col-span-5 lg:pl-8 xl:inset-0 xl:right-1/2 xl:mr-0 flex justify-center items-center">
  <div className="relative w-full aspect-square overflow-hidden rounded-full ">
    <img
      className="w-full h-full bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("/Images/JoeMoped.png")`,
      }}
    />
    <div className="absolute w-[25%] h-[25%] top-12 right-20 z-10">
    <div
                className="bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("/Images/Star_1.png")`,
                  width: '60%',
                  paddingBottom: '100%',
                  
                }}
              />
              </div>
              
                <div className="absolute w-[25%] h-[25%] bottom-24 left-48 z-10">
                  <div
  className="bg-contain bg-no-repeat bg-center"
  style={{
    backgroundImage:`url("/Images/CuteTree.png")`,
    width: '60%',
    paddingBottom: '100%',
  }}
  />
  </div>
  
  </div>
  
  </div>

  
{/* Text */}
    <div className=" px-6 pb-24 pt-10  sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pl-8 lg:pt-48 xl:col-span-6">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="mt-24 text-4xl font-bold tracking-tight text-wood-900 sm:mt-10 sm:text-6xl">
          eMopeds are here!
        
        </h1>
        <p className="mt-6 text-lg leading-8 text-wood-700">
          Deliver with speed and comfort.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/application"
            className={buttonVariants({ variant: "primary", size: "xl",  className: "text-lg pl-8 pr-8"})}
          >
            Start Now!
          </Link>
        </div>
      </div>
    </div>
    



  </div>
</div>


      {/* Benefits Section */}


      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
        <h1 className="text-4xl font-bold tracking-tight text-wood-900 justify-center pb-8 ">
              Join Our Delivery Team Today
            </h1>
          <div className="flex items-center justify-center gap-x-16">
            <div className="flex flex-col items-center">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_272_101)">
                  <path
                    d="M28.0406 23.4156L24.2683 19.063H25.0995C26.499 19.063 27.2597 17.4678 26.3677 16.4118L23.0395 12.5011H23.6284C24.7922 12.5011 25.4277 11.2706 24.6828 10.4607L17.3055 2.44898C17.032 2.15291 16.6438 2 16.25 2C15.8563 2 15.468 2.15307 15.1945 2.45041L7.8243 10.4602C7.0811 11.2695 7.71493 12.5 8.87868 12.5H9.46547L6.13446 16.4102C5.2425 17.4711 6.00266 19.0625 7.40266 19.0625H8.23391L4.46157 23.4151C3.47172 24.6133 4.25315 26.4995 5.8118 26.4995L15.375 26.4508V29.125C15.375 29.6087 15.7725 30 16.256 30C16.7395 30 17.125 29.6063 17.125 29.125V26.5L26.6844 26.5007C28.2484 26.5 29.0742 24.6078 28.0406 23.4156ZM26.6844 24.7008L17.125 24.75V21.612L19.4935 19.2435C19.8353 18.9017 19.8353 18.3477 19.4935 18.0065C19.1517 17.6652 18.5977 17.6647 18.2565 18.0065L17.125 19.1391V11.625C17.125 11.1413 16.7336 10.7495 16.25 10.7495C15.7664 10.7495 15.375 11.1438 15.375 11.625V16.0005L14.325 14.6C14.0352 14.2117 13.4883 14.1352 13.1 14.425C12.7117 14.7148 12.6352 15.2617 12.925 15.65L15.375 18.9148V24.75L5.79922 24.7502C5.78865 24.7433 5.76035 24.7064 5.7534 24.6563C5.74817 24.6184 5.75597 24.5953 5.78587 24.5607L12.0695 17.3092L7.66822 17.309L13.2573 10.7465H9.9336L16.25 3.8778L22.5719 10.7465H19.2523L24.8359 17.309H20.4391L26.7227 24.5606C26.7477 24.5894 26.7585 24.6108 26.7526 24.6536C26.7391 24.7063 26.7117 24.7445 26.6844 24.7008Z"
                    fill="#002A24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_272_101">
                    <rect
                      width="24.5"
                      height="28"
                      fill="white"
                      transform="translate(4 2)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="mt-2 text-center font-bold">Green Energy</h2>
              <p className="text-center">Every ride you do saves on CO2</p>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <div className="text-center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "inline-block" }}
                  >
                    <path
                      d="M17.19 6.40137C17.5794 6.40137 17.9381 6.61749 18.1175 6.96224L22.3919 15.1557C23.0044 14.9282 23.7087 14.8014 24.4 14.8014C27.4931 14.8014 30 17.3082 30 20.4014C30 23.4945 27.4931 26.0014 24.4 26.0014C21.3069 26.0014 18.8 23.4945 18.8 20.4014C18.8 18.5026 19.745 16.8226 21.1931 15.812L20.2656 14.0445L16.6125 20.7382C16.49 20.9614 16.2581 21.1014 16 21.1014H13.1562C12.8106 23.862 10.4569 26.0014 7.6 26.0014C4.50731 26.0014 2 23.4945 2 20.4014C2 17.3082 4.50731 14.762 7.6 14.762C8.25187 14.762 8.8775 14.9107 9.45937 15.1164L10.6187 12.7976L9.30187 10.6014H6.9C6.515 10.6014 6.2 10.2864 6.2 9.90137C6.2 9.51637 6.515 9.20137 6.9 9.20137H9.7C9.945 9.20137 10.1725 9.33043 10.2994 9.54262L11.7781 12.0014H19.1894L16.9756 7.80137H15.3C14.915 7.80137 14.6 7.48812 14.6 7.10137C14.6 6.71462 14.915 6.40137 15.3 6.40137H17.19ZM20.2 20.4014C20.2 22.7201 22.0419 24.6014 24.4 24.6014C26.7188 24.6014 28.6 22.7201 28.6 20.4014C28.6 18.0432 26.7188 16.2014 24.4 16.2014C23.9406 16.2014 23.5031 16.2757 23.0919 16.4114L25.0212 20.0732C25.2006 20.4189 25.0694 20.8389 24.7281 21.0226C24.3825 21.202 23.9231 21.0707 23.7787 20.7295L21.8537 17.0632C20.8475 17.8289 20.2 19.0407 20.2 20.4014ZM8.825 16.3851C8.44 16.267 8.02875 16.2014 7.56063 16.2014C5.28038 16.2014 3.36063 18.0432 3.36063 20.4014C3.36063 22.7201 5.28038 24.6014 7.56063 24.6014C9.6825 24.6014 11.4106 23.0876 11.7431 21.1014H7.8275C7.20187 21.1014 6.795 20.4057 7.075 19.8851L8.825 16.3851ZM14.7619 19.7014L11.4719 14.2195L8.73312 19.7014H14.7619ZM12.6181 13.4014L15.9694 18.9926L19.0187 13.4014H12.6181Z"
                      fill="#002A24"
                    />
                  </svg>
                </div>

                <h2 className="mt-2 text-center font-bold">Fast Bikes</h2>
                <p className="text-center">Reach speeds of up to 25km/h</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <div className="text-center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "inline-block" }}
                  >
                    <g clip-path="url(#clip0_279_21)">
                      <path
                        d="M21.0983 18.0071C21.2616 17.7504 21.2733 17.4238 21.1333 17.1554L16.7816 8.45211C16.49 7.85711 15.51 7.85711 15.2183 8.45211L10.8666 17.1554C10.7266 17.4238 10.75 17.7504 10.9016 18.0071C11.065 18.2638 11.345 18.4271 11.6483 18.4271H11.975L10.8666 20.6438C10.7266 20.9121 10.75 21.2388 10.9016 21.4954C11.065 21.7521 11.345 21.9154 11.6483 21.9154H15.125V23.1288C15.125 23.6071 15.5216 24.0038 16 24.0038C16.4783 24.0038 16.875 23.6071 16.875 23.1288V21.9154H20.3516C20.655 21.9154 20.935 21.7638 21.0983 21.4954C21.2616 21.2388 21.2733 20.9121 21.1333 20.6438L20.025 18.4271H20.3516C20.655 18.4271 20.935 18.2754 21.0983 18.0071ZM18.94 20.1538H13.06L14.81 16.6654H13.06L16 10.7854L18.94 16.6654H17.19L18.94 20.1538V20.1538Z"
                        fill="#002A24"
                      />
                      <path
                        d="M16 2C8.265 2 2 8.265 2 16C2 23.735 8.265 30 16 30C23.735 30 30 23.735 30 16C30 8.265 23.735 2 16 2ZM16 28.25C9.245 28.25 3.75 22.755 3.75 16C3.75 9.245 9.245 3.75 16 3.75C22.755 3.75 28.25 9.245 28.25 16C28.25 22.755 22.755 28.25 16 28.25Z"
                        fill="#002A24"
                      />
                      <path
                        d="M16 6.23479C16.455 6.23479 16.8284 5.86146 16.8284 5.40646C16.8284 4.95146 16.455 4.57812 16 4.57812C15.545 4.57812 15.1717 4.95146 15.1717 5.40646C15.1717 5.86146 15.545 6.23479 16 6.23479Z"
                        fill="#002A24"
                      />
                      <path
                        d="M16 27.4213C16.4575 27.4213 16.8284 27.0505 16.8284 26.593C16.8284 26.1355 16.4575 25.7646 16 25.7646C15.5425 25.7646 15.1717 26.1355 15.1717 26.593C15.1717 27.0505 15.5425 27.4213 16 27.4213Z"
                        fill="#002A24"
                      />
                      <path
                        d="M26.5933 15.1719C26.1383 15.1719 25.765 15.5452 25.765 16.0002C25.765 16.4552 26.1383 16.8285 26.5933 16.8285C27.0483 16.8285 27.4217 16.4552 27.4217 16.0002C27.4217 15.5452 27.0483 15.1719 26.5933 15.1719Z"
                        fill="#002A24"
                      />
                      <path
                        d="M5.40664 16.8285C5.86412 16.8285 6.23497 16.4577 6.23497 16.0002C6.23497 15.5427 5.86412 15.1719 5.40664 15.1719C4.94917 15.1719 4.57831 15.5427 4.57831 16.0002C4.57831 16.4577 4.94917 16.8285 5.40664 16.8285Z"
                        fill="#002A24"
                      />
                      <path
                        d="M22.9067 7.92664C22.58 8.25331 22.58 8.76664 22.9067 9.09331C23.2333 9.41997 23.7467 9.41997 24.0733 9.09331C24.4 8.76664 24.4 8.25331 24.0733 7.92664C23.7467 7.59997 23.2333 7.59997 22.9067 7.92664Z"
                        fill="#002A24"
                      />
                      <path
                        d="M7.92664 22.9071C7.59997 23.2338 7.59997 23.7471 7.92664 24.0738C8.25331 24.4004 8.76664 24.4004 9.09331 24.0738C9.41997 23.7471 9.41997 23.2338 9.09331 22.9071C8.76664 22.5804 8.25331 22.5804 7.92664 22.9071Z"
                        fill="#002A24"
                      />
                      <path
                        d="M22.9067 22.9071C22.58 23.2338 22.58 23.7471 22.9067 24.0738C23.2333 24.4004 23.7467 24.4004 24.0733 24.0738C24.4 23.7471 24.4 23.2338 24.0733 22.9071C23.7467 22.5804 23.2333 22.5804 22.9067 22.9071Z"
                        fill="#002A24"
                      />
                      <path
                        d="M8.50997 9.33831C8.96745 9.33831 9.33831 8.96745 9.33831 8.50997C9.33831 8.0525 8.96745 7.68164 8.50997 7.68164C8.0525 7.68164 7.68164 8.0525 7.68164 8.50997C7.68164 8.96745 8.0525 9.33831 8.50997 9.33831Z"
                        fill="#002A24"
                      />
                      <path
                        d="M19.5933 6.92307C20.0133 7.0864 20.4917 6.88807 20.6667 6.4564C20.83 6.0364 20.6317 5.55807 20.2 5.38307C19.78 5.21974 19.3017 5.41807 19.1267 5.84974C18.9633 6.26974 19.1617 6.74807 19.5933 6.92307Z"
                        fill="#002A24"
                      />
                      <path
                        d="M12.4067 25.0764C11.9867 24.9131 11.5083 25.1114 11.3333 25.5431C11.17 25.9631 11.3683 26.4414 11.8 26.6164C12.22 26.7798 12.6983 26.5814 12.8733 26.1498C13.0367 25.7298 12.8383 25.2514 12.4067 25.0764Z"
                        fill="#002A24"
                      />
                      <path
                        d="M26.15 19.1262C25.73 18.9629 25.2517 19.1612 25.0767 19.5929C24.9133 20.0129 25.1117 20.4912 25.5433 20.6662C25.9633 20.8296 26.4417 20.6312 26.6167 20.1996C26.78 19.7796 26.5817 19.3012 26.15 19.1262Z"
                        fill="#002A24"
                      />
                      <path
                        d="M5.84998 12.8733C6.26998 13.0366 6.74831 12.8383 6.92331 12.4066C7.08665 11.9866 6.88831 11.5083 6.45665 11.3333C6.03665 11.1699 5.55831 11.3683 5.38331 11.7999C5.21998 12.2199 5.41831 12.6983 5.84998 12.8733Z"
                        fill="#002A24"
                      />
                      <path
                        d="M26.045 12.547C26.465 12.3603 26.6517 11.882 26.4767 11.462C26.3017 11.042 25.8117 10.8553 25.3917 11.0303C24.9717 11.2053 24.785 11.6953 24.96 12.1153C25.135 12.5353 25.625 12.722 26.045 12.547Z"
                        fill="#002A24"
                      />
                      <path
                        d="M5.95501 19.4531C5.53501 19.6398 5.34834 20.1181 5.52334 20.5381C5.69834 20.9581 6.18834 21.1448 6.60834 20.9698C7.02834 20.7948 7.21501 20.3048 7.04001 19.8848C6.85334 19.4648 6.37501 19.2781 5.95501 19.4531V19.4531Z"
                        fill="#002A24"
                      />
                      <path
                        d="M19.885 24.96C19.465 25.1467 19.2783 25.625 19.4533 26.045C19.64 26.465 20.1183 26.6517 20.5383 26.4767C20.9583 26.3017 21.145 25.8117 20.97 25.3917C20.795 24.9717 20.305 24.785 19.885 24.96V24.96Z"
                        fill="#002A24"
                      />
                      <path
                        d="M12.115 7.04013C12.535 6.85346 12.7217 6.37513 12.5467 5.95513C12.3717 5.53513 11.8817 5.34846 11.4617 5.52346C11.0417 5.69846 10.855 6.18846 11.03 6.60846C11.205 7.02846 11.695 7.21513 12.115 7.04013Z"
                        fill="#002A24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_279_21">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

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

          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600 whitespace-pre-line whitespace-break-spaces ...">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <>


       
      </>
    </div>
  )
}
