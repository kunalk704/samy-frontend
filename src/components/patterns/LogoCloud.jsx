import { cn } from '../../utils/cn'

/**
 * Logo cloud: grid of partner/client logos
 */
function LogoCloud({
  logos,
  title,
  className,
}) {
  return (
    <div className={cn('w-full', className)}>
      {title && (
        <p className="text-center text-sm font-medium text-dark-400 uppercase tracking-wider mb-8">
          {title}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-lg font-semibold text-dark-400">
                {logo.alt}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoCloud