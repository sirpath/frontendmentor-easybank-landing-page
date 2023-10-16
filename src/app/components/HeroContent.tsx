/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import Image from 'next/image'

const HeroContent = () => (
  <div className="z-10 flex w-full flex-col pb-14  md:flex-row-reverse  md:pb-0">
    <div className="background-hero-mobile bg-center bg-no-repeat md:bg-contain md:bg-left lg:bg-auto">
      <Image className="cropMobilePhoto -mt-[35%] md:-mt-[10%] lg:-mt-[17%] xl:-mb-[20%] xl:ml-[17%]" width={767} height={939} src="./images/image-mockups.png" alt="banner" />
    </div>

    <div className="flex w-full flex-col items-center p-6 text-center md:items-start md:self-center md:text-left lg:w-[45%] xl:pl-28">
      <h1 className="text-4xl text-primary md:max-w-md xl:text-5xl">Next generation digital banking</h1>
      <p className="py-6 text-center text-xs leading-5 text-secondary md:max-w-md md:text-left">
        Take your financial life online. Your Easybank account will be a one-stop-shop
        for spending, saving, budgeting, investing, and much more.
      </p>

      <div><button className="rounded-3xl bg-gradient-to-r from-lime-green to-bright-cyan px-6 py-2 text-white duration-300 hover:opacity-60" type="button">Request Invite</button></div>
    </div>

  </div>
)

export default HeroContent
