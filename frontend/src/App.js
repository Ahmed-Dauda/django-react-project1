
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     <h1>This is my first react project 2</h1>
//     <h1>This is my first react project 2</h1>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from "react"

// const todoItems = [
//   {
//     id: 1,
//     title: "Nature walk in the park",
//     description: "Visit the park with my friends",
//     completed: true
//   },

//   {
//     id: 2,
//     title: "Visit",
//     description: "Got to my aunt's place",
//     completed: true
//   },

//   {
//     id: 3,
//     title: "Write",
//     description: "Do an article about anthropology",
//     completed: true
//   },
// ];

// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {todoItems};
//     };

//     render() {
//       return (
//         <main className="content">
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <ul className="list-group list-group-flush">
//               {this.state.todoItems.map(item => (
//               <div>
//                 <h1>{item.title}</h1>
//                 <span>{item.description}</span>
//               </div>
//               ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//       )
//     }
//   }
  
// export default App;
// hghghghg

import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('https://aboutahmed.herokuapp.com/api/todos/');
        const todoList = await res.json();
        this.setState({
          todoList
        });
      } catch (e) {
        console.log(e);
    }
    }
    renderItems = () => {
      const { viewCompleted } = this.state;
      const newItems = this.state.todoList.filter(
        item => item.completed === viewCompleted
      );
      return newItems.map(item => (
        <li 
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span 
            className={`todo-title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.description}
            >
              {/* <h1>Reasons why I like Reactjs</h1> */}
              <h1>{item.title}</h1> 
              <p>{item.description}</p>
            </span>
        </li>
      ));
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }
  
export default App;