<template>
  <b-row>
    <h2 class="text-center col-md-12">Proyectos activos</h2>
    <div v-for="item in list" class="col-md-3 col-xs-12">
        <b-card
          tag="article"
          class="my-3 col-xs-12 col-md-12"
          
        >
         <b-card-img-lazy :src="item.Imagen.src">
          </b-card-img-lazy>
          <b-card-title class="text-center">
            {{item.nombre}}
          </b-card-title>
          <b-card-text class="">
            <div class="col-md-12">
              <b>precio:</b>{{item.precio}}
            </div>
            <div class="col-md-12">
              <b>Baños:</b> {{item.banos}}
            </div>
            <div class="col-md-12">
              <b>Alcobas:</b> {{item.Alcobas}}
            </div>
            <br>
            <br>
            <div class="col-md-12">
              <b>Constructora:</b> {{item.constructora}}
            </div>
          </b-card-text>

          <b-button href="#" variant="primary">Ver</b-button>
          <b-button href="#" variant="secondary">Contactar</b-button>
        </b-card>
    </div>
  </b-row>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    async fetch({store}) {
      await store.dispatch('proyectos/get')
    },
    computed: {
      ...mapState({
        list: state => {
          return state.proyectos.list.nodes
        }
      })
    },
    data() {
      return {
        id: 0,
        fields: [
          {
            key: 'name',
            label: 'nombre',
            sortable: true,
          },
          {
            key: 'updated_at',
            sortable: true,
            label: 'Actualizado en'
          },
          {
            key: 'actions',
            label: 'Acciones'
          }
        ]
      }
    },
    methods: {
    },
    head () {
      return {
        title: 'Proyectos activos - vivendo.co',
        meta: [
          { hid: 'description', name: 'description', content: 'Proyectos de vivienda nueva' }
        ]
      }
    }
  }
</script>

<style scoped>
.card-img{
  height:200px;
}
</style>