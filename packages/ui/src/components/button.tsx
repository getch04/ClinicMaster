'use client';
import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import clsx from 'clsx';

interface CustomButtonProps extends ButtonProps {
  className?: string;
}

export const MButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={clsx(
        'text-[var(--mantine-text-color)]  focus:bg-[var(--mantine-color-primary-6)] bg-[var(--mantine-color-primary-4)]',
        className,
      )}
    >
      {children}
    </Button>
  );
};
