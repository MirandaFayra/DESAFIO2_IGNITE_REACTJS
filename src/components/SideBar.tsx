import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../@types/types';
import { Button } from '../components/Button';
import { api } from '../services/api';

interface SideBarProps {
  selectedGenreId:number;
  handleClickButton:(id:number)=>void;
}


export function SideBar({handleClickButton,selectedGenreId}:SideBarProps  ) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  //Busca da sidebar
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return(
    <>
    {/* Barra Lateral */}
      <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {genres.map(genre => (
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            ))}
          </div>

        </nav>
    </>
  )
}