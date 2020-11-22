import React from "react"
import styled from "styled-components"

type Props = {
  isDarkMode: boolean
  onChange: () => void
}

function DarkModeToggle(props: Props) {
  const { isDarkMode, onChange } = props

  return (
    <StyledToggleLabel>
      <StyledToggle
        type="checkbox"
        id="toggle"
        defaultChecked={isDarkMode}
        onChange={onChange}
      />
      <StyledSlider />
    </StyledToggleLabel>
  )
}

export default DarkModeToggle

const StyledSlider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #bdc3c7;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.22s ease;

  &:before {
    content:'☀️';
    font-family: "Zapf Dingbats";
    font-weight: 600;
    color: #e67e22;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    transition: all 0.4s;
  }
`

const StyledToggle = styled.input`
  height: 0;
  width: 0;
  opacity: 0;

  &:checked {
    + ${StyledSlider} {
      background-color: #424242;

      &:before {
        content: "🌙";
        font-family: "Zapf Dingbats";
        color: #424242;
        transform: translateX(3rem);
      }
    }
  }
`

const StyledToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  height: 3rem;
  width: 6rem;
`
