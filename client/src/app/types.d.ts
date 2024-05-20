export interface VideoGames {
  data: VideoGame[];
  meta: Meta;
}

export interface VideoGame {
  id: number;
  attributes: VideoGameAttributes;
}

export interface VideoGameAttributes {
  title: string;
  release: Date;
  description: Description[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  platforms: Platforms;
  cover: Cover;
}

export interface Cover {
  data: CoverData;
}

export interface CoverData {
  id: number;
  attributes: CoverAttributes;
}

export interface CoverAttributes {
  url: string;
}

export interface Description {
  type: string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
}

export interface Platforms {
  data: PlatformsData[];
}

export interface PlatformsData {
  id: number;
  attributes: PlatformAttributes;
}

export interface PlatformAttributes {
  name: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface FormattedVideoGamesData {
  id: number;
  title: string;
  release: Date;
  description: string;
  slug: string;
  platforms: PlatformsData[];
  cover: string;
}
