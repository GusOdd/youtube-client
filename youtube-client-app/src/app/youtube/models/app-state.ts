import { ICustomCard } from './custom-card';
import { IVideoItem } from './video-item';

export interface IAppState {
  customCards: ICustomCard[];
  videoItems: IVideoItem[];
}
