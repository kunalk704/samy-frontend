import { cn } from '../../utils/cn'

/**
 * Button primitive
 * Variants: primary, secondary, outline, ghost
 * Sizes: sm, md, lg
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        
        // Variants
        variant === 'primary' && [
          'bg-brand-500 text-white',
          'hover:bg-brand-600',
          'focus:ring-brand-500',
          'active:bg-brand-700',
        ],
        variant === 'secondary' && [
          'bg-dark-900 text-white',
          'hover:bg-dark-800',
          'focus:ring-dark-900',
          'active:bg-dark-950',
        ],
        variant === 'outline' && [
          'border-2 border-dark-200 text-dark-900 bg-transparent',
          'hover:border-brand-500 hover:text-brand-600',
          'focus:ring-brand-500',
        ],
        variant === 'ghost' && [
          'text-dark-600 bg-transparent',
          'hover:text-brand-600 hover:bg-brand-50',
          'focus:ring-brand-500',
        ],
        
        // Sizes
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-2.5 text-base',
        size === 'lg' && 'px-8 py-3 text-lg',
        
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button