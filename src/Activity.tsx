import { CardActivity } from './components/CardActivity'
import { useActivity } from './hooks/useActivity'

export function Activity() {
  const { dataActivity } = useActivity()
  return (
    <div className="mx-auto mt-5 w-full max-w-3xl space-y-4">
      {dataActivity.map((activity) => (
        <CardActivity key={activity.id} {...activity} />
      ))}
    </div>
  )
}
