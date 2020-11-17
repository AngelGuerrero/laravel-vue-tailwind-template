<template>
    <div
        class="
            container
            p-5
            rounded
            bg-white
            border
            border-gray-100
            border-solid
            shadow-sm"
    >
        <h1 class="text-3xl">Example component!</h1>
    </div>
</template>

<script>
export default {
    name: "ExampleComponent",

    mounted() {
        console.log("Este componente ha sido montado");
    }
};
</script>
