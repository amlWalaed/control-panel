<script setup>
import {
	XMarkIcon,
	ClockIcon,
	ChevronLeftIcon,
	PlusIcon,
	ChevronDownIcon,
	CheckIcon,
} from "@heroicons/vue/24/solid";
import {
	CheckBadgeIcon,
	ArrowsUpDownIcon,
	AdjustmentsVerticalIcon,
} from "@heroicons/vue/24/outline";
const filteredValues = ref([]);
watch(
	() => filteredValues.value,
	() => {
		console.log(filteredValues.value);
	}
);
const filterOptions = [
	{
		id: Math.floor(Math.random() * 100).toString(),
		label: "بانتظار الدفع",
		rightIcon: ChevronLeftIcon,
		itemsCount: 100,
		value: Math.floor(Math.random() * 100),
	},
	{
		id: Math.floor(Math.random() * 100).toString(),
		label: "بانتظار الدفع",
		rightIcon: ClockIcon,
		itemsCount: 100,
		value: Math.floor(Math.random() * 100),
	},
	{
		id: Math.floor(Math.random() * 100).toString(),
		label: "بانتظار الدفع",
		rightIcon: ClockIcon,
		itemsCount: 100,
		value: Math.floor(Math.random() * 100),
	},
	{
		id: Math.floor(Math.random() * 100).toString(),
		label: "بانتظار الدفع",
		rightIcon: ClockIcon,
		itemsCount: 100,
		value: Math.floor(Math.random() * 100),
	},
	{
		id: Math.floor(Math.random() * 100).toString(),
		label: "بانتظار الدفع",
		rightIcon: ClockIcon,
		itemsCount: 100,
		value: Math.floor(Math.random() * 100),
	},
	{
		id: Math.floor(Math.random() * 100).toString(),
		label: "بانتظار الدفع",
		rightIcon: ClockIcon,
		itemsCount: 100,
		value: Math.floor(Math.random() * 100),
	},
];
const removeFilter = (value) => {
	filteredValues.value = filteredValues.value.filter((item) => item !== value);
};
/**
 * @type { Ref<HTMLElement>}
 */
const filtersRef = ref();
const scrollContainers = () => {
	filtersRef.value.scrollBy({
		left: -200,
		behavior: "smooth",
	});
};

const selectedField = ref();
const fieldsList = ref([
	{ name: "text", value: "1" },
	{ name: "textarea", value: "3" },
]);
</script>

<template>
	<div dir="rtl" class="grid grid-cols-[1fr_minmax(50%,3fr)_1fr] gap-2 px-2">
		<div></div>
		<div>
			<div class="relative">
				<div
					class="flex w-full gap-3 overflow-x-auto hideScrollbar pe-10"
					ref="filtersRef"
				>
					<template v-for="(option, index) in filterOptions" :key="index">
						<checkbox
							v-model="filteredValues"
							:id="option.id"
							:value="option.value"
						>
							<template #trigger="{ checked }">
								<div
									:class="[
										'relative flex min-w-[10rem] items-center justify-between gap-2 rounded border p-2 text-sm',
										checked
											? 'border-primary bg-primary text-white'
											: 'border-secondary-200 bg-white text-secondary-200',
									]"
								>
									<span>
										<component :is="option.rightIcon" class="w-4" />
									</span>
									<span>{{ option.label }}</span>
									<span
										:class="[
											'rounded-full border px-[3px] py-px text-xs',
											checked
												? 'bg-secondary-200 text-black'
												: 'border-secondary-200 text-secondary-200',
										]"
										>{{ option.itemsCount }}</span
									>
									<button
										v-if="checked"
										class="absolute top-0 p-px -m-2 text-white bg-red-500 rounded-full rt end-0 hover:bg-red-700"
										@click.prevent="() => removeFilter(option.value)"
									>
										<XMarkIcon class="w-4" />
									</button>
								</div>
							</template>
						</checkbox>
					</template>
				</div>
				<button
					class="absolute end-0 top-0 flex h-full items-center justify-center bg-gradient-to-r from-white from-60% to-transparent p-3 ltr:rotate-180"
					@click="scrollContainers"
				>
					<ChevronLeftIcon class="w-6 text-primary" />
				</button>
			</div>
		</div>
		<div class="space-y-6">
			<button
				class="flex w-full items-center justify-center gap-2 rounded bg-gradient-to-l from-[#648AEA] to-[#BB97E8] p-4 text-white"
			>
				<span>
					<PlusIcon class="w-4" />
				</span>
				<span>اضف طلب جديد</span>
			</button>
			<div class="p-4 space-y-6 border rounded-xl border-secondary-200">
				<div class="space-y-3">
					<div
						class="flex items-center gap-2 font-bold text-secondary-400"
					>
						<span>
							<CheckBadgeIcon class="w-4" />
						</span>
						<span>الحقول المحددة </span>
					</div>
					<div class="flex gap-2">
						<SelectBox
							class="grow"
							v-model="selectedField"
							:items="fieldsList"
							label="name"
							option-value="value"
							placeholder="select field"
						>
							<template #trigger="{ placeholder, selectedLabel }">
								<button
									class="flex items-center justify-between w-full gap-2 p-3 rounded bg-secondary-100 text-secondary-500"
								>
									<span>{{ selectedLabel ?? placeholder }}</span>
									<span><ChevronDownIcon class="w-4" /></span>
								</button>
							</template>
						</SelectBox>
						<button
							class="flex items-center gap-2 p-3 rounded bg-secondary-200 text-secondary-500"
						>
							<CheckIcon class="w-4" />
						</button>
					</div>
				</div>
				<div class="space-y-3">
					<div
						class="flex items-center gap-2 font-bold text-secondary-400"
					>
						<span>
							<ArrowsUpDownIcon class="w-4" />
						</span>
						<span>ترتيب المحتوى</span>
					</div>
					<SelectBox
						class="grow"
						v-model="selectedField"
						:items="fieldsList"
						label="name"
						option-value="value"
						placeholder="select field"
					>
						<template #trigger="{ placeholder, selectedLabel }">
							<button
								class="flex items-center justify-between w-full gap-2 p-3 rounded bg-secondary-100 text-secondary-500"
							>
								<span>{{ selectedLabel ?? placeholder }}</span>
								<span><ChevronDownIcon class="w-4" /></span>
							</button>
						</template>
					</SelectBox>
				</div>
				<div class="space-y-3">
					<div
						class="flex items-center gap-2 font-bold text-secondary-400"
					>
						<span>
							<AdjustmentsVerticalIcon class="w-4" />
						</span>
						<span>فلترة المحتوى</span>
					</div>
					<Collapse title="حالة الطلب">
						<template #content>
							<div class="space-y-3">
								<template v-for="option in filterOptions">
									<label
										:for="option.id"
										class="flex items-center gap-2"
									>
										<input
											type="checkbox"
											:id="option.id"
											v-model="filteredValues"
											:value="option.value"
										/>
										<span>{{ option.label }}</span>
										<div
											:class="[
												'ms-auto rounded-full p-1 text-sm font-bold text-secondary-200',
												filteredValues.find(
													(p) => option.value === p
												)
													? 'bg-blue-500 '
													: 'border border-secondary-200 text-secondary-200',
											]"
										>
											{{ option.itemsCount }}
										</div>
									</label>
								</template>
							</div>
						</template>
					</Collapse>
					<Collapse title="المدينة">
						<template #content> المدينة </template>
					</Collapse>
					<Collapse title="تاريخ الطلب">
						<template #content> تاريخ الطلب </template>
					</Collapse>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
