<script setup>
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { RouterLink } from "vue-router";

defineOptions({
	inheritAttrs: false,
});

const props = defineProps({
	iconLeft: [Object, Function],
	iconRight: [Object, Function],
	iconClass: String,
	loading: Boolean,
	disabled: Boolean,
	as: {
		type: [String, Object],
		default: "button",
	},
	/** @type {import("vue").PropType<'button'|'submit'|'reset'>} */
	nativeType: {
		default: "button",
		type: String,
	},
	/** @type {import("vue").PropType<'primary'|'secondary'|'neutral'|'danger'|'info'|'success'|'warning'>} */
	buttonType: {
		type: String,
		validator: (val) =>
			[
				"primary",
				"secondary",
				"neutral",
				"danger",
				"info",
				"success",
				"warning",
			].includes(val),
	},
	/** @type {import("vue").PropType<'solid'|'outline'|'text'|'link'>} */
	buttonStyle: {
		type: String,
		validator: (val) => ["solid", "outline", "text", "link"].includes(val),
	},
	/** @type {import("vue").PropType<"full"| "circle"| "none"| "sm"|'base'| "md"| "lg"|"xl"|"2xl"|"3xl">} */
	roundness: {
		type: String,
		validator: (val) =>
			[
				"full",
				"circle",
				"none",
				"sm",
				"base",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
			].includes(val),
	},
	/** @type {import("vue").PropType<"xs"| "sm"| "base"| "lg"|"xl">} */
	size: {
		type: String,
		validator: (val) => ["xs", "sm", "base", "lg", "xl"].includes(val),
	},
});

