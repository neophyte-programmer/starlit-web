import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex '>
      <section className='relative min-h-screen flex flex-col w-full items- justify- mt-8'>
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
              <Link href="/about">Contact Us</Link>
            </Button>
          </div>

        </div>
        <div className='absolute bottom-0 gap-4 min-h-[60vh] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='bg-neutral-200 rounded-3xl  overflow-hidden relative w-full h-[110%] sm:-translate-y-[5rem]'>
            <Image src="/images/hero1.jpg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full hidden sm:block translate-y-[2rem] '>
            <Image src="/images/hero2.jpg" alt="children" fill className='object-cover' />
          </div>
          <div className='bg-neutral-200 rounded-3xl overflow-hidden relative w-full h-full hidden md:block lg:translate-y-[2rem] '>
            <Image src="/images/her3.jpg" alt="children" fill className='object-cover' />
          </div>
         <div className='bg-neutral-200 rounded-3xl overflow-hidden relative hidden lg:block w-full h-[110%] -translate-y-[5rem]'>
            <Image src="/images/hero4.jpg" alt="children" fill className='object-cover' />
          </div>
        </div>
      </section>
    </main>
  )
}
