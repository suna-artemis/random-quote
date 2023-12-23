import { CSSProperties, ReactNode } from 'react';

import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary';

  className?: string;
  children?: ReactNode;
  style?: CSSProperties;

  onClick?: () => void;
}
const Button = ({
  theme = 'primary',
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      data-testid={'button'}
      {...rest}
      className={cn(['button', className])}>
      {children}
    </button>
  );
};

export default Button;
