import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col gap-4'>
      <section className='relative min-h-screen gap-8 flex flex-col w-full pb-8 mt-8'>
        <div className='max-w-2xl flex flex-col gap-4 items-center justify-center mx-auto w-full '>
          <h1 className='font-bold text-5xl md:text-7xl text-center'>Make a difference here at Starlit  </h1>
          <p className='text-center'>
            We are driven by a profound vision to make a meaningful and positive impact on the lives of every child.
          </p>
          <div className='flex gap-8'>
            <Button asChild>
              <Link href="/about">Read More</Link>
            </Button>
            <Button variant="pink" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

        </div>
        <div className='absolute bottom-0 gap-4 min-h-[60vh] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='bg-neutral-200 rounded-3xl  overflow-hidden relative w-full h-[110%] sm:-translate-y-[4rem]'>
            <Image priority src="/images/hero1.jpg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full hidden sm:block translate-y-[2rem] '>
            <Image src="/images/hero2.jpg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full hidden md:block lg:translate-y-[2rem] '>
            <Image src="/images/her3.jpg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative hidden lg:block w-full h-[110%] -translate-y-[4rem]'>
            <Image src="/images/hero4.jpg" alt="children" fill className='object-cover' />
          </div>
        </div>
      </section>
      <section className='relative  grid md:grid-cols-2 mt-12 gap-8 min-h-screen overflow-hidden'>
        <div className="absolute -left-24 top w-max h-max overflow-hidden">
          <Image src={"/images/scaleTrans.svg"} width={500} height={400} alt="" className="z-0 " />
        </div>
        <div className='w-full flex relative flex-col justify-center gap-'>
          <p className='uppercase  text-sm text-starlit-pink'>About Us</p>
          <h3 className='font-semibold text-3xl'>Our overarching objective is to extend a helping hand </h3>
          <p className='mt-4'>
            Starlit Child Ghana is a Ghanaian registered NGO dedicated to empowering children and building bright futures through education and care. Embracing the belief that every child possesses an inner star of potential and hope, Starlit is committed to nurturing and brightening these stars through the provision of food, water,education, mentorship, and community support.

            Established in 2020, we have undertaken a series of donation exercises in orphanages and on the street,dedicated to providing underprivileged children basic necessities such as food, water and education.
          </p>
          <Button className='w-max mt-6' variant="pink" asChild>
            <Link href="/about">Read More</Link>
          </Button>
        </div>
        <div className='flex items-center justify-center md:p-4 max-md:min-h-[50vh] '>
          <div className='w-full h-full grid md:grid-cols-2 gap-4'>
            <div className='bg-neutral-200 rounded-3xl overflow-hidden my-auto relative w-full h-[90%]  '>
              <Image src="/images/about1.jpg" alt="children" fill className='object-cover' />
            </div>
            <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full  '>
              <Image src="/images/about2.avif" alt="children" fill className='object-cover' />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
