const state = {
	data: {},
	itemOnPage: [],
	itemInBasket: [],
}

const getters = {
	getData: state => state.data,
	getItemOnPage: state => state.itemOnPage,
	getItemInBasket: state => state.itemInBasket,
}

const actions = {
	requestData({ commit }, page) {
		if (!page) {
			return
		}

		fetch(`/itemslist/${page}`, {
			method: 'GET'
		})
			.then(res => {
				return res.json()
			})
			.then(data => {
				commit('setData', data)
			})
	},
	addInBasket({ state, commit }, id) {
		commit('addInBasket', id)
	}
}

const mutations = {
	setData(state, newData) {
		state.data = { ...state.data, ...newData }
		state.itemOnPage.push(...Object.keys(newData))
	},
	addInBasket(state, id) {
		state.itemInBasket.push(id)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}