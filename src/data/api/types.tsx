export type Question = {
  data: never[];
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

type Image = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: Image;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Categories = {
  data: Category[];
  meta: {
    pagination: Pagination;
  };
};
