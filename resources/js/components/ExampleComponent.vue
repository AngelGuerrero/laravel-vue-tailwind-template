<template>
  <div class="container p-5 shadow-sm">
    <h1 class="text-3xl">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',

  props: {
    message: {
      type: String,
      default: 'Example component!'
    }
  }
}
</script>
