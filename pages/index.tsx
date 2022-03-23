import type { GetStaticProps } from 'next'
import Head from 'next/head';
import ArticleLayout from '../src/layout/article';
import { getContent } from '../src/lib';

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
    <>
      <Head>
        <title>Emprendimiento: Comprendio de Errores de Inicio</title>
        <meta name="description" content="La cultura en la que crecemos muchos latinoamericanos no favorece una mentalidad adecuada frente al emprendimiento. Este escrito pretende ayudar a corregir varios de los errores más comunes que surgen de este problema a la hora de comenzar a emprender." />
        <meta name="keywords" content="Emprendimiento, Emprendedurismo, Latinoamérica, Errores, Comenzar, Comienzo" />
      </Head>
      {Data.error ? <p>Error getting content</p> : <ArticleLayout {...Data} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getContent()
  return {
    props: data
  }
}

export default Home
