/** @type{import("vue-router").RouteRecordRaw[]} */
const routes = [
	{
		path: "/orders",
		name: "orders.index",
		component: () => import("@/pages/orders/Index.vue"),
	},
	{
		path: "/orders/show",
		name: "orders.show",
		component: () => import("@/pages/orders/Show.vue"),
	},
];
export default routes;
