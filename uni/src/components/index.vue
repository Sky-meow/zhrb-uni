<template>
	<div v-html="datas" ref="container">
		{{datas}}
	</div>
</template>

<script>
	export default {
		mounted(){
			this.axios({
				method:'get',
				url:'/api/api/4/news/latest'
			})
			.then(response => {
				this.dailyNewspaper(response);
			})
			.catch(error => {
				console.log(error)
			});
			setTimeout(() => {
				var vue = this;
				var containers = this.$refs.container.childNodes;
				for (var i = 0; i < containers.length; i++) {
					containers[i].addEventListener("click",function(){
						var id = this.childNodes[1].childNodes[0].value;
						vue.jump(id);
					});
				}
				
            }, 1000);
		},		
		data: function() {
			return {
				datas:null,
				dailyPhoto:null,
				dailyHeadline:null,
				dailyContainer:null
			}
		},
		methods: {
			dailyNewspaper(datas){
				this.dailyPhoto = "<div style='float:right; width:25%'><input type='text' value="+datas.data.stories[0].id+" style='display: none;' /><img src="+datas.data.stories[0].images[0]+" style='width:100px; height:100px;' /></div>";
				this.dailyHeadline = "<div style='float:left; width:65%; font-size:20px; font-weight:600;'>"+datas.data.stories[0].title+"</div>";
				this.dailyContainer = "<div style='float:left; width:96%; background-color:gray; padding:10px; margin:10px;'>"+this.dailyHeadline+this.dailyPhoto+"</div>";
				this.datas = this.dailyContainer;
				for (var i = 1; i < datas.data.stories.length; i++) {
					this.dailyPhoto = "<div style='float:right; width:25%'><input type='text' value="+datas.data.stories[i].id+" style='display: none;' /><img src="+datas.data.stories[i].images[0]+" style='width:100px; height:100px;' /></div>";
					this.dailyHeadline = "<div style='float:left; width:65%; font-size:20px; font-weight:600;'>"+datas.data.stories[i].title+"</div>";
					this.dailyContainer = "<div style='float:left; width:96%; background-color:gray; padding:10px; margin:10px;'>"+this.dailyHeadline+this.dailyPhoto+"</div>";
					this.datas += this.dailyContainer;
				}
			},
			jump(id){
				this.$router.push('/Journalism?id='+id);
			}
		}
	}
</script>