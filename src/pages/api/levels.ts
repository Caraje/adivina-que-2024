import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string; 
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  if(req.method === 'GET') {
    res.status(200).json({ name: 'GET levels' })
  }
  if(req.method === 'POST') {
    res.status(200).json({ name: 'POST levels' })
  }
  if(req.method === 'PATCH') {
    res.status(200).json({ name: 'PATCH levels' })
  }
  if(req.method === 'DELETE') {
    res.status(200).json({ name: 'DELETE levels' })
  }
}