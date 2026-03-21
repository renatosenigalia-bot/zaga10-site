import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-xs">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body font-medium text-label text-brand-navy uppercase tracking-widest"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={[
            'font-body text-body text-brand-navy bg-white rounded-md py-md px-lg',
            'placeholder:text-brand-cloud resize-vertical min-h-[120px] max-h-[240px]',
            'border transition-all duration-fast',
            error
              ? 'border-red-500 bg-red-50 focus:border-red-500'
              : 'border-brand-graphite/40 focus:border-brand-electric focus:border-2',
            'disabled:bg-brand-offwhite disabled:text-brand-cloud disabled:cursor-not-allowed',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {error && (
          <span className="font-body text-caption text-red-500" role="alert">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
