import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string; 
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  if(req.method === 'GET') {
    res.status(200).json({ name: 'GET users' })
  }
  if(req.method === 'POST') {
    res.status(200).json({ name: 'POST users' })
  }
  if(req.method === 'PATCH') {
    res.status(200).json({ name: 'PATCH users' })
  }
  if(req.method === 'DELETE') {
    res.status(200).json({ name: 'DELETE users' })
  }
}