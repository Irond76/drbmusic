<script>
  const albumImage = "src/assets/sexandcostumes.jpg";
</script>

<div class="album-container">
  <img src={albumImage} alt="album cover" class="album-cover" />
  <div class="content">
    <h1>
      <bold class="album-title">SEX AND COSTUMES</bold>
      <em>ALBUM AVAILABLE NOW!</em>
    </h1>
    <h2>Featuring <span>10</span> New Tracks</h2>
    <hr />
    <ul>
      <li>SOMETHING IN THE WATER</li>
      <li>NOT ALONE</li>
      <li>FRIEND LIKE JAMES DEAN</li>
      <li>ALL THAT YOU ARE</li>
      <li>WAIT A MINUTE</li>
      <li>EVANESCE</li>
      <li>WAITING ON</li>
      <li>SEX AND COSTUMES</li>
      <li>DROP THE BOMB</li>
      <li>RABID</li>
    </ul>
  </div>
</div>

<style>
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 0.1rem;
    font-weight: bolder;
  }
  li:hover {
    cursor: pointer;
    transition: all 0.2s linear;
    transform: scale(1.2);
    color: #a00000;
  }
  .album-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 45vw;
    /* border: 1px solid green; */
  }
  .content {
    margin-left: -0.75em;
  }
  em {
    font-size: small;
    padding: 1em;
  }
  hr {
    width: 15vw;
    margin: 0.5rem auto 1rem auto;
    border: 1px solid #a00000;
  }
  .album-title {
    font-weight: bold;
    color: #a00000;
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
  img {
    box-shadow: 10px 10px 5px black;
    filter: drop-shadow(1px 1px 10rem #a00000);
  }
  @media screen and (max-width: 680px) {
    .album-container {
      grid-template-columns: 1fr;
      width: 100%;
    }
    li {
      font-weight: 400;
    }
    .album-cover {
      width: 8rem;
      margin-bottom: 2rem;
    }
    hr {
      width: 40vw;
      margin: 0.5rem auto 1rem auto;
      border: 1px solid #a00000;
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
