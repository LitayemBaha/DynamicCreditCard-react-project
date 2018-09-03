import React, { Component } from 'react';
import './index.css';

class inputCard extends Component {
  render(props) {
    console.log(this.props)
    return (<form className="input-item">
        <input className="input-text" type="text" placeholder="12222" onChange={(event) => this.props.InputNumber(event)}></input>
        <input className="input-text" type="text" placeholder="foulen" onChange={(event) => this.props.InputName(event)}></input>
        <input className="input-text" type="text" placeholder="15/25" onChange={(event) => this.props.InputValidThru(event)}></input>
        <button className="reset" type="reset" onClick={() => this.props.delate()} >Effacer</button>
  </form>
    );
  }
}

export default inputCard;
