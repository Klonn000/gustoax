import React, { Component } from 'react'

export class ShowFullItem extends Component {
  
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={this.props.item.img} alt={'device'} onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2 className='item_title'>{this.props.item.title}</h2>
            <h2 className='item_desc'>{this.props.item.desc}</h2>
            <h2 className='item_price'>{this.props.item.price}</h2>
        </div>
        <span className='add-to-cart-b' onClick={() => this.props.onAdd(this.props.item)}>+</span>
      </div>
    )
  }
}

export default ShowFullItem