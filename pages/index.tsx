import Link from 'next/link'
import { GetStaticProps } from 'next'
import prisma from '../lib/prisma'
import TypoForm from '../components/TypoForm'
import Layout from '../components/Layout'
import Card from '../components/Card'

const IndexPage = ({ feed }) => (
  <Layout>
    <h1>誤字に夢中！</h1>
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
  </Layout>
);

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({})
  return { props: { feed } }
}

export default IndexPage
