import { GetStaticPaths, GetStaticProps } from 'next';
import attractionsData from '../../data/ThingsToDo.json';
import { Attraction } from '@/types/types';

const AttractionDetailPage = ({ attraction }: { attraction: Attraction | null }) => {
  if (!attraction) {
    return <div>Attraction not found</div>;
  }

  return (
    <div>
      <h1>{attraction.name}</h1>
      <p>{attraction.description}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = attractionsData.map((attraction) => ({
    params: { id: attraction.id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const attraction = attractionsData.find((a) => a.id === id);

  return {
    props: { attraction: attraction || null },
  };
};

export default AttractionDetailPage;