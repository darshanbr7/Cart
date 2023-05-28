import React from 'react'

const Test = () => {
    const [selectedValue, setSelectedValue] =React.useState('');
    
    console.log(selectedValue)
  return (
 
     
    <div>
     <select value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value)}}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    </div>
  )
}

export default Test