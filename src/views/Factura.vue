<template>
  <div class="home">
    <div class="body-historial">
      <div class="center">
        <vs-row>
          <vs-col offset="2" w="8">
            <h1>Realizar Factura</h1>
          </vs-col>
        </vs-row>
        <vs-row  justify="space-around" class="input-group row">
          <vs-col w="2">
            <vs-input dark border label="Total facturado" />
          </vs-col>
          <vs-col w="2">
            <vs-input dark border label="Tipo de moneda" />
          </vs-col>
          <vs-col w="2">
            <vs-input dark border type="date" label="Contraseña" />
          </vs-col>
          <vs-col w="2">
            <vs-input dark border type="date" label="Contraseña" />
          </vs-col>
        </vs-row>

        <vs-row justify="space-around" class="input-group ">
          <vs-col w="2">
            <vs-select label="Tasa" v-model="value1">
              <vs-option label="Efectiva" value="1"> Efectiva </vs-option>
              <vs-option label="Nominal" value="2"> Nominal </vs-option>
            </vs-select>
          </vs-col>
          <vs-col w="2">
            <vs-input dark border label="Porcentaje de tasa" />
          </vs-col>
          <vs-col w="2">
            <vs-select label="Plazo de tasa" v-model="value2">
              <vs-option label="Anual" value="1"> Anual </vs-option>
              <vs-option label="Mensual" value="2"> Mensual </vs-option>
              <vs-option label="Diaria" value="3"> Diaria </vs-option>
            </vs-select>
          </vs-col>
        </vs-row>
        <vs-row justify="space-around" class="input-group">
          <vs-col w="2">
            <vs-select label="Días por año" v-model="value3">
              <vs-option label="360 días" value="1"> 360 días </vs-option>
              <vs-option label="365 días" value="2"> 365 días</vs-option>
            </vs-select>
          </vs-col>

          <vs-col w="2">
            <vs-select label="Periodo de capitalización" v-model="value4">
              <vs-option label="Anual" value="1"> Anual </vs-option>
              <vs-option label="Mensual" value="2"> Mensual </vs-option>
              <vs-option label="Diaria" value="3"> Diaria </vs-option>
            </vs-select>
          </vs-col>
          <vs-col w="2" class="input-plazo">
            <vs-input dark border label="Plazo" />
            <vs-select v-model="value5" :state="primary">
              <vs-option label="Días" value="1"> Días </vs-option>
              <vs-option label="Meses" value="2"> Meses </vs-option>
              <vs-option label="Años" value="3"> Años </vs-option>
            </vs-select>
          </vs-col>
        </vs-row>
        <vs-row >
          <vs-col
            offset="4"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
            class="button"
          >
            <vs-button
              to="/main"
              class="button-div"
              border
              :active="active == 0"
              @click="active = 0"
            >
              Crear
            </vs-button>
            <vs-col
            offset="4"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
            class="button"
          >
            <vs-button
              to="/main"
              class="button-div"
              border
              :active="active == 0"
              @click="active = 0"
            >
              Salir
            </vs-button>
          </vs-col>
          </vs-col>
        </vs-row>
       
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Factura",
  components: {},
  data: () => ({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
  }),
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
.body-historial {
  background: white;
  width: 90%;
  height: auto;
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
  margin-top: 5pc !important;
}
.button {
  display: flex !important;
  justify-content: center !important;
}
.button-div {
  height: 2.5pc;
  width: 13rem !important;
}
.vs-table__tr {
  font-weight: 600;
}
.vs-table {
  background: #f3e0d7;
}
.vs-table__tbody {
  overflow-y: auto;
}
.input-group {
  margin-top: 4pc;
  margin-bottom:1pc;
  font-weight: 900;
}
.input-plazo {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}
.input-plazo .vs-input--817 {
  width: 140px;
}
.input-plazo .vs-select__input {
    margin-top:20px;
}
</style>