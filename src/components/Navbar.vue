<template>
  <nav>
    <v-app-bar app color="indigo">    
    
    <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>  
    
    <v-toolbar-title class="headline text-uppercase white--text">ScolarEsi</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn x-large icon class="white--text" router :to="links[1].route">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon class="white--text">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

    </v-app-bar>


    <v-navigation-drawer app v-model="drawer" class="indigo" >
        <v-list>
            <v-list-tile  >
            <div>
            <img src="../imgs/esi_logo.png" style="width:220px;height:80px">
            <v-btn x-large block text v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>    
                <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="indigo white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
            </v-btn>
            </div>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer> 


  </nav>
</template>


<script>
export default {
    data() {
        return{
        drawer: false,
        links: [
          {icon:'mdi-calendar',text: 'Agenda',route:'/agenda'},
          {icon:'mdi-account-edit',text: 'Modifier',route:'/modifier'},
          {icon:'mdi-funcion',text: 'Function1',route:'/function1'},
        ]
       }
    }
}
</script>