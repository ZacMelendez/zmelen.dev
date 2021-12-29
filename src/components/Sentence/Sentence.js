import React, { useState } from 'react';
import './Sentence.scss';

const Sentence = ({ initialValue, autoFocus }) => {
  const [value, setValue] = useState(initialValue)
  if (autoFocus) {
    return (
      <label id="label">
        <span id="span">{value}</span>
        <input id="input"
          type="text"
          placeholder={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          autoFocus
        />
      </label>
    )
  } else {
    return (
      <label id="label">
        <span id="span">{value}</span>
        <input id="input"
          type="text"
          placeholder={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
      </label>
    )
  }
}

export default Sentence;