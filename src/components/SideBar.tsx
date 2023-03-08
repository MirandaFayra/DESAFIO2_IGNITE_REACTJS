import { useState } from "react";
import { GenreResponseProps } from "../App";
import { Button } from '../components/Button';

export function SideBar() {
  /* Está sendo utilizado só na barra lateral */
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  /* Está sendo utilizado só na barra lateral */
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

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