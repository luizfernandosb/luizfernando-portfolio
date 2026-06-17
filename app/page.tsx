import { StatusBar } from '@/components/status-bar'
import { Workstation } from '@/components/workstation'

export default function Page() {
  return (
    <div className="relative min-h-dvh">
      <div
        className="retro-grid pointer-events-none fixed inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="retro-scanlines pointer-events-none fixed inset-0"
        aria-hidden="true"
      />
      <div className="relative">
        <StatusBar />
        <Workstation />
      </div>
    </div>
  )
}
