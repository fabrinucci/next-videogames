import { API_URL } from '@/app/config';
import type {
  FormattedVideoGamesData,
  VideoGames,
  Pagination,
} from '@/app/types';
import { videoGamesData } from '@/utils';

interface GetVideoGamesProps {
  data: FormattedVideoGamesData[];
  pagination: Pagination;
}

export const getVideoGames = async (): Promise<GetVideoGamesProps> => {
  try {
    const res = await fetch(
      `${API_URL}/video-games?populate[platforms][fields][0]=name&populate[cover][fields][0]=url`,
    );

    const { data, meta } = (await res.json()) as VideoGames;
    const newData = videoGamesData(data);
    return {
      data: newData,
      pagination: meta.pagination,
    };
  } catch (error) {
    console.error('Error fetching video games:', error);
    throw new Error('Failed to retrieve video games data');
  }
};
