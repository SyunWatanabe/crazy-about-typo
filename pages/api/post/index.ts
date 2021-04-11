import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

type Post = {
  typo: string;
  correct: string;
}

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Post | ErrorResponse>
) {

  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknow',
        message: 'This endpoint only responds to Post'
      }
    })
  }

  const { typo, correct } = req.body;

  const result = await prisma.post.create({
    data: {
      typo: typo,
      correct: correct,
    },
  });

  res.json(result);
}
