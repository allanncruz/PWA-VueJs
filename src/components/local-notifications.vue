<template>
	<section>
		<h1>Notificações Locais</h1>

		<p> 
			Permissão: {{ permission}}
			 <a href="" @click.prevent="request()" v-if="permission !== 'granted'">Solicitar</a>
		</p> 
	</section>
</template>

<script>
export default {
	data() {
		return {
			permission: null
		}
	},

	methods: {
		request() {
			Notification.requestPermission(() =>{
				this.permission = Notification.permission
			})
		}
	},


	mounted() {
		this.permission = Notification.permission
	}
}
</script>