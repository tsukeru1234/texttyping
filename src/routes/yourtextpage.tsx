import { createFileRoute } from '@tanstack/react-router'
import YourText from '../components/YourText'

export const Route = createFileRoute('/yourtextpage')({
  component: () => (
    <YourText />
    ),
})
