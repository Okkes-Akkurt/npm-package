import React from 'react'

import { Button, TextContent } from 'patika-kod-2023'
import 'patika-kod-2023/dist/index.css'

const App = () => {
  return (
    <>
      <TextContent text='lorem ipsum dolor sit ahmet' />
      <br />
      <Button text='Click' onClick={() => alert('asdasda')} />
      <div>
        <Button type="primary" text='Primary Button' />
        <Button text='Default Button' />
        <Button type="dashed" text='Dashed Button' />
        <Button type="text" text='Text Button' />
        <Button type="link" text='Link Button' />
      </div>
    </>
  )
}

export default App
