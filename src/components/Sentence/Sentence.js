import React, { useState } from 'react';
import './Sentence.scss';


const Sentence = ({ initialValue, autoFocus, onComplete, refer, clsName}) => {
  const [value, setValue] = useState(initialValue);
  const [focus, setFocus] = useState();
  // Look into useEffect, Refs
  const unchanged = value === initialValue;

  const toggleFocus = () => {
    setFocus(!focus);
  }

  if (autoFocus) {
    return (
      <label id="label">
        <span id="span" className={`${(focus & unchanged) ? 'span-before' : focus ? 'span-after' : ''}`}>{value.slice(0, 30)}</span>
        <input id="input"
          className={clsName}
          type="text"
          placeholder={initialValue}
          onChange={(event) => {
            setValue(event.target.value.slice(0, 30))
          }}
          autoFocus
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          ref = {refer}
        />
      </label>
    )
  } else {
    return (
      <label id="label">
        <span id="span" className={`${(focus & unchanged) ? 'span-before' : focus ? 'span-after' : ''}`}>{value.slice(0, 30)}</span>
        <input id="input"
          className={clsName}
          type="text"
          placeholder={initialValue}
          onChange={(event) => {
            setValue(event.target.value.slice(0, 30))
          }}
          autoComplete='off'
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          ref = {refer}
        />
      </label>
    )
  }
}

export default Sentence;