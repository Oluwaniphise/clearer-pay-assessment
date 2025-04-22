import { Bell } from 'lucide-react'
import React from 'react'
import { Deposit } from '../components/Deposit'
import { Merchants } from '../components/Merchants'
import { FxRates } from '../components/FxRates'
import { Transactions } from '../components/Transactions'
import { MoneyFlow } from '../components/MoneyFlowChart'

export const Dashboard = () => {
  return (
    <main className="flex flex-col max-w-[700px] mx-auto xl:max-w-full ">
      <div className='flex flex-col xl:flex-row gap-x-[200px]'>
        <h3 className="text-lg text-[#3C3C3C] mb-4">Welcome Andy 👋🏽</h3>

        <div className='bg-[#FBE9DD]  text-gray-600 flex flex-row items-center rounded-[10px] gap-2.5 p-2.5'>
          <Bell className='w-5 h-5 text-red-400' />
          <p className='text-xs '>
            Your account has been set up for OTC trade, please<b> Contact OTC </b>to transact
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 mt-5">
        <Deposit />
        <Merchants />
      </div>
      <div className='mt-9'>
        <FxRates />
      </div>
      <div className='mt-9 flex flex-col xl:flex-row gap-5 '>
        <div className='w-full xl:w-2/3'>
          <Transactions />

        </div>

        <div className='w-full xl:w-1/3'>
          <MoneyFlow />
        </div>
      </div>
    </main>
  )
}
