import { useEffect, useState } from 'react';
import { Contribution } from '../interfaces';

export const useCurrentContribution = (
  contribution: Contribution[],
  year: number
): Contribution => {
  const [currentContribution, setCurrentContribution] = useState<Contribution>(contribution[0]);

  useEffect(() => {
    const current: Contribution[] = contribution.filter((item) => item.year === year);

    setCurrentContribution(current[0]);
  }, [contribution, year]);

  return currentContribution;
};
