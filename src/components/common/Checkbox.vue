<script setup>
const props = defineProps({
	id: {
		type: [String, Number],
	},
	modelValue: {
		type: [Array, Boolean],
		required: true,
	},
	value: null,
});

const emit = defineEmits(["update:modelValue"]);

const input = ref(null);
const checked = ref(false);
const proxyChecked = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emit("update:modelValue", val);
	},
});
watchEffect(() => {
	if (Array.isArray(props.modelValue)) {
		checked.value = props.modelValue.includes(props.value);
	} else {
		checked.value = props.modelValue;
	}
});
onMounted(() => {
	if (input.value.hasAttribute("autofocus")) {
		input.value.focus();
	}
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
	<div class="[&:not(:last-child)]:mie-4 inline-flex items-center">
		<input
			:id="id"
			type="checkbox"
			ref="input"
			:value="value"
			v-model="proxyChecked"
			v-bind="$attrs"
			class="text-sm rounded-sm sr-only form-checkbox peer text-primary accent-current focus:ring-0 focus:ring-offset-0"
		/>
		<label :for="id" class="h-full cursor-pointer">
			<slot name="trigger" :id="id" :checked="checked">
				<div
					class="p-1 px-3 capitalize transition-colors border-2 rounded-md shadow-sm cursor-pointer select-none peer-focus-visible:ring-1 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-primary-200 dark:peer-focus-visible:ring-offset-primary-900"
					:class="[
						'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600',
						checked
							? 'border-primary bg-primary  text-gray-100'
							: 'bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-400',
					]"
				>
					<slot></slot>
				</div>
			</slot>
		</label>
	</div>
</template>
