import React, { useState } from 'react';
import './Sentence.scss';

const Paragraph = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue) 
    return (
      <label id="label">
        <span id="span">{value}</span>
        <textarea id="textarea"
          type="text"
          placeholder={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          onInput={() => {'this.style.height = "";this.style.height = this.scrollHeight + "px"'}}
        />
      </label>
    )
}

export default Paragraph;