<template>
  <div class="home">
    <div class="body-home">
      <div class="center grid">
        <vs-row>
          <vs-col offset="2" w="8">
            <h1>FacturaXpress</h1>
          </vs-col>
        </vs-row>

        <vs-row class="row">
          <vs-col
            offset="4"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
          >
            <vs-input border dark  label="Usuario" />
          </vs-col>
        </vs-row>
        <vs-row class="row">
          <vs-col
            offset="4"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
          >
            <vs-input border dark label="Contraseña" />
          </vs-col>
        </vs-row>
        <vs-row class="row">
          <vs-col
            offset="4"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
            class="button"
          >
            <vs-button to="/main" class="button-div" border :active="active == 0" @click="active = 0">
              Iniciar Sesión
            </vs-button>
          </vs-col>
        </vs-row>
        <vs-row class="row">
          <vs-col
            offset="4"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
            class="button"
          >
            <vs-button to="/Register" class="button-div" border :active="active == 0" @click="active = 0">
              Registrarse
            </vs-button>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
   
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap");
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f2709c, #ff9472);
  font-family: "Poppins", sans-serif;
}
.body-home {
  background: white;
  width: 55% !important;
  height: 55% !important;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
}
h1 {
  text-align: center;
}

.row {
  margin-top: 2pc !important;
}
.button{
  display: flex !important;
  justify-content: center !important;
}
.button-div{
  height: 2.5pc;
  width: 11pc;
}
</style>
