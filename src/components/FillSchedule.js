import React from "react"
import "../css/FillSchedule.css"

/*
 * Currently, FillSchedule is a grid where you can select your
 * availibility. Right now, you can select and unselect grid entries.
 * What needs to be changed:
 *   - Need to add dates at top of grid corresponding to dates chosen
 *     by event creator.
 *   - Need to make the grid dynamically allocated so that the grid has the
 *     number of columns equal to the number of days chosen by the event creator.
 *   - Need to change how grid displays when a user selects it so that instead
 *     of containing an 'X' when selected, it will change color or something
 *     along that style.
 */

function Entry(props) {
  return (
    <button className="entry" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function DateEntry(props) {
  return (
    <div className="dateEntry">
      date
      {props.value1}
    </div>
  )
}

function TimeEntry(props) {
  return (
    <div className="dateEntry">
      {props.value2}
    </div>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: Array(100).fill(null), // should this be array(100) or should there not be a specific sizE??
      dateEntries: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],  // put each date here
      timeEntries: ["6:00 AM", "7:00 AM", "8:00 AM",
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
        "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
        "9:00 PM", "10:00 PM"]
    }
  }

  // handleClick(i) {
  //   console.log("clicked!")
  //   const entries = this.state.entries.slice()
  //   this.state.entries[i] === null ? (entries[i] = "X") : (entries[i] = null)
  //   this.setState({
  //     entries: entries,
  //   })
  // }

  // loopDates(i){

  // }

  // updateDateEntries() {
  //   const tempEntries = this.state.dateEntries.slice()
  //   tempEntries = ["theDate", "the next date", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  //   this.setState({
  //     dateEntries: tempEntries
  //   })
  // }

  renderEntry(i) {
    return (
      <Entry
       // value={this.state.entries[i]}
        onClick={(event) => {
          event.target.style.background =
            event.target.style.background === "skyblue" ? "white" : "skyblue"
        }}
      />
    )
  }

  renderDateEntry(i) {
    return (
      <DateEntry
        value1={this.state.dateEntries[i]}
      />
    )
  }

  renderTimeEntry(i) {
    return (
      <TimeEntry
        value2={this.state.timeEntries[i]}
      />
    )
  }

  render() {
    const status = "Your availibility:"
    let rows = []
    let dateRows = []
    const numCols = 6 // would just need arathi's num from the calendar
    let dateChildren = []
    let timeI = 0
    for (let r = 0; r < 17; r++) {
      let children = []
      let scale = r * numCols
      for (let c = 0 + scale; c < numCols + scale; c++) {
        if ((c + scale) % scale === 0 || c === 0)
        {
          children.push(this.renderTimeEntry(timeI))
          timeI++
        }
        else {
          children.push(this.renderEntry(c))
        }
      }

      rows.push(
          <div key={r} className="board-row">
            {children}
          </div>
      )
    }
    // creating the row of dates below
    for (let c = 0; c < numCols; c++) {
      dateChildren.push(this.renderDateEntry(c))
    }
    dateRows.push(
      <div key={0} className="board-row">
            {dateChildren}
      </div>
    )

    // let dateChildren = []
    // for (let dc = 0; dc < numCols; dc++)
    // {
    //   dateChildren.push(
    //     <div key={dc} className="dates"></div>
    //   )
    // }

    return (
      <div>
        <div className="status">{status}</div>
        {/* <div className="dates">{dateChildren}</div> */}
        <div>{dateRows}</div>
        {/* <p>Test, above are the dates</p> */}
        <div>{rows}</div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    )
  }
}

export default Game

/*CONCERNS
- I need to use some sort of onClick() thing, but I am not sure
if we want users to be able to drag their availibity or if they
would have to click each box (each hr) of their availibility
- I need to get data from the setupCal (I need to see how many
days the event planner chose; how do I do this?)
- Need to make box change color when its selected
*/
// How do i get this to displayyyyyyy...

// ========================================

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<Game />);

//export default FillSchedule

// function FillSchedule(props)
// {
//     return(
//         <div class="grid-container">
//         <button className="gridEntry" onClick={props.handleClick}>
//         Click Me
//           </button>
//           <div class="div1">1b</div>
//           <div class="div2">2a</div>
//           <div class="div2">2b</div>
//           <div class="div3">3a</div>
//           <div class="div3">3b</div>
//           <div>4a</div>
//           <div>4b</div>
//           <div>5a</div>
//           <div>5b</div>
//           <div>6a</div>
//           <div>6b</div>
//           <div>7a</div>
//           <div>7b</div>
//           <div>8a</div>
//           <div>8b</div>
//           <div>9a</div>
//           <div>9b</div>
//           <div>10a</div>
//           <div>10b</div>
//           <div>11a</div>
//           <div>11b</div>
//           <div>12a</div>
//           <div>12b</div>
//           <div>13a</div>
//           <div>13b</div>
//           <div>14a</div>
//           <div>14b</div>
//         </div>

//         )
// }

// class myGrid {
//     constructor(props) {
//         this.state = {
//             selected: false,
//         }
//     }

//     handleClick() {
//         console.log("button clicked!");
//         if (this.state.selected !== false)
//         {
//             this.setState({
//                 selected: true,
//             })
//         }
//         else
//         {
//             this.setState({
//                 selected: false,
//             })
//         }
//     }
// }

// {
//   return (
//      <div class="grid-container">
//         <div class="grid-item grid-item-1"></div>
//         <div class="grid-item grid-item-2"></div>
//         <div class="grid-item grid-item-3"></div>

//     </div>

//   )
// const myGrid = new Grid({
//     columns: ['Name', 'Email', 'Phone Number'],
//     search: true,
//     data: [
//       ['John', 'john@example.com', '(353) 01 222 3333'],
//       ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
//       ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
//       ['Nisen', 'nis900@gmail.com',   '313 333 1923']
//     ],
//     style: {
//       table: {
//         border: '3px solid #ccc'
//       },
//       th: {
//         'background-color': 'rgba(0, 0, 0, 0.1)',
//         color: '#000',
//         'border-bottom': '3px solid #ccc',
//         'text-align': 'center'
//       },
//       td: {
//         'text-align': 'center'
//       }
//     }
//   });
//     return(myGrid);
//}
