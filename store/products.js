


export const actions = {
    //создание айди и добавление нового товара
    addProducts(ctx, newProduct){
        let id = 0
        if(ctx.getters.allProducts.length>0){
            id = Math.max(...ctx.getters.allProducts.map(elem => elem.id))+1
        }
        newProduct = {...newProduct, "id":id}
        let products = [...ctx.getters.allProducts, newProduct]
        // console.log(products)
        ctx.commit('updateProducts', products)
    }
}

export const mutations = {
    updateProducts(state, products){
        console.log(products)
        state.products = products
        console.log(state.products)
    },
}

export let state = () => ({
    products:[
        {
            id: 0,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 000'
        },
        {
            id: 1,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 000'
        },
        {
            id: 2,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 000'
        },
        {
            id: 3,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 000'
        },
        {
            id: 4,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 000'
        },
    ]
})

export const getters = {
    allProducts(state){
        return state.products
    },
}
