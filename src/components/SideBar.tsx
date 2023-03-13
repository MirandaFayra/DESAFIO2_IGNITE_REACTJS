import { Button } from '../components/Button';


export function SideBar() {
  
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