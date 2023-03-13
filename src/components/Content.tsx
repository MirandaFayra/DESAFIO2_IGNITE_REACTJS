import { useEffect, useState } from 'react';
import { GenreResponseProps, MovieProps } from '../App';
import { MovieCard } from '../components/MovieCard';
import { api } from '../services/api';


// Interface onde tipamos e organizamos as props

interface ContentProps {
  selectedGenreId:number;
  selectedGenre:GenreResponseProps
}


// Por que desestruturou o selectId?
export function Content({selectedGenreId, selectedGenre}:ContentProps) {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);


  return (
    <>
    {/* Conteúdo princiapal com os cards */}

      <div className="container">
          <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>

          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
        </div>
    </>
  )
}