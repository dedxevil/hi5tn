
import React from 'react';
import { Link, To } from 'react-router-dom';

// New approach for ButtonProps to handle polymorphism
type CommonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  showGoldenShine?: boolean;
};

// Props for rendering as a React Router Link
type ButtonAsLinkProps = CommonProps & {
  to: To;
  href?: never; // 'href' is not allowed when 'to' is present
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>; // Omit href as 'to' replaces it

// Props for rendering as a standard anchor tag
type ButtonAsAnchorProps = CommonProps & {
  href: string;
  to?: never; // 'to' is not allowed when 'href' is present
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Props for rendering as a button element
type ButtonAsButtonProps = CommonProps & {
  to?: never; // 'to' is not allowed when rendering as a button
  href?: never; // 'href' is not allowed when rendering as a button
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Discriminated union type for ButtonProps
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsAnchorProps;


const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  href,
  showGoldenShine = false,
  ...props
}) => {
  let baseStyles = 'font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 relative overflow-hidden group inline-flex items-center justify-center';
  let sizeStyles = '';
  let variantStyles = '';

  switch (size) {
    case 'sm':
      sizeStyles = 'px-4 py-2 text-sm';
      break;
    case 'lg':
      sizeStyles = 'px-8 py-3 text-lg';
      break;
    case 'md':
    default:
      sizeStyles = 'px-6 py-2.5 text-base';
      break;
  }

  switch (variant) {
    case 'secondary': // Can be used for a distinct action, or remove if not needed. Using primary green for now.
      variantStyles = 'bg-primary-brand text-white hover:bg-secondary-brand-blue focus:ring-primary-brand';
      break;
    case 'outline':
      variantStyles = 'bg-transparent text-primary-brand border border-primary-brand hover:bg-primary-brand hover:text-white focus:ring-primary-brand';
      break;
    case 'primary':
    default:
      variantStyles = 'bg-primary-brand text-white hover:bg-secondary-brand-blue focus:ring-primary-brand';
      break;
  }

  const buttonContent = (
    <>
      {showGoldenShine && <span className="golden-shine-line"></span>}
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">{children}</span>
      {/* Updated gradient to use new green and blue for hover effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary-brand to-secondary-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mix-blend-lighten pointer-events-none"></span>
    </>
  );

  if (to) {
    // Cast props to AnchorHTMLAttributes as Link component accepts these
    return (
      <Link to={to} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    // Cast props to AnchorHTMLAttributes as an anchor tag accepts these
    return (
      <a href={href} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {buttonContent}
      </a>
    );
  }

  // If neither 'to' nor 'href' is provided, render as a button
  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {buttonContent}
    </button>
  );
};

export default Button;