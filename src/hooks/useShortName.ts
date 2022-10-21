import { useEffect, useState } from 'react';

export const useShortName = (fullName?: string) => {
  const [shortName, setShortName] = useState('');
  useEffect(() => {
    if (fullName) {
      const namesArray = fullName.split(' ');

      namesArray[1] = namesArray[1].slice(0, 1) + '.';

      setShortName(namesArray.join(' '));
    }
  }, [fullName]);

  return {
    shortName,
  };
};
