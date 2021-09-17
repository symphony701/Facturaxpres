<template>
  <div class="home">
    <div class="body">
      <div class="center grid">
        <vs-row>
          <vs-col offset="2" w="8">
            <h1>FacturaXpress</h1>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col offset="2" w="8">
            <h2>Hola Usuario ¿Qué desas realizar?</h2>
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
            <vs-button to="/factura" class="button-div" border :active="active == 0" @click="active = 0">
              Realizar Factura
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
            <vs-button to="/historial" class="button-div" border :active="active == 0" @click="active = 0">
              Historial de facturas
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
            <vs-button to="/ayuda" class="button-div" border :active="active == 0" @click="active = 0">
              ¿Necesitas ayuda?
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
            <vs-button to="/" class="button-div" border :active="active == 0" @click="active = 0">
              Cerrar sesión
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
  name: "Main",
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
.body {
  background: white;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
}
h1 {
  text-align: center;
}
h2 {
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