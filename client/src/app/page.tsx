import { getVideoGames } from '@/services/game';
import { Pagination } from './components/Pagination';

interface Props {
  searchParams: {
    page: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const { page } = searchParams;

  const { data: games, pagination } = await getVideoGames({ page: +page || 1 });

  return (
    <main className='flex min-h-screen flex-col px-24 py-16 items-center'>
      <h2 className='text-3xl font-bold mb-10'>Video Games</h2>

      <div className='grid lg:grid-cols-2 gap-6 mb-10'>
        {games?.map((videogame) => {
          const { id, cover, description, slug, title, platforms } = videogame;
          return (
            <a
              key={id}
              href={`videogame/${slug}`}
              className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <img
                className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
                src={cover}
                alt={title}
              />
              <div className='flex flex-col justify-between p-4 leading-normal'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {title}
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {description}
                </p>
                <ul className='flex flex-wrap gap-4'>
                  {platforms.map((p) => (
                    <li key={p.id}>{p.attributes.name}</li>
                  ))}
                </ul>
              </div>
            </a>
          );
        })}
      </div>
      <Pagination pagination={pagination} />
    </main>
  );
}
