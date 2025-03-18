import { Post } from "./Post";

function App() {
  return (
    <>
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
