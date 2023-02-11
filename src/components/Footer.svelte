<script>
  let year = new Date().getFullYear();
</script>

<div>
  <ul>
    <li class="copyright">DALE BENDIXEN MUSIC Copyright &copy; {year}</li>
    <li class="instagram logo-link">
      <a
        href="https://www.instagram.com/dalebendixenmusic/"
        target="_blank"
        rel="noreferrer"><i class="fa-brands fa-instagram" /></a
      >
    </li>
    <li class="facebook logo-link">
      <a
        href="https://www.facebook.com/dalebendixenmusic"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-facebook" />
      </a>
    </li>
  </ul>
</div>

<style>
  div {
    /* border: 1px solid blue; */
    height: 4rem;
    margin: 0 auto;
    width: 80vw;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    list-style: none;
  }

  .copyright {
    letter-spacing: 0.1em;
    margin-top: 1em;
  }
  .instagram a {
    font-size: 2em;
    color: #fff;
  }
  .facebook a {
    font-size: 2em;
    color: #fff;
  }
  .instagram {
    margin-top: 0.2em;
  }
  .facebook {
    margin-top: 0.2em;
  }
  i:hover {
    transition: all 0.2s linear;
    transform: scale(1.2);
  }
  .logo-link i:hover {
    color: #a00000;
    transition: all 0.2s linear;
    transform: scale(1.3);
  }
  @media screen and (max-width: 680px) {
    .copyright {
      font-size: x-small;
    }
  }
</style>
