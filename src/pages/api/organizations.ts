import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import https from 'https'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    })

    const response = await axios.get(
      'https://localhost:7177/api/organizations',
      {
        httpsAgent: agent,
      }
    )

    const data = response.data

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default handler
