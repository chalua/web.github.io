let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'MS001',
        price: 7800000,
        quantity: 0,
        image: 'nick1.jpg',
        mayChu: '5 Sao',
        hanhTinh: 'Xayda',
    },
    {
        id: 2,
        name: 'MS002',
        price: 1800000,
        quantiy: 30,
        image: 'nick2.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 3,
        name: 'MS003',
        price: 150000,
        quantiy: 30,
        image: 'nick3.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 4,
        name: 'MS004',
        price: 900000,
        quantiy: 30,
        image: 'nick4.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 5,
        name: 'MS005',
        price: 150000,
        quantiy: 30,
        image: 'nick5.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 6,
        name: 'MS006',
        price: 160000,
        quantiy: 30,
        image: 'nick6.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 7,
        name: 'MS007',
        price: 160000,
        quantiy: 30,
        image: 'nick7.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 8,
        name: 'MS008',
        price: 10000000,
        quantiy: 30,
        image: 'nick8.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 9,
        name: 'MS009',
        price: 170000,
        quantiy: 30,
        image: 'nick9.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 10,
        name: 'MS0010',
        price: 170000,
        quantiy: 30,
        image: 'nick10.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Xayda',
    },
    {
        id: 11,
        name: 'MS0011',
        price: 170000,
        quantiy: 30,
        image: 'nick11.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 12,
        name: 'MS0012',
        price: 200000,
        quantiy: 30,
        image: 'nick12.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 13,
        name: 'MS0013',
        price: 250000,
        quantiy: 30,
        image: 'nick13.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 14,
        name: 'MS0014',
        price: 490000,
        quantiy: 30,
        image: 'nick14.jpg',
        mayChu: '1 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 15,
        name: 'MS0015',
        price: 300000,
        quantiy: 30,
        image: 'nick15.jpg',
        mayChu: '8 Sao',
        hanhTinh: 'Xayda',
    },
    {
        id: 16,
        name: 'MS0016',
        price: 200000,
        quantiy: 30,
        image: 'nick16.jpg',
        mayChu: '8 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 17,
        name: 'MS0017',
        price: 250000,
        quantiy: 30,
        image: 'nick17.jpg',
        mayChu: '5 Sao',
        hanhTinh: 'Xayda',
    },
    {
        id: 18,
        name: 'MS0018',
        price: 580000,
        quantiy: 30,
        image: 'nick18.jpg',
        mayChu: '8 Sao',
        hanhTinh: 'Trái đất',
    },
    {
        id: 19,
        name: 'MS0019',
        price: 170000,
        quantiy: 30,
        image: 'nick19.jpg',
        mayChu: '4 Sao',
        hanhTinh: 'Xayda',
    },
    {
        id: 20,
        name: 'MS0020',
        price: 240000,
        quantiy: 30,
        image: 'nick20.jpg',
        mayChu: '4 Sao',
        hanhTinh: 'Xayda',
    },

];
// Ham show
let productFilter = listProducts;
showProduct(productFilter);
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            //create Máy chủ
            let newMayChu = document.createElement('div');
            newMayChu.classList.add('mayChu');
            newMayChu.innerText ='Máy chủ ' + item.mayChu;
            newItem.appendChild(newMayChu);
            //Create hành tinh
            let newHanhTinh = document.createElement('div');
             newHanhTinh.classList.add('mayChu');
             newHanhTinh.innerText ='Hành Tinh ' + item.hanhTinh;
            newItem.appendChild( newHanhTinh);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' VND';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }
// Lọc danh sách
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check hành tinh
        if(valueFilter.hanhTinh.value != ''){
            if(item.hanhTinh != valueFilter.hanhTinh.value){
                return false;
            }
        }
        // check máy chủ
        if(valueFilter.mayChu.value != ''){
            if(item.mayChu != valueFilter.mayChu.value){
                return false;
            }
        }
        // check mã số
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check price
        if(valueFilter.price.value != ''){
            if(valueFilter.price.value.includes('200k')){
                if (item.price > 200000)
                return false;
            }
            if(valueFilter.price.value.includes('400k')){
                if (item.price < 200000 || item.price > 400000)
                return false;
            }
            if(valueFilter.price.value.includes('600k')){
                if (item.price < 400000 || item.price > 600000)
                return false;
            }
            if(valueFilter.price.value.includes('1tr')){
                if (item.price < 600000 || item.price > 1000000)
                return false;
            }
            if(valueFilter.price.value.includes('1tr5')){
                if (item.price < 1000000 || item.price > 1500000)
                return false;
            }
            if(valueFilter.price.value == ('2tr')){
                if (item.price < 1500000 || item.price > 2000000)
                return false;
            }
            if(valueFilter.price.value == ('hon2tr')){
                if (item.price < 2000000)
                return false;
            }
        }


        return true;
    })
    showProduct(productFilter);
})