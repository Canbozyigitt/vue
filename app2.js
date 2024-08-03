const { createApp } = Vue;

const one = createApp({
    data() {
        return {};
    }
});

one.component("eleman", {
    template: '<p>Ben eleman tagının içerisiyim. Benim adım {{ name }}</p><button v-on:click="changeName">isim değiştir</button>',
    data() {
        return {
            name: "adnan ziyagil"
        };
    },
    methods: {
        changeName() {
            this.name = "Bihter ziyagil";
        }
    }
});

one.mount("#app-one");

const two = createApp({
    data() {
        return {};
    }
});

two.component("eleman", {
    template: '<p>Ben eleman tagının içerisiyim. Benim adım {{ name }}</p><button v-on:click="changeName">isim değiştir</button>',
    data() {
        return {
            name: "Adnan ziyagil"
        };
    },
    methods: {
        changeName() {
            this.name = "bihter ziyagil";
        }
    }
});

two.mount("#app-two");
