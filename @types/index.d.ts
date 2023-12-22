export type City = {
  name: string;
  image: string;
};
export type Category = {
  topic: string;
  image: string;
};

declare module 'nprogress';

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
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: Function;
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

export type inputErrorMessage = {
  errorMessage: string;
  inputName: string;
  isValid: boolean;
};

export interface Notification {
  id: number;
  text: string;
  read: boolean;
  date: string;
}

export interface NotificationsProps {
  unreadNotifications: (count: number) => void;
  notificationsRef: React.RefObject<HTMLDivElement>;
  notifications: NotificationProps[];
}

export type AuthResponse = {
  token: string;
  user: User;
};

export interface AuthContextProps {
  auth: AuthResponse | undefined;
  email: string;
  redirect: string;
  userCameFrom: string | undefined;
  userCameFromForOAuth: string | undefined;
  handleAuth: (value: AuthResponse | undefined) => void;
  handleEmail: (value: string) => void;
  handleRedirect: (value: string) => void;
  handleUserCameFrom: (value: string | undefined) => void;
  handleUserCameFromForOAuth: (value: string | undefined) => void;
}

export interface AuthorizationResponse {
  userId: string;
  token: string;
  status: number;
}

export interface IsAuthenticatedResult {
  mutate: (token: string) => void;
  authenticatedState?: boolean;
}

export interface CustomError {
  status?: number;
}

export interface EventDataProps {
  title: string;
  description: string;
  imageURL: string;
  startDate: Date;
  endDate: Date;
  time: string;
  location: string;
  capacity: string;
  entranceFee: string;
  eventType: string;
  organizerID: string;
  categoryName: string;
  startTime: string;
  endTime: string;
  virtualLocationLink?: string;
  locationType: 'Physical' | 'Virtual';
  ticketType: 'Free' | 'Premium';
}

export interface UploadResponse {
  timestamp: string;
  success: boolean;
  status: number;
  data: {
    imageURL: string;
  };
  message: string;
}

export interface UploadParams {
  file: File;
}

export interface EventPayload {
  title: string;
  description: string;
  imageURL: string;
  startDate: string;
  endDate: string;
  locationType: 'Physical' | 'Virtual';
  location?: string;
  virtualLocationLink?: string;
  time?: string;
  capacity: number;
  eventType: string;
  organizerID: string;
  categoryName: string;
  ticketType: string;
  ticketPrice: number;
  entranceFee?: number;
  ticketID?: string;
}

export interface EventParticipant {
  userID: string;
  email: string;
  profileImage: string | null;
  firstName: string;
  lastName: string;
}

export interface EventsProps {
  eventID: string;
  title: string;
  description: string;
  imageURL: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  capacity: number;
  entranceFee: number;
  eventType: string;
  organizerID: string;
  categoryCategoryID: string;
  participants: EventParticipant[];
  tickets: {
    ticketID: string;
    ticketPrice: number;
    ticketType: string;
  }[];
}

export type InputRef = React.RefObject<HTMLInputElement>;

export interface CategoryProps {
  categoryID: string;
  name: string;
}

export interface PreferencesProps {
  newsletter: {
    inApp: boolean;
    email: boolean;
    push: boolean;
  };
  event_registration: {
    inApp: boolean;
    email: boolean;
    push: boolean;
  };
  event_invite: {
    inApp: boolean;
    email: boolean;
    push: boolean;
  };
  join_event: {
    inApp: boolean;
    email: boolean;
    push: boolean;
  };
  event_change: {
    inApp: boolean;
    email: boolean;
    push: boolean;
  };
}

export interface Event {
  id: number;
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
}

export interface NotificationProps {
  id: string;
  userId: string;
  type: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface EventManagement {
  eventID: string;
  title: string;
  description: string;
  imageURL: string;
  startDate: string;
  endDate: string;
  locationType: 'Physical' | 'Virtual';
  location: string;
  virtualLocationLink: string;
  capacity: number;
  organizerID: string;
  categoryCategoryID: string;
  organizer: {
    userID: string;
    email: string;
    profileImage: string;
    firstName: string;
    lastName: string;
  };
  participants: {
    userID: string;
    email: string;
    profileImage: string;
    firstName: string;
    lastName: string;
  }[];
  Category: {
    categoryID: string;
    name: string;
  };
  tickets: {
    ticketID: string;
    ticketType: 'Free' | 'Premium';
    ticketPrice: number;
  }[];
}

export interface eventLinkProps {
  eventLink: string;
  title: string;
}

export interface NextAuthProviderProps {
  children: ReactNode;
}

export interface AuthOptions {
  providers: any[];
  pages: {
    signIn: string;
    error: string;
    verifyRequest: string;
    newUser?: string | undefined;
  };
  callbacks: {
    redirect(url: string, baseUrl: string): Promise<string>;
  };
}

export interface ResetPasswordProps {
  userID: string;
  token: string;
}
