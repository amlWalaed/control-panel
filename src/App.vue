<script setup></script>

<template>
	<div>
		<RouterLink :to="{ name: 'orders.index' }"> order </RouterLink>
		<RouterView />
	</div>
</template>
