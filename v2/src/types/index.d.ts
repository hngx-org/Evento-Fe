export type UseInView = <T extends Element>(ref: RefObject<T>) => boolean;

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

export interface UserDetails {
  id: string;
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

export interface User {
  userID?: string;
  email?: string;
  bio?: string;
  socialLinks?: socialLinks[];
  profileImage?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  slug?: string;
  role?: string;
  location?: string;
  coverImage?: string;
  isVerified?: boolean;
}

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

interface Participant {
  userID?: string;
  email?: string;
  profileImage?: string;
  firstName?: string;
  lastName?: string;
}

interface Ticket {
  ticketID: string;
  ticketType: string;
  ticketPrice: number;
}

export interface EventProps {
  eventID?: string;
  eventSlug?: string;
  title?: string;
  description?: string;
  imageURL?: string;
  startDate?: string;
  endDate?: string;
  locationType?: string;
  location?: string;
  virtualLocationLink?: string;
  capacity?: number;
  organizerID?: string;
  categoryCategoryID?: string;
  participants?: Participant[];
  Category?: {
    categoryID?: string;
    name?: string;
  };
  tickets?: Ticket[];
}

export interface CategoryProps {
  categoryID: string;
  name: string;
}
