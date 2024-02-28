import React from 'react'
import { MyComponentChildrenArray } from 'types/ui'
export default function BackgroundCard({children}:MyComponentChildrenArray) {
  return (
    <section className="max-w-4xl p-6  mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col justify-center items-center gap-5">
        <div className='px-8'>
        {children}
        </div>
    </section>
  )
}

