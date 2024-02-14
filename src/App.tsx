import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App-body">
        <PostContainer />
        {/* {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users)} */}
        {/* <form>
          <label>
            Login
            <input type="text" name="login" />
          </label>
          <br />
          <label>
            Password
            <input type="text" name="password" />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form> */}
      </div>
    </div>
  );
}

export default App;
