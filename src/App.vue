<script setup></script>

<template>
	<div dir="rtl">
		<RouterLink :to="{ name: 'orders.index' }"> order </RouterLink>
		<RouterLink :to="{ name: 'orders.show' }"> order.show </RouterLink>
		<RouterView />
	</div>
</template>
