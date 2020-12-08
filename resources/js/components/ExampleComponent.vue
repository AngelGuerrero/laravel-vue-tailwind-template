<template>
  <div
    class="container
        bg-green-400
        text-white
        shadow-lg
        p-5
        rounded"
  >
    <h1 class="text-4xl">{{ message }}</h1>
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
