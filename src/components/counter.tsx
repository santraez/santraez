import { useState } from 'preact/hooks'

interface CounterProps {
  initialCount: number
}

export function Counter(props : CounterProps) {
  const [count, setCount] = useState<number>(props.initialCount)

  return (
    <button onClick={() => setCount(prev => ++prev)}>
      count is {count}
    </button>
  )
}
