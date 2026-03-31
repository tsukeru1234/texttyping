import { createFileRoute } from '@tanstack/react-router'
import Received from '../components/Received'

export const Route = createFileRoute('/')({
  component: () => (
    <Received />
    ),
})

