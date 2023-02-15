<script>
  import { Link } from "svelte-navigator";
</script>

<div class="about-container">
  <h1 class="title">About Artist</h1>
  <div class="content-text">
    <p>
      It's been more than a few decades now, since I first heard Ace Frehley
      ripping his guitar solo on: Shock Me, off of the Kiss Alive II album. I
      remember hearing that track and knew immediately that I wanted to play
      guitar. I got my first guitar when I was 10, and I was hooked.
    </p>
    <br />
    <p>
      I'm heavily influenced by a vast genre of music. I really can't put my
      sound into a box. I have a great amount of respect for all artist's and
      their craft. Of course, like so many, some of my biggest influences are:
      Led Zeppelin, Eric Clapton, Randy Rhoads and Van Halen. I also really
      enjoy: Buddy Holly, Stevie Ray, and a ton of The 80's bands I grew up
      listening to.
    </p>
    <p>So needless to say, the music I write reflects that.</p>
    <br />
    <p>
      I write what I enjoy; sometimes that's an angry rock song, other times
      it's bluesy and you can never go wrong with a soft ballad.
    </p>
    <br />
    <p>
      I love creating with every instrument: guitars, drums, bass, piano etc. I
      dig the whole recording process. The mixing, mastering, and putting all
      the layers together to make something expressive. I record in my home
      studio that I have dubbed: "Proud Sounds Studio." I hope you enjoy my
      music; and I look forward to creating alot more in the future.
    </p>
  </div>
  <div>
    <div class="home-link">
      <Link to="/">Back Home</Link>
    </div>
    <div>
      <div class="home-link">
        <Link to="/gallery">Gallery</Link>
      </div>
    </div>
  </div>
</div>

<style>
  .home-link {
    cursor: pointer;
    padding: 0.1em;
    width: fit-content;
    margin: 0 auto 1em auto;
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
  .about-container {
    /* border: 1px solid blue; */
    margin-left: 9em;
    width: 60vw;
    height: 100vh;
  }
  .title {
    margin-bottom: 3em;
    color: #a00000;
  }
  .content-text {
    font-size: 1.1em;
    letter-spacing: 0.1em;
    padding-bottom: 2em;
  }

  @media screen and (max-width: 680px) {
    .about-container {
      height: 100vh;
      width: 80vw;
      margin-left: 3em;
    }
    .title {
      margin-bottom: 0.2em;
    }
    .content-text {
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }
  }
</style>
