import { cn } from '../../utils/cn'

/**
 * Badge primitive — small label/tag
 */
function Badge({ children, variant = 'default', className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variant === 'default' && 'bg-brand-50 text-brand-700',
        variant === 'success' && 'bg-green-50 text-green-700',
        variant === 'warning' && 'bg-amber-50 text-amber-700',
        variant === 'dark' && 'bg-dark-900 text-white',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge