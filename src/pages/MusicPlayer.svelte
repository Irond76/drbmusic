<script>
  import { Link } from "svelte-navigator";
  import songStore from "../stores/songStore";
  const cdImage =
    "https://res.cloudinary.com/rush-media/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1676155932/Dale-Bendixen-Music/sexandcostumes_aroro1.jpg";
  let songs = [];
  songStore.subscribe((data) => {
    songs = data;
  });
</script>

{#each songs as song}
  {#if song.nowPlaying === true}
    <div class="music-player">
      <div class="text">
        <h3>{song.title}</h3>
      </div>
      <div class="cd-image">
        <img src={cdImage} width="6em" alt="" />
      </div>
      <div>
        <div class="audio-player">
          <audio controls autoplay>
            <source src={song.url} type="audio/mpeg" />
          </audio>
        </div>
        {#each songs as song}
          {#if song.nowPlaying}
            <div class="home-link">
              <Link to="/" on:click={() => (song.nowPlaying = false)}
                >Back Home</Link
              >
            </div>
          {:else}{/if}
        {/each}
      </div>
    </div>
  {:else}{/if}
{/each}

<style>
  .music-player {
    width: 60vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    background-color: rgba(160, 0, 0, 0.1);
    position: relative;
    border: 3px solid #a00000;
    border-radius: 2em;
    box-shadow: 0px 0px 25em #a00000;
    margin: 2em auto 4em auto;
  }
  .cd-image {
    /* border: 2px solid blue; */
    width: 20em;
    background-color: transparent;
    animation: rotation 3s infinite linear;
  }
  .text {
    margin: 2em;
    letter-spacing: 0.2em;
  }
  img {
    width: 100%;
    border-radius: 50%;
    padding: 0.8em;
    box-shadow: 3px 3px 10px rgba(160, 0, 0, 0.8);
  }
  .audio-player {
    margin-top: 1em;
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
  audio::-webkit-media-controls-panel {
    background-color: rgba(160, 0, 0, 0.7);
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 680px) {
    .music-player {
      margin-top: 4rem;
      width: 90vw;
      height: 70vh;
    }
  }
</style>
