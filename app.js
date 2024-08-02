const {createApp}=Vue
    var one =createApp({
    data(){
        return{
            name:"can",
            a:3,
            b:3,
            website:"http://youtube.com",
            age:25,
            karakterler:["Adnan","Bihter","matmazel"],
            ozellikler:[
                {name:"Adnan", age:25},
                {name:"Bihter", age:26},
                {name:"Matmazel", age:38}
        

            ],
            title:"1. ınstance başlığı"

        }
    },
    methods:{
        hesapla: function(){
            return this.a+this.b;
        },

        isim: function(name){
            return  "ismi: "+this.name
        },
        ekle: function(){
            this.age++;
        },
        cikar: function(){
            this.age--;

        }

    },
    computed:{
        aYaEkle: function(){
            console.log("a kontrol edildi")
            return this.a+this.age;
        },
        bYeEkle: function(){
            console.log("b kontrol edildi")
            return this.b+this.age;
        },
        greet :function(){
            return "App 1'in başlığı";
        }


    }
}).mount("#app-one") ;

const two = Vue.createApp({
    data() {
        return {
            title: "2. title başlığı"
        };
    },
    methods: {
        changetitle() {
            this.title = "1. instance başlığı değişti";
        }
    },
    computed: {
        greet() {
            return "App 2'nin başlığı";
        }
    }
}).mount("#app-two");
