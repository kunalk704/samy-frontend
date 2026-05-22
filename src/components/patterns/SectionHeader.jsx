import { cn } from '../../utils/cn'
import Badge from '../ui/Badge'

/**
 * Reusable section header: badge + title + subtitle + optional description
 */
function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = 'center',
  className,
}) {
  return (
    <div className={cn(
      'max-w-3xl',
      align === 'center' && 'text-center mx-auto',
      align === 'left' && 'text-left',
      className
    )}>
      {badge && (
        <Badge className="mb-4">{badge}</Badge>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl md:text-2xl text-brand-600 font-medium">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-4 text-lg text-dark-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader