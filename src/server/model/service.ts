export interface Service {
  id: string;
  name: string;
  workspace_id: string;
  description: string;
  price: number;
  duration: number;
  tags: Array<string>;
  category_id: string;
  createdAt: Date;
  updatedAt: Date;
}
