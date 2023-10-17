import ActionTooltip from '@/components/action-tooltip'
import CoreValueCard from '@/components/cards/core-value-card'
import { Button } from '@/components/ui/button'
import { coreValues, partners } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container flex flex-col gap-4'>
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
        <div className='md:absolute md:bottom-0 gap-4 md:min-h-[60vh] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='bg-neutral-200 rounded-3xl  overflow-hidden relative w-full h-[50vh] md:h-[110%] sm:-translate-y-[4rem]'>
            <Image priority src="/images/hero.jpeg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full hidden sm:block translate-y-[2rem] '>
            <Image src="/images/hero2.jpeg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full hidden md:block lg:translate-y-[2rem] '>
            <Image src="/images/hero3.jpeg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative hidden lg:block w-full h-[110%] -translate-y-[4rem]'>
            <Image src="/images/hero4.jpeg" alt="children" fill className='object-cover' />
          </div>
        </div>
      </section>
      <section id="motto" className='relative  grid md:grid-cols-2 mt-12 gap-8 min-h-screen overflow-hidden'>
        <div className="hidden md:absolute -left-24 top w-max h-max overflow-hidden">
          <Image src={"/images/scaleTrans.svg"} width={500} height={400} alt="" className="z-0 " />
        </div>
        <div className='w-full flex  flex-col justify-center gap-'>
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
              <Image src="/images/about1.jpeg" alt="children" fill className='object-cover' />
            </div>
            <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full  '>
              <Image src="/images/about2.avif" alt="children" fill className='object-cover' />
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-8 w-full md:bg-muted px-4 '>
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 w-full'>
          <h1 className='text-right text-3xl md:text-6xl font-semibold bg-clip-text bg-gradient-to-b to-starlit-pink from-purple-500 text-transparent '>Our mission</h1>
          <p className=' text-right md:text-left md:text-lg md:w-[90%] '>
            To cater for the educational, physical and emotional needs of children in order to influence their lives in a positive manner

          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 w-full max-sm:border-t max-sm:pt-4'>
          <p className='md:text-lg md:text-right md:w-[90%] md:ml-auto md:mt-auto '>
            To leave a beneficial impact in the lives of every child

          </p>
          <h1 className='text-3xl md:text-6xl font-semibold bg-clip-text bg-gradient-to-b from-starlit-pink to-purple-500 text-transparent '>Our vision</h1>
        </div>
      </section>
      <section id="core-values" className='gap-12 flex flex-col w-full  items-center justify-center'>
        <h1 className='font-semibold text-4xl'>
          Our Core Values
        </h1>
        <div className='flex-1  w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-center'>
          {
            coreValues.map((value, i) => (
              <CoreValueCard key={i} value={value} />
            ))
          }
        </div>
      </section>
      {/* <section id="partners" className='min-h-[40vh] flex flex-col gap-8' >
        <h3 className='font-semibold text-4xl'>
          Our Partners
        </h3>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4'>
          {
            partners.map((partner, i) => (
              <ActionTooltip label={partner.name} side='top'   key={i}>
                <div className='relative aspect-square w-full h-full'>
                  <Image className='' fill alt={partner.name} src={`/images/partners${partner.img}`} />
                  </div>
              </ActionTooltip>
            ))
          }
        </div>
      </section> */}
    </main>
  )
}
