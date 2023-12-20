import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string; 
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  if(req.method === 'GET') {
    res.status(200).json({ name: 'GET categories' })
  }
  if(req.method === 'POST') {
    res.status(200).json({ name: 'POST categories' })
  }
  if(req.method === 'PATCH') {
    res.status(200).json({ name: 'PATCH categories' })
  }
  if(req.method === 'DELETE') {
    res.status(200).json({ name: 'DELETE categories' })
  }
}