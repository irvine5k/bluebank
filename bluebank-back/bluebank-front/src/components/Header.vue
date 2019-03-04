<template>
  <header class="bg-grey-lighter py-4">
    <div class="container m-auto flex flex-wrap items-center justify-end">
      <div class="flex-1 flex items-center">
        <img class="fill-current text-indigo" src= "https://images.vexels.com/media/users/3/146228/isolated/preview/685088eecf6250447d473e7ae3b0a5da---cone-de-gotas-de---gua-azul-by-vexels.png" width="24" height="24">
        <a href="/" class="uppercase text-sm font-mono pl-4 font-semibold no-underline text-indigo-dark hover:text-indigo-darker">Bluebank</a>
      </div>
      <div>
        <router-link to="/" class="link-grey px-2 no-underline">Transfer</router-link>
        <router-link to="/deposit" class="link-grey px-2 no-underline">Deposit</router-link>
        <router-link to="/withdraw" class="link-grey px-2 no-underline">Withdraw</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    }
  }
}
</script>