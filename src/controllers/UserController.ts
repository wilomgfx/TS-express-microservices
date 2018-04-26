import { Request, Response } from 'express';

  
export const list = (req: Request, res: Response) => {
  return res.json({
    data : {
      users: [
        { name : 'John Doe', age: 21, city : 'Montreal' },
        { name : 'Jane Doe', age: 21, city : 'vachier' },
        { name : 'Baba', age: 21, city : 'tamere' },
      ],
    },
  });
};


export const create = (req: Request, res: Response) => {
  return res.json({
    data : {
      users: [
        { name : 'John Doe', age: 21, city : 'Montreal' },
        { name : 'Jane Doe', age: 21, city : 'vachier' },
        { name : 'Baba', age: 21, city : 'tamere' },
      ],
    },
  });
};
