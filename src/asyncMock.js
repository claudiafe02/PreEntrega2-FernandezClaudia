const products =[
    {
        title: "Web Development with Julia and Genie",
        id: "9781801811132",
        category:"Desarrollo",
        subtitle: "A hands-on guide to high-performance server-side web development with the Julia programming language",      
        price: "$39.99",
        image: "https://itbook.store/img/books/9781801811132.png"
    },
    {
        title: "C++ Software Design",
        id: "9781098113162",
        category:"Diseño",
        subtitle: "Design Principles and Patterns for High-Quality Software",
        price: "$47.03",
        image: "https://itbook.store/img/books/9781098113162.png"
    },  
    {
        title: "Test-Driven Development with C++",
        id: "9781803242002",
        category:"Desarrollo",
        subtitle:"A simple guide to writing bug-free Agil code",
        price: "$44.99",
        image: "https://itbook.store/img/books/9781803242002.png"
    },
    {
        title: "Python for Data Analysis, 3rd Edition",
        id: "9781098104030",
        category:"Datos",
        subtitle: "Data Wrangling with pandas, NumPy, and Jupyter",price: "$36.18",
        image: "https://itbook.store/img/books/9781098104030.png",
    },
    {
        title: "Data Visualization with Python and JavaScript, 2nd Edition",
        id: "9781098111878",
        category:"Datos",
        subtitle: "Scrape, Clean, Explore, and Transform Your Data",
        price: "$60.99",
        image: "https://itbook.store/img/books/9781098111878.png",
    },
    {
        title: "Software Test Design",
        id: "9781804612569",
        category:"Diseño",
        subtitle: "Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
        price: "$44.99",
        image: "https://itbook.store/img/books/9781804612569.png",
    },
    {
        title: "Python Data Science Handbook, 2nd Edition",
        id: "9781098121228",
        category:"Datos",
        subtitle: "Essential Tools for Working with Data",
        price: "$56.16",
        image: "https://itbook.store/img/books/9781098121228.png",
    }
]

export const getProducts = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(products);
    }, 2000); 
});

export const getProduct = (id) =>{
    return products.find((dato) => 
        dato.id==id );     
}

   



