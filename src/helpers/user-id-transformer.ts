export const userIdTransformer = (id: string): string => {
  const idArray: string[] = id.split('');

  return idArray.slice(0, 7).join('') + '...';
};
