<script>
  import { Link } from "svelte-navigator";
  import imageStore from "../stores/imageStore";
  let images = [];
  imageStore.subscribe((data) => {
    images = data;
  });
</script>

{#key imageStore}
  <div class="image-container">
    {#each images as image}
      <div class="image">
        <img src={image.url} alt="random" />
      </div>
    {/each}
  </div>
{/key}
<div class="home-link">
  <Link to="/">Home</Link>
</div>

<style>
  .image-container {
    justify-items: center;
    display: grid;
    margin: 0 auto;
    text-align: center;
    width: 80vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5em;
  }
  .image {
    width: 15em;
    transition: all 0.2s ease-in-out;
  }
  .image:hover {
    transform: scale(1.5);
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

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

  @media screen and (max-width: 680px) {
    .image-container {
      display: grid;
      margin: 0 auto;
      width: 80vw;
      grid-template-columns: 1fr;
    }
    .image {
      width: 15em;
    }
  }
</style>
