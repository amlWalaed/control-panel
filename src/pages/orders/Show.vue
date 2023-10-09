<script setup>
import {
	MapPinIcon,
	CalendarIcon,
	ClockIcon,
	CheckIcon,
	BanknotesIcon,
	InformationCircleIcon,
	PencilSquareIcon,
	XCircleIcon,
	PrinterIcon,
	PaperAirplaneIcon,
} from "@heroicons/vue/24/solid";
const userInfo = ref([
	{
		label: "السعودية، الرياض",
		icon: MapPinIcon,
	},
	{
		label: "مسجل منذ : 4 شهور",
		icon: CalendarIcon,
	},
	{
		label: "آخر نشاط : منذ يوم",
		icon: ClockIcon,
	},
	{
		label: "حساب نشط",
		icon: CheckIcon,
	},
	{
		label: "سيرة بريميوم : نشط",
		icon: BanknotesIcon,
	},
]);
</script>
<template>
	<div class="grid grid-cols-[1fr_2fr_1fr] gap-6 px-2">
		<div></div>
		<div></div>
		<div class="space-y-6">
			<h3>العميل</h3>
			<div class="panel">
				<div class="flex items-center gap-2">
					<img
						src="/images/avatar.jpeg"
						class="object-cover w-12 rounded-full aspect-square"
					/>
					<div>
						<div class="font-semibold">أحمد حسام عمر</div>
						<div class="text-blue-500">@ahmedHS29</div>
					</div>
				</div>
				<div class="space-y-3">
					<template v-for="info in userInfo">
						<div class="flex items-center gap-2 text-secondary-400">
							<component :is="info.icon" class="w-5" />
							<span>{{ info.label }}</span>
						</div>
					</template>
				</div>
			</div>
			<h3>خيارات الطلب</h3>
			<div class="panel">
				<button
					class="w-full p-3 rounded bg-secondary-200 text-secondary-500 hover:bg-secondary-300 hover:ring hover:ring-secondary-200"
				>
					<div class="flex gap-2">
						<span> <InformationCircleIcon class="w-6" /></span>
						<span>تغيير حالة الطلب</span>
					</div>
				</button>
				<button
					class="w-full p-3 bg-orange-100 rounded text-secondary-500 hover:bg-orange-300 hover:ring hover:ring-orange-200"
				>
					<div class="flex gap-2">
						<span> <PencilSquareIcon class="w-6" /></span>
						<span>تعديل الطلب</span>
					</div>
				</button>
				<button
					class="w-full p-3 bg-red-100 rounded text-secondary-500 hover:bg-red-300 hover:ring hover:ring-red-200"
				>
					<div class="flex gap-2">
						<span> <XCircleIcon class="w-6" /></span>
						<span>حذف الطلب </span>
					</div>
				</button>
			</div>
			<button
				class="flex w-full items-center justify-center gap-2 rounded bg-gradient-to-l from-[#648AEA] to-[#BB97E8] p-4 text-white"
			>
				<span>
					<PrinterIcon class="w-4" />
				</span>
				<span>طباعة الفاتورة</span>
			</button>
			<button
				class="flex items-center justify-center w-full gap-2 p-4 text-white rounded bg-secondary-300"
			>
				<span>
					<PaperAirplaneIcon class="w-4" />
				</span>
				<span>أرسل الفاتورة للعميل</span>
			</button>
		</div>
	</div>
</template>
