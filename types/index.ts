export interface Post {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  likeCount: number;
  selectedFile: string;
  createdAt?: Date;
  updatedAt?: Date;
}
