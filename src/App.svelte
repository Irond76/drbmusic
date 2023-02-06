<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <main class="Main-Content-Container">
    <Route path="/">
      <Home />
    </Route>
  </main>
</Router>

<style>
</style>
