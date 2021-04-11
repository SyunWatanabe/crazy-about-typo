import Link from 'next/link'
import { GetStaticProps } from 'next'
import prisma from '../lib/prisma'
import TypoForm from '../components/TypoForm'
import Layout from '../components/Layout'

const IndexPage = ({ feed }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Crazy About Typo</h1>
    <TypoForm />
    <ul>
    {feed.map(f => {
      return (
        <>
          <li>{f.typo}</li>
          <li>{f.correct}</li>
        </>
      )
    })}
    </ul>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({})
  return { props: { feed } }
}

export default IndexPage
