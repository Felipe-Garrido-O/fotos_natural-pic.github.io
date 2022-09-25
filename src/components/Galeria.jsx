import "../assets/css/galeria.css";
import React, { useContext } from 'react';
import Context from '../Context';

export default function Galeria() {

  const {foto, setFoto} = useContext(Context);

  const setLiked = (id) => {
    const fotoIndex = foto.findIndex((f) => f.id === id );
    foto[fotoIndex].liked = !foto[fotoIndex].liked;
    setFoto([...foto]);
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {foto.map((e) => (
        <div className="foto" style={{backgroundImage: `url(${e.src})` }} key={e.id}>
         <svg onClick={()=> setLiked(e.id)} width="40px" viewBox="0 0 24 24">
          <path
            fill={e.liked ? "red" : "white"}
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          />
        </svg>
         <p>{e.desc}</p>
        </div>
      ))}

    </div>
  );
}