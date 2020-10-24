import React from 'react';
import './Places.scss';

class Places extends React.Component {
  public signin() {
    
  }

  render() {
    const places = [
      {
          "name": "Museu da Cerveja", 
          "image": "https://picsum.photos/200",
          "rating": "5",
          "description": "Croissant fruitcake jujubes cupcake chocolate danish. Powder sesame snaps cotton candy biscuit pudding pastry."
      },
      {
          "name": "Sorvete Schmitt", 
          "image": "https://picsum.photos/200",
          "rating": "5",
          "description": "Ice cream marzipan tootsie roll cheesecake. Brownie wafer liquorice sweet roll tiramisu tart chupa chups bonbon."
      },
      {
          "name": "Museu da Água", 
          "image": "https://picsum.photos/200",
          "rating": "4",
          "description": "Cake donut jelly-o cotton candy tart fruitcake. Sweet marzipan marshmallow donut lollipop cake sugar plum. "
      },
      {
          "name": "Museu Hering", 
          "image": "https://picsum.photos/200",
          "rating": "4",
          "description": "Jelly-o cheesecake pastry dragée sesame snaps liquorice. Halvah macaroon marzipan."
      },
      {
          "name": "Galinha Kazulke", 
          "image": "https://picsum.photos/200",
          "rating": "3",
          "description": "Chocolate caramels ice cream jelly."
      },
      {
          "name": "Prainha", 
          "image": "https://picsum.photos/200",
          "rating": "3",
          "description": "Fruitcake tootsie roll dragée chocolate cake jelly beans pastry."
      }
    ];
    return (
      <div className="container-fluid places">
        <h2 className="text-center p-2">Monte seu roteiro</h2>
        <hr className="division"/>  
        {places.map(p => 
          <>
            <div className="container-fluid">
                <div className="row">
                  <div className="col-5">
                    <img className="place-img rounded" alt={`Imagem do local ${p.name}`} src={p.image}/>                        
                  </div>
                  <div className="col-7">
                    <h4 className="row">{p.name}</h4>
                    <img className="row rating" alt="Avaliação" src={process.env.PUBLIC_URL + `/images/rating/${p.rating}.png`}/>
                  </div>
                </div>
                <div className="row pl-3 pr-3 mt-2">
                  <p>{p.description}</p>
                </div>
                <div className="row justify-content-around">
                  <button className="btn btn-primary">Selecionar</button>
                  <button className="btn btn-outline-secondary">Saiba mais</button>
                </div>
            </div>
            <hr/>
          </>)
        }
      </div>
    )
  }

}

export default Places;
