export interface Contribution {
  year: number;
  data: {
    paid: number | null;
    due: number | null;
    advancePayment: number | null;
    modularity: number | null;
  };
}
