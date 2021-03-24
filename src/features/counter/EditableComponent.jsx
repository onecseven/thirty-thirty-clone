import React, { useState } from "react"


export const EditableComponent = ({defaultText}) => {
  const [isEditing, setisEditing] = useState(false)
  const [text, setText] = useState(defaultText || "")
  const ENTER_KEY_CODE = 13
  const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit"
  const isTextValueValid = () => {
    return typeof text != "undefined" && text.trim().length > 0
  }

  const handleFocus = () => {
    if (isTextValueValid()) {
      setisEditing(!isEditing)
    } else {
      if (isEditing) {
        setisEditing(false)
      } else {
        setisEditing(true)
      }
    }
  }
  const  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      handleFocus()
    }
  }
  
  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleFocus}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    )
  }

  const labelText = isTextValueValid() ? text : DEFAULT_LABEL_PLACEHOLDER
  
  return (
    <div>
      <label onClick={handleFocus}>{labelText}</label>
    </div>
  )
}