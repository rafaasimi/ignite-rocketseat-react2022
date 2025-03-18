import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Zorzenon"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Rafael Zorzenon 2"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit 2."
          />
        </main>
      </div>
    </>
  );
}

export default App;
