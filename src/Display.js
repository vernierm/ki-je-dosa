import React from 'react';
import './Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: 0,
    };

    this.setCurrentItem = this.setCurrentItem.bind(this);
  }

  setCurrentItem(i) {
    const itemsLength = this.props.items.length;
    if (i < 0 || i > itemsLength - 1) {
      console.log('dev error: item out of range');
      return;
    }

    this.setState({
      currentItem: i,
    });
  }

  render() {
    const i = this.state.currentItem;
    const itemsLength = this.props.items.length;
    const indices = [
      i,
      (i + 1) % itemsLength,
      (i + 2) % itemsLength,
      (i + 3) % itemsLength,
      (i + 4) % itemsLength,
      (i + 5) % itemsLength
    ];
    return (
        <div>
          <p>{this.props.items[indices[indices[0]]].male} i {this.props.items[indices[1]].female} {this.props.items[indices[2]].where} {this.props.items[indices[3]].doingWhat}, dojde {this.props.items[indices[4]].thirdPerson} i reče `{this.props.items[indices[5]].statement}!`</p>
          <p>[{i + 1} / {itemsLength}]</p>
          <div>
            <button className="Display-button" onClick={()=>this.setCurrentItem(i - 1)} disabled={i<=0}>nazad</button>
            <button className="Display-button" onClick={()=>this.setCurrentItem(i + 1)} disabled={i>=itemsLength-1}>naprid</button>
          </div>
        </div>
    );
  }
}

export default Display;