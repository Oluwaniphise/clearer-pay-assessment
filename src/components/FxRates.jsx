import React from 'react'
import { CardComponent } from './CardComponent'

export const FxRates = () => {

    const fxRates = [
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'USD',
            rate2: '$1',
            code2: 'us'
        },
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'GBP',
            rate2: '£1',
            code2: 'gb'
        },
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'EUR',
            rate2: '€1',
            code2: 'eu'
        },
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'YEN',
            rate2: '¥1',
            code2: 'kr'
        },
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'YEN',
            rate2: '¥1',
            code2: 'kr'
        },
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'YEN',
            rate2: '¥1',
            code2: 'kr'
        },
     
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'YEN',
            rate2: '¥1',
            code2: 'kr'
        },
     
        {
            country1: 'NGN',
            rate1: '₦1,640',
            code1: 'ng',
            country2: 'YEN',
            rate2: '¥1',
            code2: 'kr'
        },
     

    ]

    return (
        <CardComponent>
            <div className='w-full flex flex-col gap-6'>
                <div className='flex flex-row justify-between'>
                    <h4 className='text-gray-900 text-xl'>FX Rates</h4>
                    <button className='text-gray-400 cursor-pointer'>See all</button>
                </div>

                <div className='w-full flex flex-row  gap-7 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent '>

                    {fxRates.map((fxRate, index) => (

                        <div key={index} className="bg-[#F9F9F9] min-w-[200px] rounded-xl px-2 py-2 flex items-center gap-3  shadow-sm">

                            <div className="flex items-center -space-x-2 ">
                                <img src={`https://flagcdn.com/w40/${fxRate.code1}.png`} alt={`${fxRate.country1} Flag`} className="w-6 h-6 rounded-full border  border-gray-300 " />
                                <img src={`https://flagcdn.com/w40/${fxRate.code2}.png`} alt={`${fxRate.country2} Flag`} className="w-6  h-6 rounded-full border border-gray-300" />
                            </div>

                            <div className='flex flex-row items-center justify-between gap-2.5'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xs text-gray-400'>{fxRate.country1}</p>
                                    <h5 className='text-sm font-medium text-gray-800'>{fxRate.rate1}</h5>
                                </div>
                                <span>
                                    ⇄
                                </span>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xs text-gray-400'>{fxRate.country2}</p>
                                    <h5 className='text-sm font-medium text-gray-800'>{fxRate.rate2}</h5>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>


            </div>
        </CardComponent>
    )
}
