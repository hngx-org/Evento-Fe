export type City = {
  name: string;
  image: string;
};
export type Category = {
  topic: string;
  image: string;
};

export type Events = {
  image: string;
  date: string;
  eventName: string;
  location: string;
  amount: string;
  eventType: string;
};

export type Select = {
  options: { name: string }[];
  color: 'light' | 'dark';
  type: 'tel' | 'normal';
  selected: { name: string; path?: string };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
      path?: string;
    }>
  >;
  handleSelect: Function;
};

export type Switch = {
  defaultValue: boolean;
};
export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  title?: string;
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}

export type ToastPosition = 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
export type ToastTheme = 'light' | 'dark' | 'colored';
export type ToastVariant = 'info' | 'success' | 'warning' | 'error' | 'default';
export interface ToastProps {
  message?: string;
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: ToastTheme;
  type?: ToastVariant;
}

export type Data = {
  title: string;
  description: string;
  buttonText: string;
};

// Password interface
export interface PasswordPopoverProps {
  password: string;
  children: React.ReactNode;
}

export interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

export interface ProgressBarProps {
  color: string;
  value: number;
}
