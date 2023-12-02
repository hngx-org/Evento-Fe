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
  onChange?: (e: any) => void;
  name?: string;
  value?: any;
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
    onChange,
    name,
    value,
    ...rest
  } = props;

  const id = useId();

  const styles = {
    base: ' flex-1 appearance-none  w-full py-4 px-4 bg-white text-[#3C3C3C]  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
    state: {
      normal: 'placeholder-[text-[#959595] border border-gray-300 focus:ring-purple-600',
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

  // function adjustHeight(el:<HTMLTextAreaElement>) {
  //   el.style.height = el.scrollHeight > el.clientHeight ? el.scrollHeight + 'px' : '60px';
  // }
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
          // type={type}
          onChange={onChange}
          name={name}
          value={value}
          className={clsx(
            [
              styles.base,
              rounded && styles.rounded[rounded],
              error ? styles.state.error : styles.state.normal,
              valid ? styles.state.valid : styles.state.normal,
              disabled && styles.state.disabled,
            ],
            'max-h-[195px]',
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
          onChange={onChange}
          name={name}
          value={value}
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
