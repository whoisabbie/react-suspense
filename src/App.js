import React, { Suspense } from "react";
import ProfileDetails from "./components/ProfileDetails";
import ProfilePosts from "./components/ProfilePosts";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="container my-5">
      <Suspense fallback={<Spinner />}>
        <ProfileDetails />
        <ProfilePosts />
      </Suspense>
    </div>
  );
}

export default App;
