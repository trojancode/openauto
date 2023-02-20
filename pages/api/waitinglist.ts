import { AddUser } from '@/lib/DAO/UserDAO'
import { connectToDatabase } from '@/lib/config/db'
import UserValidation from '@/lib/middleware/UserValidation'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {

    if (req.method != "POST") {
      res.status(404).json({})
    }

    let userres = await AddUser(req.body)

    res.status(200).json({ msg: userres, error: false })
  } catch (error: any) {
    res.status(400).json({ msg: error, success: false })
  }
}

export default connectToDatabase(UserValidation(handler))
