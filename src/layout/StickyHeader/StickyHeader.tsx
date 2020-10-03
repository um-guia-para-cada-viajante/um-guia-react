import React from 'react';

import './StickyHeader.scss';

class StickyHeader extends React.Component {

  render() {
    return (
      <header>
        <div className="actions">
          <button className="toggle-sidebar">
            Botao
          </button>

          <button className="open-settings">
            Botao 2
          </button>
        </div>

        <div className="avatar">
          <img src="https://avatars1.githubusercontent.com/u/42852671"/> 
        </div>
      </header>
    )
  }

}

export default StickyHeader;
