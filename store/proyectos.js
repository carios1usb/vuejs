import merge from "lodash.merge";
import assign from 'lodash.assign';

export const state = () => ({
  list: [],
  proyecto: {},
});

export const mutations = {
  set(state, proyecto) {
    state.list = proyecto
  },
  add(state, value) {
    merge(state.list, value)
  },
  remove(state, {proyecto}) {
    state.list.filter(c => proyecto.id !== c.id)
  },
  mergeProyectos(state, form) {
    assign(state.proyecto, form)
  },
  setProyectos(state, form) {
    state.proyecto = form
  }
};

export const actions = {
  async get({commit}) {
    await this.$axios.get(`/json_proyectos_activos`)
      .then((res) => {
          // console.log(res);
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  }
};