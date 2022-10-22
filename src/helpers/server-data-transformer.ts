export const serverDataTransformer = (serverData: any): any[] => {
  const result = [];
  for (const key in serverData) {
    const serializedData: any = {
      id: key,
    };

    for (const innerKey in serverData[key]) {
      serializedData[innerKey] = serverData[key][innerKey];
    }

    result.push(serializedData);
  }

  return result;
};
