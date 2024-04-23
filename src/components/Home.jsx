import React from 'react'

import {Carousel} from 'flowbite-react'

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
<div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>

<Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          
          <div>
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Full-HD-Images.jpg" alt="" />

          </div>

        {/*hero txt */}
          
        </div>

        <div className="flex h-full items-center justify-center ">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center">
          Slide 3
        </div>

      </Carousel>

</div>

    </div>
  )
}

export default Home