<script>
  import { Link } from "svelte-navigator";
  import songStore from "../stores/songStore";
  let songs = [];
  songStore.subscribe((data) => {
    songs = data;
  });
  console.log(songs[0].nowPlaying === true);
</script>

{#each songs as song}
  {#if song.nowPlaying === true}
    <div class="music-player">
      <div class="text">
        <h3>{song.title}</h3>
        <div>
          <audio controls autoplay>
            <source src={song.url} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  {:else}{/if}
{/each}
<div>
  {#each songs as song}
    {#if song.nowPlaying}
      <Link to="/" on:click={() => (song.nowPlaying = false)}>Home</Link>
    {:else}{/if}
  {/each}
</div>

<style>
  .music-player {
    width: 60vw;
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    background-color: rgba(160, 0, 0, 0.1);
    position: relative;
    border: 3px solid #a00000;
    border-radius: 2em;
    box-shadow: 0px 0px 25em #a00000;
    margin: auto auto;
  }

  @media screen and (max-width: 680px) {
    .music-player {
      margin-top: 4rem;
      width: 90vw;
      height: 60vh;
    }
  }
</style>
