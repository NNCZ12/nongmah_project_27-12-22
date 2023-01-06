import React from "react"
import Welcome from "./pages/Welcome"
im

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile/create" element={<ModalForm />} />
          <Route path="/profile/view" element={<DogProfile />} />
      </Routes>
    </>
  )
}

export default App
