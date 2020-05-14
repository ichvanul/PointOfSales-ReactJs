import React from 'react'

class Content extends React.Component {
  render() {
    return(
      <div>
        <button> - </button>
        <input value="1" onChange = { () => null }></input>
        <button> + </button>
      </div>
    )
  }
}

export default Content