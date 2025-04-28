import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmount } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <title>Dashboard | Pizza Shop</title>

      <div className="flex flex-col gap-4"></div>
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmount />
      </div>

      <div className='grid grid-cols-9 gap-4'>
        <RevenueChart />
      </div>
    </>
  )
}
