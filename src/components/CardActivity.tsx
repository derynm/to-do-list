import { Activity } from '../types'

export function CardActivity(activity: Activity) {
  return (
    <div className="flex w-full justify-between rounded-lg bg-slate-400 p-4">
      <p>
        <span className="font-semibold"> {activity.action} </span>
        <span className="text-blue-700"> {activity.task} </span>
        from
        <span className="font-semibold"> {activity.from} </span>
        to
        <span className="font-semibold"> {activity.to} </span>
      </p>
      <p className="text-sm">{activity.time}</p>
    </div>
  )
}
