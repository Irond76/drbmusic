<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<header>
  <Header />
</header>
<article>
  <h1>Home Page</h1>
</article>
<footer>
  <Footer />
</footer>

<style>
  article {
    border: 1px solid blue;
    margin: 0 auto;
    width: 80vw;
    text-align: center;
  }
  h1 {
    color: aliceblue;
  }
</style>
