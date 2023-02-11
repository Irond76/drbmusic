<script>
</script>

<div class="music-player">
  <div class="text">
    <h3>Example Text</h3>
  </div>
</div>

<style>
  .music-player {
    width: 60vw;
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    background-color: rgba(160, 0, 0, 0.2);
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
