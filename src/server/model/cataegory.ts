export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}
