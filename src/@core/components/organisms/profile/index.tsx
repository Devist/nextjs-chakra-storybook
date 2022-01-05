import { Card, Avatar } from '@core/components'
import classNames from 'classnames'

interface IProps {
  name: string
  subName: string
  size: number
  outline?: boolean
  shadow?: boolean
  className?: string
}

export function Profile({ name, subName, size, className, shadow, outline }: IProps) {
  const classes = classNames(className, 'flex', 'items-center')
  return (
    <Card isShadow={shadow} className={classes}>
      <div className="mr-3">
        <Avatar size={size} />
      </div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-gray-500">{subName}</p>
      </div>
    </Card>
  )
}

Profile.defaultProps = {
  outline: false,
  shadow: false
}
