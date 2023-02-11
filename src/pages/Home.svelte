<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Content from "../components/Content.svelte";
</script>

<header>
  <Header />
</header>
<article>
  <Content />
</article>
<footer>
  <Footer />
</footer>

<style>
  article {
    /* border: 1px solid blue; */
    margin: 0 auto;
    width: 80vw;
    text-align: center;
    letter-spacing: 0.1em;
  }
</style>
