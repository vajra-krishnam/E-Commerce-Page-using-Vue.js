var app=new Vue({
    el:'#app',
    data:{
        product:'Tees',
        image:'./plain-t-shirt-500x500.png',
        link:'https://www.amazon.com/s?k=t+shirts+for+men&ref=nb_sb_noss_2',
        inStock: true,
        details:["80% Cotton","20% polyester","Gender-Neutral"],
        variants:[
            {
                variantID:1,
                variantColor:"blue",
                variantImage:'./plain-t-shirt-500x500.png'
            },{
                VariantID:2,
                variantColor:"Red",
                variantImage:'./red-mens-t-shirt-500x500.jpg'
            }
        ],
        // sizes:["S","M","L","XL","XXL"]
        cartValue:0
    },
    methods:{
        addtoCart(){
            this.cartValue +=1;
        },
        updateColor(variantImage){
            this.image=variantImage
        }
    }


})