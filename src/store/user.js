export const userStore = defineStore('users', {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getAddAge() {
      return (num) => {
        return num ? (this.age + num) : this.age;
      }
    },
    getNameAndAge: (state) => {
      return state.name + state.getAddAge();
    }
  },
  actions: {
    saveUserName(name) {
      return this.name = name;
    }
  }
})