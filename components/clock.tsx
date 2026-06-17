'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-xs tabular-nums text-primary">
      {time ?? '--:--:--'}
    </span>
  )
}
