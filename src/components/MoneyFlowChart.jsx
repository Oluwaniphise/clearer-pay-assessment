import React from 'react'
import { CardComponent } from './CardComponent'
import { ChevronDown } from 'lucide-react'
import { MoneyFlowChart } from './MoneyCharts'

export const MoneyFlow = () => {
    return (
        <CardComponent>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col items-start gap-y-4 md:flex-row justify-between md:items-center">
                    <h2 className="text-lg font-medium">Money out/Money in</h2>
                    <div className="bg-gray-100 rounded-xl px-5 py-2 flex items-center">
                        <span className="text-sm">Date Range</span>
                        <ChevronDown className="w-5 h-4 ml-1" />
                    </div>
                </div>

                <div className="flex items-center mb-4 space-x-8">
                    <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-200 mr-2"></div>
                        <span className="text-sm text-gray-600">Money in ₦1,000,000</span>
                    </div>
                    <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-red-300 mr-2"></div>
                        <span className="text-sm text-gray-600">Money out ₦1,000,000</span>
                    </div>
                </div>

                <MoneyFlowChart />
            </div>
        </CardComponent>
    )
}
