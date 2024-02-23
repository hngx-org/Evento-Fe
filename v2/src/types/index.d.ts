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

export interface UserProfile2 {
  userID?: string;
  email?: string;
  bio?: string;

  profileImage?: string | Blob | File;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  slug?: string;
  role?: string;
  location?: string;
}

export interface UserProfile {
  userID: string;
  email: string;
  bio: string;
  coverImage?: string;

  profileImage: string;
  displayName: string;
  firstName: string;
  lastName: string;
  slug: string;
  role: string;
  location: string;
}
export interface socialLinks {
  facebookURL?: string;
  instagramURL?: string;
  twitterURL?: string;
  websiteURL?: string;
}

export type participantType = {
  userID: string;
  email: string;
  profileImage: string | null;
  firstName: string;
  lastName: string;
};

export type eventType = {
  eventID?: string;
  title?: string;
  description?: string;
  imageURL?: string;
  startDate: string;
  endDate?: string;
  time?: string;
  location?: string;
  locationType: string;
  capacity?: number;
  entranceFee?: number;
  eventType?: string;
  organizerID: string;
  categoryCategoryID?: string;
  participants?: participantType[];
};