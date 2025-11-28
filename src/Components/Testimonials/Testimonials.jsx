import React from 'react'
import FadeIn from '../fadein'

const testimonials = [
    {
        testimonial: "We had 24/7 electricity for over 6 months without touching the grid. LumiGrid's solution exceeded our expectations. Truly exceptional technical delivery.",
        name: "Dr. Okwuosa M., Victoria Garden City"
    },
    {
        testimonial: "Their technical know-how, especially in sizing and inverter selection, was spot-on. Our energy bills dropped by 80%.",
        name: "Mr. Abayomi T., Lekki Phase 1"
    },
]

const Testimonials = () => {
  return (
    <div className='bg-gray-300'>
    <div id='testimonials' className='lg:px-40 lg:py-20 container mx-auto px-7 py-14'>
      <FadeIn duration = {100} >
      <div className="flex justify-center items-center pb-7">
        <h2 className="text-3xl font-bold w-full ">Testimonials</h2>
      </div>
      </FadeIn>

      <div className='flex gap-4 overflow-scroll testimonials '>
        {testimonials.map((item) => {
            return (
              <FadeIn duration = {100} >
              <div className="lg:flex-col lg:w-150 bg-customBlue w-lvw flex gap-4 flex-col justify-center items-center pt-5">
                <div className="lg:h-2.5 lg:w-9 h-3 w-10 rounded-full bg-customYellow"></div>

                <div className='px-9 '>
                <p className="text-white ">{item.testimonial}</p>
                </div>

                <div className='bg-white w-full h-full'>
                <p className="text-black py-3 ml-5 font-bold">{item.name}</p>
                </div>
              </div>
              </FadeIn>
            )
  
        })}
      </div>
      </div>
      </div>
  )
}

export default Testimonials