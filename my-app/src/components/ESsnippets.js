
// ES 7+ Snippets 

// Snippet rfce + tab
import React from 'react'

function ESsnippets() {
  return (
    <div>ESsnippets</div>
  )
}

export default ESsnippets


// Snippet rafce + tab exports same as above with arrow function
import React from 'react'

const ESsnippets = () => {
  return (
    <div>ESsnippets</div>
  )
}

export default ESsnippets


// Snippet rce + tab exports class based function
import React, { Component } from 'react'

export class ESsnippets extends Component {
  render() {
    return (
      <div>ESsnippets</div>
    )
  }
}

export default ESsnippets


// Snippet rcon + tab exports constructor
constructor(props) {
  super(props)

  this.state = {
     first
  }
}


// Snippet clg + tab or clo
console.log(first)