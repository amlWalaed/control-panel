/** @type{import("vue-router").RouteRecordRaw[]} */
const routes = [
	{
		path: "/orders",
		name: "orders.index",
		component: () => import("@/pages/orders/Index.vue"),
	},
];
export default routes;
