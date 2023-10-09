<script setup>
import { computed } from "vue";


const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
	id: {
		type: String,
	},
	modelValue: {
		type: [Array, Boolean],
		default: false,
	},
	value: {
		type: String,
		default: null,
	},
});

const proxyChecked = computed({
	get() {
		return props.modelValue;
	},

	set(val) {
		emit("update:modelValue", val);
	},
});
</script>

<template>
	<div class="[&:not(:last-child)]:mie-4 inline-flex items-center gap-2">
		<input
			:id="id"
			v-model="proxyChecked"
			type="checkbox"
			:value="value"
			v-bind="$attrs"
			class="peer form-checkbox cursor-pointer rounded border accent-current shadow-sm transition-colors focus:ring-0 focus:ring-offset-0 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-primary-200 dark:focus-visible:ring-offset-primary-900"
			:class="[
				'text-primary',
				'bg-gray-50 checked:!bg-primary-500 dark:bg-gray-900 ',
				'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600',
			]"
		/>
		<label
			class="cursor-pointer select-none capitalize text-gray-500 peer-checked:font-bold peer-checked:text-primary dark:text-gray-400"
			:for="id"
		>
			<slot />
		</label>
	</div>
</template>
