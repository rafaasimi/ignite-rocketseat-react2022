import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <Post
        author="Rafael Zorzenon"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Post
        author="Rafael Zorzenon 2"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit 2."
      />
    </>
  );
}

export default App;
