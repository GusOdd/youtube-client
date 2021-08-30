import { IResults } from './results';
import { IVideoItem } from './video-item';

export interface IVideoResults extends IResults {
  items: IVideoItem[];
}
