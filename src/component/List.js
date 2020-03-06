import React, { Component } from 'react'

class List extends Component {
  render() {
    const {value, data} = this.props;
    const buildList = data
    .filter(item => {    
      return (
        item.gender.toLowerCase().includes(value.toLowerCase()) || item.name.toLowerCase().includes(value.toLowerCase())
      )
    })
    .map(item => {
      return (
        <tbody>
          <tr key={item.index}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
          </tr>
        </tbody>
      )
    })
    return(
      <div>
        {value.length > 0 && 
          <p className="search-info">
            Result For: 
            <span>{value}</span>
          </p>
        }
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          {buildList}
        </table>
        {buildList.length <= 0 &&
         <p className="reult-info">Sorry No Match Found</p> 
        }
      </div> 
    )
  }
}

export default List;