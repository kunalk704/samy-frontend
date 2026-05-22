import { cn } from '../../utils/cn'

/**
 * Card primitive — a container with consistent styling
 */
function Card({ children, className, padding = 'md', hover = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-dark-100',
        'transition-all duration-300',
        hover && 'hover:shadow-lg hover:border-dark-200 hover:-translate-y-1',
        padding === 'sm' && 'p-4',
        padding === 'md' && 'p-6',
        padding === 'lg' && 'p-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card