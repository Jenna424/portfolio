<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view header="Portfolio"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/Navbar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
