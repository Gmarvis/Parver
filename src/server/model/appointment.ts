export interface Appointment {
  id: string;
  date: Date;
  time: string;
  status: AppointmentStatus;
  customer_id: string;
  provider_id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export enum AppointmentStatus {
  PENDING = "pending",
  APPROVED = "approved",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
  REJECTED = "rejected",
}
