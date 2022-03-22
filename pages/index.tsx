import type { GetStaticProps } from 'next'
import ArticleLayout from '../src/layout/article';

interface Data {
  title: string;
  subtitle: string;
  description: string;
  index: { name: string; link: string }[];
  content: string;
  error?: string;
}

const Home = (Data: Data) => {
  return (
    Data.error ? <p>Error getting content</p> : <ArticleLayout {...Data} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const get = await fetch('http://localhost:3000/api/content');
  const data = await get.json()
  return {
    props: data
  }
}

export default Home
