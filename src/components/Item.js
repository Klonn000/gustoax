import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img} alt={'device'} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2 className='item_title'>{this.props.item.title}</h2>
        <h2 className='item_desc'>{this.props.item.desc}</h2>
        <h2 className='item_price'>{this.props.item.price}</h2>
        <span className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</span>
      </div>
    )
  }
}

export default Item;