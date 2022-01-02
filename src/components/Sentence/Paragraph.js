import React, { useState } from 'react';
import './Sentence.scss';

const Paragraph = ({ initialValue, refer }) => {
  const [value, setValue] = useState(initialValue);
  const [focus, setFocus] = useState();

  const unchanged = value === initialValue;

  const toggleFocus = () => {
    setFocus(!focus);
  }

    return (
      <label id="label">
        <span id="span" className={`${(focus & unchanged) ? 'span-before' : focus ? 'span-after' : ''}`}>{value}</span>
        <textarea id="textarea"
          type="text"
          placeholder={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          onInput={() => {'this.style.height = "";this.style.height = this.scrollHeight + "px"'}}
          autoComplete='off'
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          ref = {refer}
        />
      </label>
    )
}

export default Paragraph;