const buttonClass = computed(() => {
	return cva(
		[
			"inline-flex relative group/button items-center justify-center min-h-[32px] px-4 py-2 font-title  capitalize transition-colors",
			" focus-visible:ring-1 focus-visible:outline-none ring-offset-1 focus-visible:ring-[--btn-bg-color]  dark:focus-visible:ring-offset-[--btn-bg-active-color]",
		],
		{
			defaultVariants: {
				buttonStyle: "solid",
				buttonType: "primary",
				disabled: "false",
				loading: "valse",
				roundness: "base",
				size: "sm",
			},
			variants: {
				buttonType: {
					primary: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.white)]",
						"[--btn-bg-color:theme(colors.primary.500)] dark:[--btn-bg-color:theme(colors.primary.600)]",
						"[--btn-bg-hover-color:theme(colors.primary.600)] dark:[--btn-bg-hover-color:theme(colors.primary.700)]",
						"[--btn-bg-focus-color:theme(colors.primary.400)] dark:[--btn-bg-focus-color:theme(colors.primary.700)] ",
						"[--btn-bg-active-color:theme(colors.primary.500)] dark:[--btn-bg-active-color:theme(colors.primary.600)]",
					],
					secondary: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.white)]",
						"[--btn-bg-color:theme(colors.secondary.500)] dark:[--btn-bg-color:theme(colors.secondary.600)]",
						"[--btn-bg-hover-color:theme(colors.secondary.400)] dark:[--btn-bg-hover-color:theme(colors.secondary.700)]",
						"[--btn-bg-focus-color:theme(colors.secondary.400)] dark:[--btn-bg-focus-color:theme(colors.secondary.700)] ",
						"[--btn-bg-active-color:theme(colors.secondary.500)] dark:[--btn-bg-active-color:theme(colors.secondary.600)]",
					],
					neutral: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.neutral.800)]",
						"[--btn-bg-color:theme(colors.neutral.800)] dark:[--btn-bg-color:theme(colors.neutral.200)]",
						"[--btn-bg-hover-color:theme(colors.neutral.600)] dark:[--btn-bg-hover-color:theme(colors.neutral.300)]",
						"[--btn-bg-focus-color:theme(colors.neutral.600)] dark:[--btn-bg-focus-color:theme(colors.neutral.300)] ",
						"[--btn-bg-active-color:theme(colors.neutral.500)] dark:[--btn-bg-active-color:theme(colors.neutral.100)]",
					],
					warning: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.white)]",
						"[--btn-bg-color:theme(colors.yellow.500)] dark:[--btn-bg-color:theme(colors.yellow.600)]",
						"[--btn-bg-hover-color:theme(colors.yellow.400)] dark:[--btn-bg-hover-color:theme(colors.yellow.700)]",
						"[--btn-bg-focus-color:theme(colors.yellow.400)] dark:[--btn-bg-focus-color:theme(colors.yellow.700)] ",
						"[--btn-bg-active-color:theme(colors.yellow.500)] dark:[--btn-bg-active-color:theme(colors.yellow.600)]",
					],
					info: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.white)]",
						"[--btn-bg-color:theme(colors.stone.500)] dark:[--btn-bg-color:theme(colors.stone.600)]",
						"[--btn-bg-hover-color:theme(colors.stone.400)] dark:[--btn-bg-hover-color:theme(colors.stone.700)]",
						"[--btn-bg-focus-color:theme(colors.stone.400)] dark:[--btn-bg-focus-color:theme(colors.stone.700)] ",
						"[--btn-bg-active-color:theme(colors.stone.500)] dark:[--btn-bg-active-color:theme(colors.stone.600)]",
					],
					success: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.white)]",
						"[--btn-bg-color:theme(colors.green.500)] dark:[--btn-bg-color:theme(colors.green.600)]",
						"[--btn-bg-hover-color:theme(colors.green.400)] dark:[--btn-bg-hover-color:theme(colors.green.700)]",
						"[--btn-bg-focus-color:theme(colors.green.400)] dark:[--btn-bg-focus-color:theme(colors.green.700)] ",
						"[--btn-bg-active-color:theme(colors.green.500)] dark:[--btn-bg-active-color:theme(colors.green.600)]",
					],
					danger: [
						"[--btn-text-color:theme(colors.white)] dark:[--btn-text-color:theme(colors.white)]",
						"[--btn-bg-color:theme(colors.red.500)] dark:[--btn-bg-color:theme(colors.red.600)]",
						"[--btn-bg-hover-color:theme(colors.red.400)] dark:[--btn-bg-hover-color:theme(colors.red.700)]",
						"[--btn-bg-focus-color:theme(colors.red.400)] dark:[--btn-bg-focus-color:theme(colors.red.700)] ",
						"[--btn-bg-active-color:theme(colors.red.500)] dark:[--btn-bg-active-color:theme(colors.red.600)]",
					],
				},
				buttonStyle: {
					solid: "shadow bg-[--btn-bg-color] border-2 border-[--btn-bg-color] hover:border-[--btn-bg-hover-color] text-[--btn-text-color] ",
					outline:
						"border-2 border-[--btn-bg-color] text-[--btn-bg-color]  ",
					text: "text-[--btn-bg-color]",
					link: " aria-[disabled='false']:hover:underline text-[--btn-bg-color] p-0 ",
				},
				roundness: {
					full: "rounded-full",
					circle: "rounded-full aspect-square",
					none: "rounded-none",
					sm: "rounded-sm",
					base: "rounded",
					md: "rounded-md",
					lg: "rounded-lg",
					xl: "rounded-xl",
					"2xl": "rounded-2xl",
					"3xl": "rounded-3xl",
				},
				size: {
					xs: "text-xs",
					sm: "text-sm",
					base: "text-base",
					lg: "text-lg px-5 py-1",
					xl: "text-xl px-5 py-1",
				},
				disabled: {
					true: "  cursor-not-allowed contrast-75 opacity-75 brightness-125 ",
				},
				loading: {
					true: "cursor-progress",
				},
			},
			compoundVariants: [
				/* ----------------------------------- change the variables in outline and text ----------------------------------- */
				{
					buttonType: ["primary"],
					buttonStyle: ["outline", "text"],
					class: [
						"aria-[disabled='false']:dark:hover:[--btn-bg-color:theme(colors.primary.500)] aria-[disabled='false']:dark:focus:[--btn-bg-color:theme(colors.primary.500)] aria-[disabled='false']:dark:active:[--btn-bg-color:theme(colors.primary.400)]",
						"[--btn-bg-hover-color:theme(colors.primary.50)] dark:[--btn-bg-hover-color:theme(colors.primary.950)] ",
						" [--btn-bg-focus-color:theme(colors.primary.50)] dark:[--btn-bg-focus-color:theme(colors.primary.950)]",
						" [--btn-bg-active-color:theme(colors.primary.100)] dark:[--btn-bg-active-color:theme(colors.primary.900)]",
					],
				},
				{
					buttonType: ["secondary"],
					buttonStyle: ["outline", "text"],
					class: [
						"aria-[disabled='false']:dark:hover:[--btn-bg-color:theme(colors.secondary.500)] aria-[disabled='false']:dark:focus:[--btn-bg-color:theme(colors.secondary.500)] aria-[disabled='false']:dark:active:[--btn-bg-color:theme(colors.secondary.400)]",
						"[--btn-bg-hover-color:theme(colors.secondary.50)] dark:[--btn-bg-hover-color:theme(colors.secondary.950)] ",
						" [--btn-bg-focus-color:theme(colors.secondary.50)] dark:[--btn-bg-focus-color:theme(colors.secondary.950)]",
						" [--btn-bg-active-color:theme(colors.secondary.100)] dark:[--btn-bg-active-color:theme(colors.secondary.900)]",
					],
				},
				{
					buttonType: ["neutral"],
					buttonStyle: ["outline", "text"],
					class: [
						"[--btn-bg-hover-color:theme(colors.neutral.50)] dark:[--btn-bg-hover-color:theme(colors.neutral.700)] ",
						" [--btn-bg-focus-color:theme(colors.neutral.50)] dark:[--btn-bg-focus-color:theme(colors.neutral.700)]",
						" [--btn-bg-active-color:theme(colors.neutral.100)] dark:[--btn-bg-active-color:theme(colors.neutral.600)]",
					],
				},
				{
					buttonType: ["success"],
					buttonStyle: ["outline", "text"],
					class: [
						"aria-[disabled='false']:dark:hover:[--btn-bg-color:theme(colors.green.500)] aria-[disabled='false']:dark:focus:[--btn-bg-color:theme(colors.green.500)] aria-[disabled='false']:dark:active:[--btn-bg-color:theme(colors.green.400)]",
						"[--btn-bg-hover-color:theme(colors.green.50)] dark:[--btn-bg-hover-color:theme(colors.green.950)] ",
						" [--btn-bg-focus-color:theme(colors.green.50)] dark:[--btn-bg-focus-color:theme(colors.green.950)]",
						" [--btn-bg-active-color:theme(colors.green.100)] dark:[--btn-bg-active-color:theme(colors.green.900)]",
					],
				},
				{
					buttonType: ["danger"],
					buttonStyle: ["outline", "text"],
					class: [
						"aria-[disabled='false']:dark:hover:[--btn-bg-color:theme(colors.red.500)] aria-[disabled='false']:dark:focus:[--btn-bg-color:theme(colors.red.500)] aria-[disabled='false']:dark:active:[--btn-bg-color:theme(colors.red.400)]",
						"[--btn-bg-hover-color:theme(colors.red.50)] dark:[--btn-bg-hover-color:theme(colors.red.950)] ",
						" [--btn-bg-focus-color:theme(colors.red.50)] dark:[--btn-bg-focus-color:theme(colors.red.950)]",
						" [--btn-bg-active-color:theme(colors.red.100)] dark:[--btn-bg-active-color:theme(colors.red.900)]",
					],
				},
				{
					buttonType: ["warning"],
					buttonStyle: ["outline", "text"],
					class: [
						"aria-[disabled='false']:dark:hover:[--btn-bg-color:theme(colors.yellow.500)] aria-[disabled='false']:dark:focus:[--btn-bg-color:theme(colors.yellow.500)] aria-[disabled='false']:dark:active:[--btn-bg-color:theme(colors.yellow.400)]",
						"[--btn-bg-hover-color:theme(colors.yellow.50)] dark:[--btn-bg-hover-color:theme(colors.yellow.950)] ",
						" [--btn-bg-focus-color:theme(colors.yellow.50)] dark:[--btn-bg-focus-color:theme(colors.yellow.950)]",
						" [--btn-bg-active-color:theme(colors.yellow.100)] dark:[--btn-bg-active-color:theme(colors.yellow.900)]",
					],
				},
				{
					buttonType: ["info"],
					buttonStyle: ["outline", "text"],
					class: [
						"aria-[disabled='false']:dark:hover:[--btn-bg-color:theme(colors.stone.500)] aria-[disabled='false']:dark:focus:[--btn-bg-color:theme(colors.stone.500)] aria-[disabled='false']:dark:active:[--btn-bg-color:theme(colors.stone.400)]",
						"[--btn-bg-hover-color:theme(colors.stone.50)] dark:[--btn-bg-hover-color:theme(colors.stone.950)] ",
						" [--btn-bg-focus-color:theme(colors.stone.50)] dark:[--btn-bg-focus-color:theme(colors.stone.950)]",
						" [--btn-bg-active-color:theme(colors.stone.100)] dark:[--btn-bg-active-color:theme(colors.stone.900)]",
					],
				},
				/* -----------------------------------  apply styles   ----------------------------------- */
				/* -----------------------------------  apply styles to solid outline text   ----------------------------------- */
				{
					buttonType: [
						"primary",
						"secondary",
						"neutral",
						"danger",
						"info",
						"success",
						"warning",
					],
					buttonStyle: ["solid", "outline", "text"],
					class: "  aria-[disabled='false']:active:bg-[--btn-bg-active-color] aria-[disabled='false']:hover:bg-[--btn-bg-hover-color] aria-[disabled='false']:focus-visible:bg-[--btn-bg-focus-color] ",
				},
				/* -----------------------------------  apply styles to link   ----------------------------------- */
				{
					buttonType: [
						"primary",
						"secondary",
						"neutral",
						"danger",
						"info",
						"success",
						"warning",
					],
					buttonStyle: ["link"],
					class: "aria-[disabled='false']:active:text-[--btn-bg-active-color] aria-[disabled='false']:hover:text-[--btn-bg-hover-color] aria-[disabled='false']:focus-visible:text-[--btn-bg-focus-color]",
				},
			],
		}
	)({
		buttonType: props.buttonType,
		buttonStyle: props.buttonStyle,
		roundness: props.roundness,
		disabled: props.disabled,
		loading: props.loading,
		size: props.size,
	});
});
const isDisabled = computed(() => props.disabled || props.loading);
const tag = computed(() =>
	props.as.toLowerCase() === "link" ? RouterLink : props.as
);
// add button-style: plain (outline with light bg and solid while hovering) with optional border | solid-inverse
//add button-types: accent | custom color
// think about implement the active|focus effect in another way [scale down the button | increase contrast or brightness]
// handle the icon button padding | change the icons to be start and end instead | add "icon" prop
</script>

