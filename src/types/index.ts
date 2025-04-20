export interface ServiceProvider {
  id: string;
  alias: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  location: string;
  tags: string[];
  bio: string;
  services: Service[];
  availability: Availability;
  reviews: Review[];
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  price: number;
  duration: number;
  description: string;
  imageUrl?: string; // Added imageUrl as optional property
}

export interface Availability {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
}

export interface Booking {
  id: string;
  providerId: string;
  serviceId: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  location?: string;
}

export interface User {
  isProvider: boolean;
  favoriteProviders: string[];
  bookings: string[];
}

export type Theme = "dark" | "light" | "pastel" | "gradient";

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
}
