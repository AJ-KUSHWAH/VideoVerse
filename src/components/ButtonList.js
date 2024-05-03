import React from 'react'
import Button from './Button'

const List = ["All", "Games", "Sports", "Music", "Cricket", "Tech", "Web", "Football", "Food", "Laptops", "React", "Javscript", "Gym", "Workout", "Diet"]

const ButtonList = () => {
  return (
    <div>
        <Button name={List} />
    </div>
  )
}

export default ButtonList