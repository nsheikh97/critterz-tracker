import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getPlotsPrice } from "../services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    res.status(200).json(await getPlotsPrice());
  } catch (e: any) {
    res.status(500).json({
      error: e,
    });
  }
}
