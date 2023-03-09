import React from 'react'
import styles from './styles.module.css'



export const Button = (props) => {
  return (
    <div className={styles.test}>
      <button {...props}>{props.text}</button>
    </div>
  )
}


export const TextContent = (props) => {
  return (
    <div className={styles.test}>
      <p {...props}>{props.text}</p>
    </div>
  )
}
