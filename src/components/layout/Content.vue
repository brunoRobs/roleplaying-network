<template>
	<div id="content">
		<RouterView name="content" />
	</div>
</template>

<style>
	#content {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100vh;
		background-color: rgb(147, 147, 147);
	}
</style>