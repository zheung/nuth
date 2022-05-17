<template>
	<module>
		<div @click="alert">abc</div>
	</module>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { $alert } from '../lib/plugin/Alert.vue';

	import { Tab } from '../lib/TabAdmin.js';
	import { tabs } from '../lib/Sidebar.vue';




	onMounted(() => tabs.emitChanged());

	const now = ref(new Tab());
	const T = computed(() => now.value.info);

	const initTab = (tab) => {
		const info = tab.info;


		info.isInit = true;
	};

	tabs.addChanger('code', tab => {
		now.value = tab;


		if(!tab.info.isInit) { initTab(tab); }
	});


	const alert = () => $alert('wohenhao');
</script>

<style lang="sass" scoped>
[name-new]
	@apply inblock m-4 w-60 p-1
[button]
	@apply inblock m-4 ml-0 px-2 py-1

p-box
	@apply block m-4

p-log
	@apply block
</style>
