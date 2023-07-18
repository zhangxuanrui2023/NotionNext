
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  return (
        <div className={'relative h-28 text-white flex flex-col'}>

            <FlipCard
                className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#4f65f0] dark:bg-yellow-600 dark:border-gray-600'
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-3xl'>交流频道</h2>
                        <h3 className='pt-2'>加入我们的社群讨论分享</h3>
                        <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://bu.dusays.com/2023/05/16/64633c4cd36a9.png) center center no-repeat' }}></div>
                    </div>}
                backContent={<div className='font-[1000] text-xl h-full'>
                    <Link href='http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=EGWu5kXI3C9fDtG3ccVaUb4tMHHOhV8j&authKey=AYjQHOzFoIrLUjl9ymEEtEAqNZf4%2FisKeVOTnl8ZX%2FITAmGG9KgWI%2B7oPlGowUZ5&noverify=0&group_code=826833331'>
                        点击加入社群
                    </Link>
                </div>}
            />

        </div>
  )
}
