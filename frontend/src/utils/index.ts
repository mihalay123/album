import { ImageType } from '../../pages';

export const sortByDate = (images: ImageType[], isASC: boolean) => {
  const newImages = images.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    const timeA = dateA.getTime();
    const timeB = dateB.getTime();

    if (timeA < timeB) {
      return isASC ? -1 : 1;
    }

    if (timeA > timeB) {
      return isASC ? 1 : -1;
    }

    return 0;
  });
  return newImages;
};

export const search = (images: ImageType[], searchLine: string) => {
  if (searchLine.length === 0) {
    return images;
  }
  return images.filter((image) => {
    const title = image.title.toLowerCase();
    return title.indexOf(searchLine.toLowerCase()) > -1;
  });
};
