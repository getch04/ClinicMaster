import { NextApiRequest, NextApiResponse } from 'next';
import { getHeroData } from "../services/heroService";

export const getHeroDataHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = req.query.id as string;
  try {
    const user = await getHeroData(userId);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
