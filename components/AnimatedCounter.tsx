'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <p>
        <CountUp
          duration={0.86}
          decimals={2}
          decimal='.'
          prefix='$'
          end={amount}
        />
      </p>
    </div>
  )
}

export default AnimatedCounter
