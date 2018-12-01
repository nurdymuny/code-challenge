import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex } from 'rebass'

export default class TodoList extends Component {

  onCheck = (item) => {
    const { data, onChange } = this.props

    const index = data.indexOf(item)
    data[index].isCompleted = !(data[index].isCompleted || this.forceIsCompleted)

    onChange(data)
  }

  onTextChange = (item, newText) => {
    const { data, onChange } = this.props

    const index = data.indexOf(item)
    data[index].text = newText.target.value

    onChange(data)
  }

  onRemove = (item) => {
    const { data, onChange } = this.props

    const index = data.indexOf(item)
    data.splice(index, 1)

    onChange(data)
  }

  onAddNew = () => {
    const { data, onChange } = this.props

    data.push({text: ""})
    onChange(data)
  }

  onChildChange = (item, newChildren) => {
    const { data, onChange } = this.props

    const index = data.indexOf(item)
    data[index].children = newChildren

    onChange(data)
  }

  onAddChild = (item) => {
    const { data, onChange } = this.props

    const index = data.indexOf(item)
    data[index].children = [{
      text: "0"
    }]

    onChange(data)
  }

  render() {

    const { data } = this.props

    return <React.Fragment>

      {data.map(listItem => (
        <React.Fragment>
          <div className="field has-addons" key={data.indexOf(listItem)}>
            <div className="control">
              <a className={"button " + ((listItem.isCompleted || this.forceIsCompleted) && "is-success")} onClick={() => this.onCheck(listItem)}>
                <FontAwesomeIcon icon="check"/>
              </a>
            </div>
            <div className="control">
              <input className="input" type="text" placeholder="Todo item" 
                value={listItem.text}
                onChange={(newText) => this.onTextChange(listItem, newText)} />
            </div>
            <div className="control">
              <a className="button" onClick={() => this.onRemove(listItem)}>
                X
              </a>
            </div>
          </div>

          {listItem.children && listItem.children.length > 0 && (
            <div class="nested">
              <TodoList 
                data={listItem.children} 
                onChange={(newChildren) => this.onChildChange(listItem, newChildren)}
                forceIsCompleted={this.forceIsCompleted || listItem.isCompleted}
              />
            </div>
          )}

          {!listItem.children && (
            <div class="nested">
              <button className="button button-add" onClick={() => this.onAddChild(listItem)}>
                +
              </button> 
            </div>
          )}

        </React.Fragment>
      ))}
        
      <button className="button button-add" onClick={this.onAddNew}>
        +
      </button> 

    </React.Fragment>
  }
}