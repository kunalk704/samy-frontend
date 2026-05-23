import { cn } from '../../utils/cn'

function LogoCloud({
  logos,
  title,
  className,
}) {
  return (
    <div className={cn('w-full', className)}>
      {title && (
        <p className="text-center text-sm font-medium text-dark-400 uppercase tracking-wider mb-10">
          {title}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 md:h-14"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
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