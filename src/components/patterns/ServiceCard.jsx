import { cn } from '../../utils/cn'
import Card from '../ui/Card'

/**
 * Service card: icon + title + description + optional link
 */
function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
  ...props
}) {
  return (
    <Card hover className={cn('h-full', className)} {...props}>
      <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5">
        {Icon && <Icon className="w-6 h-6 text-brand-600" />}
      </div>
      <h3 className="text-xl font-semibold text-dark-900 mb-3">
        {title}
      </h3>
      <p className="text-dark-500 leading-relaxed">
        {description}
      </p>
    </Card>
  )
}

export default ServiceCard