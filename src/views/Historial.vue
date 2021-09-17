<template>
  <div class="home">
    <div class="body-historial">
      <div class="center">
        <vs-row>
          <vs-col offset="2" w="8">
            <h1>Historial de Facturas</h1>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col offset="2" w="8">
            <vs-table>
              <template #thead>
                <vs-tr>
                  <vs-th> Name </vs-th>
                  <vs-th> Email </vs-th>
                  <vs-th> Id </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(tr, i) in $vs.getPage(users, page, max)"
                  :data="tr"
                >
                  <vs-td>
                    {{ tr.name }}
                  </vs-td>
                  <vs-td>
                    {{ tr.email }}
                  </vs-td>
                  <vs-td>
                    {{ tr.id }}
                  </vs-td>
                </vs-tr>
              </template>
              <template #footer>
                <vs-pagination
                  v-model="page"
                  :length="$vs.getLength(users, max)"
                />
              </template>
            </vs-table>
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
              Salir
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
  name: "Historial",
  components: {},
  data: () => ({
    page: 1,
    max: 5,
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ],
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
.button {
  display: flex !important;
  justify-content: center !important;
}
.button-div {
  height: 2.5pc;
  width: 11pc;
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
</style>