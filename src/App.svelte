<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import MusicPlayer from "./pages/MusicPlayer.svelte";
  import About from "./pages/About.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router>
  <Header />
  <main class="Main-Content-Container">
    <Route path="/">
      <Home />
    </Route>
    <Route path="/musicplayer" primary={false}>
      <MusicPlayer />
    </Route>
    <Route path="/about" primary={false}>
      <About />
    </Route>
  </main>
  <Footer />
</Router>

<style>
</style>
