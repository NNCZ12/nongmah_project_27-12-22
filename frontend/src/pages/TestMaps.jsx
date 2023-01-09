import React from 'react'
import { Wrapper } from "@googlemaps/react-wrapper";

function TestMaps() {
  return (
    <Wrapper apiKey={"YOUR_API_KEY"}>
    <MyMapComponent />
  </Wrapper>
  )
}

export default TestMaps