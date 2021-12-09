
export const actions = {
    //при первой загрузке берем данные ил localStorage, если они есть
    firstLoad(ctx){
        // localStorage.clear()
        const getProducts = localStorage.getItem('localProducts')
        const allProducts = JSON.parse(getProducts);
        if(allProducts && allProducts.length > 0){
            ctx.dispatch('sortProducts', allProducts)
        }
        ctx.commit('updateLoader')
    },

    //создание айди и добавление нового товара
    addProducts(ctx, newProduct){
        let id = 0
        if(ctx.getters.allProducts.length>0){
            id = Math.max(...ctx.getters.allProducts.map(elem => elem.id))+1
        }
        newProduct = {...newProduct, "id":id}
        const products = [...ctx.getters.allProducts, newProduct]
        ctx.dispatch('sortProducts', products)
    },
    //удаление товара
    deleteProducts(ctx, id){
        const products = ctx.getters.allProducts.filter(elem => elem.id != id)
        ctx.dispatch('sortProducts', products)
    },
    //изменение текущего параметра сортировки
    changeSort(ctx, sort){
        const products = [...ctx.getters.allProducts]
        ctx.commit('updateSort', sort)
        ctx.dispatch('sortProducts', products)
    },
    //сортировка по текущему параметру
    sortProducts(ctx, products){
        switch(ctx.getters.sorting) {
            case 0:
                products.sort((a, b) => (Number(a.price.split(" ").join("")) < Number(b.price.split(" ").join("")) ? -1 : 1));
                break
            case 1:
                products.sort((a, b) => (Number(a.price.split(" ").join("")) < Number(b.price.split(" ").join("")) ? 1 : -1));
                break
            case 2:
                products.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
                break
        }
        localStorage.setItem('localProducts', JSON.stringify(products));
        ctx.commit('updateProducts', products)
    }
}

export const mutations = {
    updateProducts(state, products){
        state.products = products
    },
    updateSort(state, sort){
        state.sort = sort
    },
    updateLoader(state){
        state.showLoader = false
    },
}

export let state = () => ({
    sort:'',
    showLoader: true,
    products:[
        {
            id: 0,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 001'
        },
        {
            id: 1,
            title:'Наименование товара 3',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 002'
        },
        {
            id: 2,
            title:'Наименование товара',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 003'
        },
        {
            id: 3,
            title:'Наименование товара 2',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 004'
        },
        {
            id: 4,
            title:'Наименование товара 1',
            description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png',
            price: '10 005'
        },
    ]
})

export const getters = {
    allProducts(state){
        return state.products
    },
    sorting(state){
        return state.sort
    },
    getLoaderStatus(state){
        return state.showLoader
    }
}
