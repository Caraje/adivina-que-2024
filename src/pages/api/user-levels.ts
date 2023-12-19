import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string; 
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  if(req.method === 'GET') {
    res.status(200).json({ name: 'GET user-levels' })
  }
  if(req.method === 'POST') {
    res.status(200).json({ name: 'POST user-levels' })
  }
  if(req.method === 'PATCH') {
    res.status(200).json({ name: 'PATCH user-levels' })
  }
  if(req.method === 'DELETE') {
    res.status(200).json({ name: 'DELETE user-levels' })
  }
}