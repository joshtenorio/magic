// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Button } from '@/components/ui/button'
const filePath = 'count.txt'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {

  return (
    <div>
    <Button>Click me</Button>
    </div>
  )
}