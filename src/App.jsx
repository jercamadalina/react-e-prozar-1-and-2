import productList from "./productList";
import { useState } from "react";

const App = () => {
    const [randomOffer] = useState(productList[Math.floor(Math.random() * productList.length)]);

    const [totalBoughtProducts, setTotalBoughtProducts] = useState(0);

    const [filteredProducts, setFilteredProducts] = useState(productList);

    const [categoryFilter, setCategoryFilter] = useState("");

    const [nameFilter, setNameFilter] = useState("");

    const [priceFilter, setPriceFilter] = useState(0);

    const categories = [""]
    for (let i=0; i<productList.length; i++) {
        if (!categories.includes(productList[i].category)) {
            categories.push(productList[i].category)
        }
    }

    const reset = (e) => {
        e.preventDefault();
        setFilteredProducts(productList);
        setCategoryFilter("");
        setNameFilter("");
        setPriceFilter(0);
    };

    const handleNameFilter = (e) => {
        let filtered = []
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].name.toLowerCase().includes(e)
                && productList[i].category.toLowerCase().includes(categoryFilter)
                && parseInt(productList[i].price.substring(1)) > priceFilter) {
                filtered.push(productList[i])
            }
        }

        setFilteredProducts(filtered)
        setNameFilter(e)
    };

    const handleCategoryFilter = (e) => {
        let filtered = []
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].name.toLowerCase().includes(nameFilter)
                && productList[i].category.toLowerCase().includes(e)
                && parseInt(productList[i].price.substring(1)) > priceFilter) {
                filtered.push(productList[i])
            }
        }

        setFilteredProducts(filtered)
        setCategoryFilter(e)
    };

    const handlePriceFilter = (e) => {
        let filtered = []
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].name.toLowerCase().includes(nameFilter)
                && productList[i].category.toLowerCase().includes(categoryFilter)
                && parseInt(productList[i].price.substring(1)) > e) {
                filtered.push(productList[i])
            }
        }

        setFilteredProducts(filtered)
        setPriceFilter(e)
    };

    const toggleProductBoughtStatus = (product) => { {/* 2 */}
        if (product.isBought) {
            setTotalBoughtProducts(totalBoughtProducts - 1)
            product.isBought = false
        } else {
            setTotalBoughtProducts(totalBoughtProducts + 1)
            product.isBought = true
        }
        setFilteredProducts([...filteredProducts])
    }

    randomOffer.newPrice = Math.round(parseInt(randomOffer.price.substring(1)) / 2)
    const today = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
    const monthName = monthNames[today.getMonth()];
    const formattedDate = `${today.getDate()} ${monthName}`

    return (
        <>
            <section className="filter">
                <div className="container">

                    <input
                        type="text"
                        placeholder="Product name"
                        value={nameFilter}
                        onChange={e => handleNameFilter(e.target.value.toLocaleLowerCase())}
                    />

                    <select value={categoryFilter} onChange={e => handleCategoryFilter(e.target.value.toLocaleLowerCase())}>
                        {categories.length
                            ? categories.map((category) => (
                                  <option key={category} value={category}>
                                      {category}
                                  </option>
                              ))
                            : null}
                    </select>

                    <input
                        type="number"
                        min="0"
                        step="10"
                        placeholder="Price under..."
                        onChange={e => handlePriceFilter(e.target.value)}
                        value={priceFilter}
                    />

                    <button className="btn" onClick={reset}>
                        Reset all filters
                    </button>

                    <div>Total bought items: {totalBoughtProducts}</div>
                </div>
            </section>

            <section className="promotion">
                <h2>Don't miss today's hot deal!</h2>

                <div className="card">
                    <div className="card-image">
                        <img src={randomOffer.image} alt={randomOffer.name} />
                    </div>
                    <div className="card-body">
                        <h3>{randomOffer.name}</h3>
                        <p>{randomOffer.shortDescription}</p>
                        <p className="old-price">{randomOffer.price}</p>
                        <p>
                            <span>${randomOffer.newPrice}</span> only on{" "}
                            <span>{formattedDate}</span>
                        </p>
                    </div>
                </div>
            </section>

			<section className="products"> {/* 1 */}	
                {filteredProducts.map(product => (
                    <div className="card" key={product.id}>
                        <div className="card-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">{product.price}</p>
                            <button className="btn" onClick={() => toggleProductBoughtStatus(product)}>
                                {product.isBought ? "Remove from cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <footer>
                <p>We bring you <strong>only the best products</strong> that can be randomly generated!</p>
                <p>Content from <a href="https://marak.github.io/faker.js/">faker.js</a> with images from <a href="https://picsum.photos/">Lorem Picsum</a></p>
            </footer>
        </>
    );
};

export default App;

