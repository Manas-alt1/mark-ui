import { useState } from 'react'

export function useStableValue<T>(factory: () => T): T {
  const [value] = useState(factory)
  return value
}
