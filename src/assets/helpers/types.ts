type dogType = {
  id: string;
  url: string;
  breeds: Array<{
    id: number;
    name: string;
  }>;
  width: number;
  height: number;
};



export type { dogType };
