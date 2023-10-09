<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
	title: String,
});
</script>
<template>
	<Disclosure v-slot="{ open }">
		<DisclosureButton as="template">
			<slot name="trigger" :open="open">
				<button
					class="flex items-center justify-between w-full py-2 border-b border-secondary-200"
				>
					<span>
						{{ title }}
					</span>
					<span>
						<ChevronDownIcon :class="['w-4', open ? 'rotate-180' : '']" />
					</span>
				</button>
			</slot>
		</DisclosureButton>
		<DisclosurePanel class="text-gray-500">
			<slot name="content" />
		</DisclosurePanel>
	</Disclosure>
</template>
