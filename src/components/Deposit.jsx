import React from 'react'
import { CardComponent } from './CardComponent'
import { ArrowUp, ChevronDown, Plus, ArrowRightLeft, EllipsisVertical } from 'lucide-react'
import { Button } from './Button'

export const Deposit = () => {
    return (
        <CardComponent>
            <div className='h-[180px] justify-between  w-full flex flex-col gap-s5'>
                <div className='flex flex-col gap-3.5'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='flex items-center gap-1'>
                                <span>NGN</span>
                                <span>.</span>
                                <span className='text-gray-500 text-sm'>Naira</span>
                            </div>

                            <ChevronDown className='w-6 h-6 text-gray-400' />
                        </div>

                        <button className='flex items-center gap-2'>
                            <Plus className='w-5 h-5 text-gray-900' />
                            <h5 className='text-gray-900 text-base'>Deposit</h5>
                        </button>
                    </div>

                    <h4 className='text-2xl text-black font-semibold'>₦ 34,645,233</h4>
                </div>

                <div className='flex flex-row overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent xl:overflow-hidden gap-3 justify-between '>
                    <Button label={'Send'} icon={<ArrowUp className='w-5 h-5 text-gray-900' />} />
                    <Button label={'Receive'} icon={<ArrowUp className='w-5 h-5 text-gray-900' />} />
                    <Button label={'Swap'} icon={<ArrowRightLeft className='w-5 h-5 text-gray-900' />} />
                    <button className='cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100 bg-gray-50 p-4'>
                        <EllipsisVertical />
                    </button>
                </div>
            </div>
        </CardComponent>
    )
}
