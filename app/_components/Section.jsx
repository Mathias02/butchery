import React from 'react'

const Section = () => {
  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <img
                    alt=""
                    src="https://www.sait.ca/assets/image/programs/credit-programs-600x400/pr-charcuterie-management-600x400.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
                <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl">The butcher's shop</h2>
                    <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                    quidem quam repellat.
                    </p>
                </div>
            </div>
        </div>
</section>

  )
}

export default Section