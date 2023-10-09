<script setup>
import {
	autoUpdate,
	flip,
	limitShift,
	offset,
	shift,
	useFloating,
} from "@floating-ui/vue";
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import { XCircleIcon } from "@heroicons/vue/24/outline";
import { cva } from "class-variance-authority";

const props = defineProps({
	modelValue: [String, Number, Object],
	optionValue: String,
	label: String,
	items: Array,
	placeholder: String,
	multiple: Boolean,
	disabled: Boolean,
	clearable: {
		type: Boolean,
		default: false,
	},
	teleport: {
		default: true,
		type: Boolean,
	},
});

const emit = defineEmits(["update:modelValue"]);

const field = inject("field", {});

/**@type {Ref<HTMLElement>} */
const referenceElmRef = ref();
/**@type {Ref<HTMLElement>} */
const floatingElmRef = ref();
/**@type {Ref<Number>} */
const floatingMinWidth = ref(0);

const optionClasses = cva("", {
	variants: {
		active: { true: "bg-primary-50 " },
		selected: { true: "text-primary-700" },
	},
	compoundVariants: [
		{
			active: false,
			selected: false,
			class: "",
		},
	],
});
const proxySelectedValue = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit("update:modelValue", value);
	},
});
const selectedLabels = computed(() => {
	if (!props.multiple) return [];
	return props.items.filter((item) =>
		(proxySelectedValue.value ?? []).includes(item[props.optionValue])
	);
});
const selectedLabel = computed(
	() =>
		props.items.find(
			(item) => item[props.optionValue] === proxySelectedValue.value
		)?.[props.label]
);
const selectedOption = computed(() =>
	props.items.find(
		(item) => item[props.optionValue] === proxySelectedValue.value
	)
);

const { floatingStyles, placement } = useFloating(
	referenceElmRef,
	floatingElmRef,
	{
		transform: false,
		placement: "bottom",
		middleware: [flip(), shift({ limiter: limitShift() }), offset(10)],
		whileElementsMounted: autoUpdate,
	}
);

const setFloatingWidth = () => {
	if (placement.value.match(/(top|bottom)(-.*)?\b/g)) {
		floatingMinWidth.value = `${referenceElmRef.value.clientWidth}px`;
	}
};
const transformOriginClass = computed(() => {
	let placementVariants = {
		top: "origin-bottom",
		bottom: "origin-top",
		left: "origin-right rtl:origin-left",
		right: "origin-left rtl:origin-right",
		"bottom-start": "origin-top-left rtl:origin-top-right ",
		"right-start": "origin-top-left rtl:origin-top-right ",
		"bottom-end": "origin-top-right rtl:origin-top-left ",
		"left-start": "origin-top-right rtl:origin-top-left",
		"top-start": "origin-bottom-left rtl:origin-bottom-right",
		"right-end": "origin-bottom-left rtl:origin-bottom-right",
		"top-end": "origin-bottom-right rtl:origin-bottom-left ",
		"left-end": "origin-bottom",
	};
	return placementVariants[placement.value];
});
</script>
<template>
	<Listbox
		as="div"
		v-model="proxySelectedValue"
		:disabled="disabled"
		class="relative"
		@click.stop
		:multiple="multiple"
		v-slot="{ open, value: selectedValue, disabled }"
	>
		<div
			ref="referenceElmRef"
			@click="setFloatingWidth"
			@keydown.enter="setFloatingWidth"
			@keydown.space="setFloatingWidth"
			@keydown.delete="$emit('update:modelValue', null)"
			:title="selectedLabels.map((item) => item[label]).join(' ')"
		>
			<ListboxButton as="template">
				<slot
					name="trigger"
					:placeholder="placeholder"
					:selected-value="selectedValue"
					:selected-option="selectedOption"
					:selected-label="selectedLabel"
					:open="open"
					:disabled="disabled"
				>
					<button
						type="button"
						class="inline-flex items-center w-full gap-2 px-3 py-3 text-sm font-medium leading-4 capitalize transition duration-150 ease-in-out border rounded-md focus:outline-none"
						:class="[
							'  hover:border-gray-300  focus:border-primary-500 dark:hover:border-gray-600 dark:focus:border-primary-500 ',
							{
								'!border-primary-500 ': open,
							},
							!!field?.invalid
								? 'border-red-500'
								: 'border-gray-200 dark:border-gray-700 ',
							selectedValue
								? 'text-primary-700'
								: 'text-gray-300 focus:text-primary-700 dark:text-gray-600',
							' ',
						]"
					>
						<span
							v-if="selectedValue && clearable"
							role="button"
							@click.stop="$emit('update:modelValue', null)"
						>
							<XCircleIcon
								class="h-4 transition duration-150 hover:scale-110"
							/>
						</span>
						<slot
							name="triggerLabel"
							:placeholder="placeholder"
							:selected-value="selectedValue"
							:selected-option="selectedOption"
							:selected-label="selectedLabel"
							:open="open"
							:disabled="disabled"
						>
							<template v-if="!multiple">
								<span>{{
									items.find(
										(item) => item[optionValue] === selectedValue
									)?.[label] ?? placeholder
								}}</span>
							</template>
							<template v-else>
								<span v-if="!selectedLabels.length">{{
									placeholder
								}}</span>
								<div v-else class="flex gap-2 text-xs truncate">
									<span
										v-for="(item, index) in selectedLabels"
										:key="index"
										>{{ item[label] }}</span
									>
								</div>
							</template>
						</slot>
						<ChevronDownIcon
							class="w-5 h-5 -mr-1 text-gray-400 ms-auto"
							aria-hidden="true"
						/>
					</button>
				</slot>
			</ListboxButton>
		</div>
		<Teleport :disabled="!teleport" to="body">
			<transition
				enter-from-class="opacity-0 scale-80"
				enter-to-class="scale-100 opacity-100"
				enter-active-class="transition duration-150 ease-in-out "
				leave-active-class="transition duration-150 ease-in-out"
				leave-from-class="scale-100 opacity-100"
				leave-to-class="scale-50 opacity-0"
			>
				<div
					:class="['z-50', transformOriginClass]"
					ref="floatingElmRef"
					v-show="open"
					:style="{
						...floatingStyles,
						width: floatingMinWidth,
						minWidth: 'max-content',
					}"
				>
					<ListboxOptions
						:class="[
							'max-h-60  min-w-full  overflow-auto rounded-md bg-secondary-200  py-1 text-base shadow-lg ring-1 ring-gray-200  focus:outline-none dark:ring-secondary-100 sm:text-sm ',
						]"
						static
					>
						<ListboxOption
							v-for="item in items"
							v-slot="{ active, selected }"
							:key="item['id']"
							:value="item[optionValue]"
						>
							<div
								:class="[
									optionClasses({
										active,
										selected,
									}),
									'relative  cursor-pointer select-none px-10 py-2',
								]"
							>
								<span
									v-if="selected"
									class="absolute inset-y-0 left-0 flex items-center pl-3"
								>
									<CheckIcon
										class="w-5 h-5 stroke-current stroke-1"
										aria-hidden="true"
									/>
								</span>
								<slot name="option" :option="item" :label="item[label]">
									<span>{{ item[label] }}</span>
								</slot>
							</div>
						</ListboxOption>
					</ListboxOptions>
				</div>
			</transition>
		</Teleport>
	</Listbox>
</template>
