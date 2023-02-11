<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import MusicPlayer from "./pages/MusicPlayer.svelte";
</script>

<Router>
  <main class="Main-Content-Container">
    <Route path="/">
      <Home />
    </Route>
    <Route path="/musicplayer">
      <MusicPlayer />
    </Route>
  </main>
</Router>

<style>
</style>
