import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  return <Spinner />;
};

const MyApp = () => (
  <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
    <MyMapComponent />
  </Wrapper>
);