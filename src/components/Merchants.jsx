import React from 'react'
import { CardComponent } from './CardComponent'
import { Plus } from 'lucide-react'
import { Merchant } from './Merchant'

export const Merchants = () => {
    const merchants = [
        { id: 1, name: 'Adisa Deborah', initials: 'AD' },
        { id: 2, name: 'Adisa Deborah', initials: 'AD' },
        { id: 3, name: 'Adisa Deborah', initials: 'AD' },
        { id: 4, name: 'Adisa Deborah', initials: 'AD' },
        { id: 4, name: 'Adisa Deborah', initials: 'AD' },
        { id: 4, name: 'Adisa Deborah', initials: 'AD' },
        { id: 4, name: 'Adisa Deborah', initials: 'AD' },
        { id: 4, name: 'Adisa Deborah', initials: 'AD' },
        { id: 5, name: 'Adisa Deborah', initials: 'AD' },
    ];
    return (
        <CardComponent>
            <div className='w-full flex flex-col gap-10'>
                <div className='flex flex-row justify-between items-center'>
                    <h4 className='text-gray-900 text-xl'>Merchants</h4>

                    <button className='flex items-center gap-2'>
                        <Plus className='w-5 h-5 text-gray-900' />
                        <h5 className='text-gray-900 text-base'>Add Merchant</h5>
                    </button>

                </div>

                <div className="w-full overflow-x-auto py-4">
                    <div className="flex">
                        {merchants.map((merchant) => (
                            <Merchant key={merchant.id} merchant={merchant} />
                        ))}
                    </div>
                </div>
            </div>
        </CardComponent>
    )
}
