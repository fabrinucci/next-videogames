import { STRAPI_URL } from '@/app/config';
import { VideoGame, FormattedVideoGamesData } from '@/app/types';

export const videoGamesData = (
  data: VideoGame[],
): FormattedVideoGamesData[] => {
  const newData = data.map((videogame) => {
    const { id, attributes } = videogame;
    const { cover, description, slug, title, release, platforms } = attributes;
    const { url } = cover.data.attributes;
    const textDescription = description[0].children[0].text;

    const coverPath = `${STRAPI_URL}${url}`;

    return {
      id,
      slug,
      title,
      release,
      platforms: platforms.data,
      description: textDescription,
      cover: coverPath,
    };
  });
  return newData;
};
