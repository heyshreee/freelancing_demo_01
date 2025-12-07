import "./App.css";

import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Project } from "./components/sections/Project/Project";
import { Skills } from "./components/sections/Skills/Skills";
import { Contact } from "./components/sections/Contact/Contact";

import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
