import { FC, ReactElement } from 'react';

type ButtonProps = {
  children: ReactElement;
  color: string;
  size: string;
};

export const Button: FC<ButtonProps> = ({ children, color, size }) => {
  return (
    <button style={{ color, fontSize: size === 'xl' ? '32px' : '16px' }}>
      {children}
    </button>
  );
};

type RedButtonProps = ButtonProps & {
  additionalProp1?: string;
  additionalProp2?: number;
};

export const RedButton: FC<RedButtonProps> = ({ children, color, size }) => {
  return (
    <div>
      <Button size={size} color={color}>
        {children}
      </Button>
    </div>
  );
};
