<script setup>

</script>

<template>
    <div class="container">
        <RouterLink :to="{ name: 'orders.index' }">
            order
        </RouterLink>
        <RouterView/>
    </div>
</template>

