import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  return <Spinner />;
};

const MyApp = () => (
  <Wrapper apiKey={AIzaSyDB0mpQP-2ZRabGNQgHxtx457MIUeFU6JM} render={render}>
    <MyMapComponent />
  </Wrapper>
);