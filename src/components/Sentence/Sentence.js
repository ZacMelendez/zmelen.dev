import React, { useState, useEffect} from 'react';
import './Sentence.scss';

function handleEnter(event) {
  if (event.keyCode === 13) {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
}

const Sentence = ({ initialValue, autoFocus, onComplete}) => {
  const [value, setValue] = useState(initialValue);
  const [focus, setFocus] = useState();
  // Look into useEffect, Refs

  useEffect(() => {
    console.log('focus changed')
}, [focus])

  const toggleFocus = () => {
    setFocus(!focus);
  }

  if (autoFocus) {
    return (
      <label id="label">
        <span id="span" className={`${focus ? 'span-after' : ''}`}>{value}</span>
        <input id="input"
          type="text"
          placeholder={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          autoFocus
          onKeyDown={handleEnter}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
        />
      </label>
    )
  } else {
    return (
      <label id="label">
        <span id="span" className={`${focus ? 'span-after' : ''}`}>{value}</span>
        <input id="input"
          type="text"
          placeholder={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          autoComplete='off'
          onKeyDown={handleEnter}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
        />
      </label>
    )
  }
}

export default Sentence;