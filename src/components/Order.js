import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img} alt={'device'}/>
        <h2 className='item_title'>{this.props.item.title}</h2>
        <h2 className='item_price'>{this.props.item.price}</h2>
        <FaTrash className='delete' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order