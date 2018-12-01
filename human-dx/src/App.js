import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWindowClose } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)
library.add(faWindowClose)

class App extends Component {

  state = {
    todoList: [
      {
        text: 'This is simple item'
      },
      {
        text: 'This is completed simple item',
        isCompleted: true
      },
      {
        text: 'This is complex item',
        children: [
          {
            text: 'This is nested item',
            children: [
              {
                text: 'This is 2-level nested item'
              }
            ]
          },
          {
            'text': 'This completed is nested item'
          }
        ]
      }
    ]
  }

  onChange = (newList) => {
    this.setState({
      todoList: newList
    })
  }

  render() {
    return <div className="container">
      <h1 className="title">
        Human Dx Todo List
      </h1>
      <TodoList data={this.state.todoList} onChange={this.onChange}/>
    </div>
  }

  // render() {
  //   return (
  //     <section className="section">
  //       <div className="container">
  //         {/* <h1 className="title">
  //           Hello World
  //         </h1> */}
  //         <p className="title">
  //           Kanban<strong>Bot</strong>
  //         </p>

  //           <form>
  //             <div className="field">
  //               <p className="control has-icons-left">
  //                 <span className={'select ' + (this.state.isLoading && 'is-loading') }>
  //                   <select value={this.state.swimlanes.map(x => x.uniqueId).includes(this.state.activeSwimlaneId) ? this.state.activeSwimlaneId : 'none'} onChange={this.setactiveSwimlaneId}>
  //                     <option value="none">Select Swimlane</option>
  //                     {
  //                       this.state.swimlanes.map(swimlane => (
  //                         <option value={swimlane.uniqueId}>{swimlane.name}</option>
  //                       ))
  //                     }
  //                   </select>
  //                 </span>
  //               </p>
  //             </div>

              

  //             {
  //               Object.keys(this.state.emailList).map(i =>  (
  //                 <div className="field has-addons">
  //                   <div className="control has-icons-left has-icons-right">
  //                     <input className="input" type="email" placeholder="E-mail" value={this.state.emailList[i]} onChange={this.updateEmail(i)} style={{minWidth: '400px'}} />
  //                   </div>
  //                   <p className="control">
  //                     <button className="button" type="button" onClick={this.deleteEmail(i)}>
  //                       X
  //                     </button>
  //                   </p>
  //                 </div>)
  //               )
  //             }

  //             { !this.state.isLoading && 
  //               <div className="field">
  //                 <button type="button" className="button" onClick={this.addEmail}>
  //                   Add Email
  //                 </button>
  //               </div>
  //             }

  //             <br/>
  //             <br/>
  //             <br/>

  //             { !this.state.isLoading && 
  //               <div className="field">
  //                 <button type="button" className="button is-primary" onClick={this.addEmail} disabled={!this.state.hasUnsavedChanges} onClick={this.save}>
  //                   Save
  //                 </button>
  //                 {/* <button type="button" className="button" onClick={this.addEmail} disabled={!this.state.hasUnsavedChanges} onClick={this.reset()}>
  //                   Reset
  //                 </button> */}
  //               </div>
  //             }
  //           </form>
  //       </div>
  //     </section>
  //   );
  // }
}

export default App;
