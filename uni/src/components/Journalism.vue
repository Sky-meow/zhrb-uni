<template>
	<div v-html="datas" ref="container">
		{{datas}}
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				datas:null,
			}
		},
		mounted(){
			var thisURL = document.URL; 
			var getval =thisURL.split('?')[1]; 
			var showval= getval.split("=")[1];
			this.axios({
				method:'get',
				url:'/api/api/4/news/'+showval
			})
			.then(response => {
				this.datas = response.data.body;
			})
			.catch(error => {
				console.log(error)
			});
			history.pushState(null,null,document.URL); 
				window.addEventListener('popstate', function() { 
				history.pushState(null, null,document.location.href="http://localhost:8080"); 
			});
		}
	}
</script>