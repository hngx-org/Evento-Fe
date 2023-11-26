import React, { ReactNode } from 'react';
import { useId } from 'react';
import { clsx } from 'clsx';
import Label from '../ui/Label';

interface BaseInputProps {
  label?: string;
  type?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  valid?: boolean;
  className?: string;
  errorText?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  inputHeight?: string;
  backgroundColor?: string;
  textArea?: boolean;
  [key: string]: any;
}

const Input: React.FC<BaseInputProps> = (props) => {
  const {
    label,
    type = 'text',
    error = false,
    required = false,
    disabled = false,
    valid = false,
    className = '',
    errorText = '',
    rounded = 'lg',
    inputHeight,
    backgroundColor,
    textArea = false,
    ...rest
  } = props;

  const id = useId();

  const styles = {
    base: ' flex-1 appearance-none  w-full py-4 px-4 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
    state: {
      normal: 'placeholder-gray-400 border border-gray-300 focus:ring-purple-600',
      error: 'border border-red-200 focus:ring-red-200',
      valid: 'border border-green-600 focus:ring-green-750',
      disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400',
    },
    rounded: {
      none: null,
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
  };

  return (
    <div className={clsx('relative', className)}>
      {label && (
        <Label id={id}>
          {label} {required && '*'}
        </Label>
      )}

      {textArea ? (
        <textarea
          id={id}
          className={clsx(
            [
              styles.base,
              rounded && styles.rounded[rounded],
              error ? styles.state.error : styles.state.normal,
              valid ? styles.state.valid : styles.state.normal,
              disabled && styles.state.disabled,
            ],
            inputHeight,
            backgroundColor,
          )}
          disabled={disabled}
          required={required}
          {...rest}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={clsx(
            [
              styles.base,
              rounded && styles.rounded[rounded],
              error ? styles.state.error : styles.state.normal,
              valid ? styles.state.valid : styles.state.normal,
              disabled && styles.state.disabled,
            ],
            inputHeight,
            backgroundColor,
          )}
          disabled={disabled}
          required={required}
          {...rest}
        />
      )}

      {error && <p className="mt-2 text-sm text-red-600">{errorText}</p>}
    </div>
  );
};

export default Input;
