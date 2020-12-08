<template>
  <div
    class="container
        bg-green-400
        text-white
        shadow-lg
        p-5
        rounded
        text-center
        "
  >
    <h1 class="text-4xl">{{ message }}</h1>
    <h3 class="text-1xl">This works!</h3>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',

  props: {
    message: {
      type: String,
      default: 'Yay!'
    }
  }
}
</script>
