import React, { useState } from "react"
import { update } from "./counterSlice"

export const EditableComponent = ({ defaultText, afterChange, type}) => {
  const [isEditing, setisEditing] = useState(false)
  const [text, setText] = useState( defaultText.toString() || "")
  const ENTER_KEY_CODE = 13
  const DEFAULT_LABEL_PLACEHOLDER = type === "string" ? "Click To Edit" : 0
  const isTextValueValid = () => {
    return typeof text != "undefined" && text.trim().length > 0
  }

  const afterChangeCallback = () => {
    if (typeof afterChange !== "function") return null
    if (isEditing) {
        afterChange(text)
    }
  }

  const handleFocus = () => {
    afterChangeCallback()
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
  const handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      handleFocus()
    }
  }

  if (isEditing) {
    return (
      <div>
        <input
          type={type || "text"}
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
