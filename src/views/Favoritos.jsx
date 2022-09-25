import {useContext} from 'react';
import Context from '../Context';

export default function Favoritos() {

  const {foto} = useContext(Context)
  
    return (
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
          {foto.filter((e)=> e.liked 
          ).map((e) =>(
            <img src={e.src} alt="imgs favoritas" key={e.id} />
          ) )}
         
        </div>
      </div>
    );
  }