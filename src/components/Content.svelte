<script>
  const albumImage = "src/assets/sexandcostumes.jpg";
</script>

<div class="album-container">
  <img src={albumImage} alt="album cover" class="album-cover" />
  <div class="content">
    <h1>SEX AND COSTUMES ALBUM AVAILABLE NOW!</h1>
    <h2>Featuring <span>10</span> New Tracks</h2>
  </div>
</div>

<style>
  .album-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 45vw;
    /* border: 1px solid green; */
  }
  .content {
    margin-left: -0.75em;
  }
  h1 {
    font-size: medium;
  }
  span {
    color: #a00000;
    font-size: larger;
  }
  .album-cover {
    width: 20em;
  }
  @media screen and (max-width: 680px) {
    .album-container {
      grid-template-columns: 1fr;
      width: 100%;
    }
    .album-cover {
      width: 8rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 680px) {
    .album-container {
      grid-template-columns: 1fr 1fr;
    }
    .content {
      margin-left: -1em;
    }
  }
</style>
