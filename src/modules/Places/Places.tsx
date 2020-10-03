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
          "rating": "5"
      },
      {
          "name": "Sorvete Schmitt", 
          "image": "https://picsum.photos/200",
          "rating": "5"
      },
      {
          "name": "Museu da Água", 
          "image": "https://picsum.photos/200",
          "rating": "4"
      },
      {
          "name": "Museu Hering", 
          "image": "https://picsum.photos/200",
          "rating": "4"
      },
      {
          "name": "Galinha Kazulke", 
          "image": "https://picsum.photos/200",
          "rating": "3"
      },
      {
          "name": "Prainha", 
          "image": "https://picsum.photos/200",
          "rating": "3"
      }
    ];
    return (
      <div className="container-fluid">
        <h2>Monte seu roteiro</h2>  
        <div className="container-fluid">
          {places.map(p => 
            <>
              <div className="row p-2" key={p.name}>
                <div className="place row">
                  <div className="align-middle">
                    <input type="checkbox"></input>
                  </div>  
                  <div>
                    <img className="place-img rounded" alt="Imagem do local" src={p.image}/>                        
                  </div>

                  <div className="place-details">
                    <span className="place-name">{p.name}</span>
                    <img className="place-rating row w-25" alt="Avaliação" src={process.env.PUBLIC_URL + `/images/rating/${p.rating}.png`}/>
                  </div>
                </div>
                <div className="row">
                    <p>
                      ow-income nobodies totally outrageous paradigm menapplause bagzooka homerhol
                      homerhol paradigm no ones pinching his legs not back, avenge deaths doobob 
                    </p>
                  </div>
              </div>
              <hr/>
            </>)
          }
        </div>
      </div>
    )
  }

}

export default Places;
