<script>
  import { Link } from "svelte-navigator";
  const albumImage =
    "https://res.cloudinary.com/rush-media/image/upload/v1676155932/Dale-Bendixen-Music/sexandcostumes_aroro1.jpg";
</script>

<div class="album-container">
  <img src={albumImage} alt="album cover" class="album-cover" />
</div>
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
  <div class="stipe-container">
    <a
      href="https://buy.stripe.com/bIY14TedR3uF1So144"
      class="stripe-payment"
      target="_blank"
      rel="noreferrer"><i class="fa-solid fa-compact-disc" />Buy CD</a
    >

    <a
      href="https://buy.stripe.com/aEU14TfhVaX7cx2dQR"
      class="stripe-payment"
      target="_blank"
      rel="noreferrer"><i class="fa-solid fa-jar" />Tip Artist</a
    >
  </div>
</div>
<div>
  <Link to="musicplayer">
    <button class="music-player-btn">Music Player</button>
  </Link>
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

  .stipe-container {
    padding: 1rem;
  }
  .stripe-payment {
    padding: 0.5rem;
    transition: all 0.2s linear;
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: white;
  }
  i {
    margin-right: 0.6rem;
    color: white;
  }

  .stripe-payment:hover {
    cursor: pointer;
    transition: all 0.2s ease-in;
    transform: scale(1.2);
    color: #a00000;
  }
  .music-player-btn {
    box-shadow: 0px 0px 1em #a00000;
    cursor: pointer;
    border: 1px solid #a00000;
    padding: 0.5em;
    border-radius: 0.5em;
    background: transparent;
    color: #a00000;
    margin-top: 4em;
    animation-name: musicPlayer;
    animation-duration: 3s;
    animation-iteration-count: 1;
  }
  @keyframes musicPlayer {
    0% {
      box-shadow: 0px 0px 1em #a00000;
      scale: 0.5;
    }
    100% {
      box-shadow: 0px 0px 8em #a00000;
      scale: 1;
    }
  }
  .music-player-btn:hover {
    transition: all 0.2s linear;
    transform: scale(1.2);
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
      width: 6rem;
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
