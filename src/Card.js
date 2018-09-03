import React, { Component } from 'react';
import './index.css';



class Card extends Component {
  render(props) {
    return (<div className="card-item">
     <h3 className="company-name">Company name</h3>
     <img className="puce" src='https://i.imgur.com/8mNCpfE.png' alt="" width="40"/>
    <span className="card-number">{this.props.cardNumber}</span>
    <div className="card-detail"><span className="card-name">{this.props.cardName}</span>
       <div className="card-detail-right">
            <span class="valid-thru">{this.props.cardValidThru}</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt=""width="100"/>
       </div>
      </div>
    </div>
    );
  }
}

export default Card;
