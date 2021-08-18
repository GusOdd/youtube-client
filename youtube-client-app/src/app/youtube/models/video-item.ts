import { IItem } from './item';

export interface IVideoItem extends IItem {
  id: string;
  statistics: {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}
