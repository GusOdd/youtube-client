import { IThumbnail } from './thumbnail';

export interface IItem {
  etag: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: IThumbnail;
      high: IThumbnail;
      maxres: IThumbnail;
      medium: IThumbnail;
      standard: IThumbnail;
    };
    title: string;
  };
}
