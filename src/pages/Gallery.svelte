<script>
  import { Link } from "svelte-navigator";
</script>

<h1>Gallery Page</h1>

<div class="home-link">
  <Link to="/home">Home</Link>
</div>

<style>
  .home-link {
    cursor: pointer;
    padding: 0.1em;
    width: fit-content;
    margin: 2em auto;
    text-align: center;
    transition: all 0.2s linear;
  }
  .home-link:hover {
    transform: scale(1.2);
  }
  .home-link :global(a) {
    text-decoration: none;
    margin-bottom: 0.1rem;
    font-size: 1.2em;
    color: #a00000;
  }
</style>