<template>
	<component
		:is="tag"
		:aria-disabled="isDisabled"
		:disabled="isDisabled"
		:type="nativeType"
		:class="twMerge(buttonClass, $attrs.class)"
		v-bind="
			Object.fromEntries(
				Object.entries($attrs).filter(([key]) => !key.includes('class'))
			)
		"
	>
		<div
			v-if="props.loading"
			class="absolute inset-0 grid place-items-center aria-[disabled='false']:text-red-200"
		>
			<svg
				class="w-1/2 max-w-[3.5rem]"
				version="1.1"
				id="L4"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 100 20"
				enable-background="new 0 0 0 0"
				xml:space="preserve"
			>
				<circle fill="currentColor" stroke="none" cx="25" cy="10" r="6">
					<animate
						attributeName="opacity"
						dur="1s"
						values="0;1;0"
						repeatCount="indefinite"
						begin="0.1"
					/>
				</circle>
				<circle fill="currentColor" stroke="none" cx="50" cy="10" r="6">
					<animate
						attributeName="opacity"
						dur="1s"
						values="0;1;0"
						repeatCount="indefinite"
						begin="0.2"
					/>
				</circle>
				<circle fill="currentColor" stroke="none" cx="75" cy="10" r="6">
					<animate
						attributeName="opacity"
						dur="1s"
						values="0;1;0"
						repeatCount="indefinite"
						begin="0.3"
					/>
				</circle>
			</svg>
		</div>
		<component
			:is="props.iconLeft"
			:class="
				twMerge(
					[
						$slots.default ? 'me-2 w-4' : 'w-5',
						props.loading && 'invisible',
					],
					iconClass
				)
			"
		/>

		<span :class="[props.loading && 'invisible']">
			<slot />
		</span>

		<component
			:is="props.iconRight"
			v-if="!props.loading"
			:class="
				twMerge(
					[
						$slots.default ? 'ms-2 w-4' : 'w-5',
						props.loading && 'invisible',
					],
					iconClass
				)
			"
		/>
	</component>
</template>
