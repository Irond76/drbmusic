<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import MusicPlayer from "./pages/MusicPlayer.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router>
  <main class="Main-Content-Container">
    <Header />
    <Route path="/">
      <Home />
    </Route>
    <Route path="/musicplayer">
      <MusicPlayer />
    </Route>
    <Footer />
  </main>
</Router>

<style>
</style>
