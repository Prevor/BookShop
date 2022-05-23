<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

* {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
}

*::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

*::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

*::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #D62929;
}

</style>