import { Activity } from '../types'

export function CardActivity(activity: Activity) {
  return (
    <div className="flex w-full justify-between rounded-lg bg-slate-400 p-4">
      <p>
        <span className="font-semibold capitalize"> {activity.action} </span>
        <span className="font-bold text-blue-700"> {activity.task} </span>
        from
        <span className="font-semibold capitalize"> {activity.from} </span>
        to
        <span className="font-semibold capitalize"> {activity.to} </span>
      </p>
      <p className="text-sm">{activity.time}</p>
    </div>
  )
}
