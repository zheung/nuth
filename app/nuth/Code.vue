<template>
	<module>
		<p-login-box v-if="!isAccessed">
			<Texter v-model="password" password type="pass" place="访问密码" @keypress.enter="access" />
			<Click access text="访问" @click="access" />
		</p-login-box>
		<template v-else>
			<p-prog><p-prog-value :style="{ width: `${(second - 1) / 29 * 100}%`}" /></p-prog>
			<p-coder-list>
				<p-coder v-for="data of datas" :key="`code-${data.key}`">
					<p-title v-tip="data.user">{{data.issuer}} ({{data.user}})</p-title>
					<p-code-box @click="copy(data.code)">
						<p-code>{{data.code}}</p-code>
						<p-code-icon><Fas :icon="faClipboard" /></p-code-icon>
					</p-code-box>
				</p-coder>
			</p-coder-list>
		</template>
	</module>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import Clipboard from 'clipboard';

	import { $get } from '../lib/plugin/Aegis.js';

	import { tabs } from '../lib/Sidebar.vue';


	import Texter from '../lib/comp/Texter.vue';
	import Click from '../lib/comp/Click.vue';

	import decrypt from './lib/decrypt.js';
	import totp from './lib/TOTP.js';

	import { faClipboard } from '@fortawesome/free-solid-svg-icons';




	onMounted(() => tabs.emitChanged());


	// const now = ref(new Tab());
	// const T = computed(() => now.value.info);

	// const initTab = (tab) => {
	// 	const info = tab.info;


	// 	info.isInit = true;
	// };

	// tabs.addChanger('code', tab => {
	// 	now.value = tab;


	// 	if(!tab.info.isInit) { initTab(tab); }
	// });


	const isAccessed = ref(false);

	const datas = ref([]);


	const password = ref('');

	const second = ref(30);


	const updateCodes = () => datas.value.forEach(data => data.code = totp(data.key, data.type == 'steam'));

	const copy = (text) => Clipboard.copy(String(text));

	const access = async () => {
		const text = await $get('data', null, { prefix: './', return: 'raw' });

		datas.value = JSON.parse(decrypt(text, password.value)).sort((a, b) => a.issuer.localeCompare(b.issuer));

		isAccessed.value = true;


		updateCodes();

		setInterval(() => {
			const secondNew = second.value = 30 - new Date().getSeconds() % 30;

			if(secondNew == 1) {
				updateCodes();
			}
		}, 1000);
	};
</script>

<style lang="sass" scoped>
p-login-box
	@apply block p-4 text-center text-2xl

	[password]
		@apply inblock mr-4 w-64

	[access]
		@apply inblock

p-prog
	@apply block fixed w-full h-0.5 top-0 left-0 overflow-hidden

	p-prog-value
		@apply relative trans block fixed h-full bg-blue-400 top-0 left-0 overflow-hidden rounded-sm

p-coder-list
	@apply block grid gap-4 p-4
	@apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6

	p-coder
		@apply relative inblock p-4 bg-blue-500 shadow-mdd text-white rounded-md

		p-title
			@apply elli block mb-2 text-gray-200

		p-code-box:hover
			@apply text-blue-200

		p-code
			@apply inblock trans text-2xl font-bold pl-2 cursor-pointer w-28

		p-code-icon
			@apply inblock trans float-right text-2xl font-bold cursor-pointer w-4
</style>
