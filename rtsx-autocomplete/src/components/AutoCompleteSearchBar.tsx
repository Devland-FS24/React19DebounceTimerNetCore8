import axios from 'axios'
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import ProductLists from './ProductLists'
import { useDebounce } from './customdebouncehook'
type Product = {
    id: number,
    title: string,
    image: string
}

export default function AutoCompleteSearchBar() {
    const [query, setQuery] = useState("")
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProductIndex,setselectedProductIndex] = useState<number>(-1)
    const inputRef = useRef<HTMLInputElement>(null)
    const debouncedSearch = useDebounce(query);
    const [searchResults, setSearchResults] = useState<Product[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            //console.log(data)
            setProducts(data)
        }
        fetchData()
    }, [debouncedSearch]);

    function handleQueryChange(event:
        ChangeEvent<HTMLInputElement>) {
        //console.log(event.target.value)
        setQuery(event.target.value)
        setSearchResults(products.filter(product => 
            product.title.toLowerCase().includes(event.
            target.value.toLowerCase())
            )
        );
        console.log('MY SEARCH RESULTS:' + searchResults)
    }

    function handleKeyDown(event: 
        KeyboardEvent<HTMLInputElement>){
        //console.log(event.key)

        if(event.key === "ArrowUp"){
            setselectedProductIndex(prevIndex => (
                prevIndex === -1 ? searchResults.length - 1: prevIndex-1
            ))           
        }else if(event.key === "ArrowDown"){
            setselectedProductIndex(prevIndex => (
                prevIndex === searchResults.length - 1 ? 
                -1: prevIndex + 1
            ))
        }else if(event.key === "Enter"){
            if(selectedProductIndex !== -1){
                const selectedProduct = searchResults[selectedProductIndex]
                alert(`You selected ${selectedProduct.title}`)
                setQuery("")
                setselectedProductIndex(-1)
                setSearchResults([])
            }
        }
        //console.log(selectedProductIndex)
    }

    function handleProductClick(product: Product){
        alert(`You selected ${product.title}`)
        setQuery("")
        setSearchResults([])
    }

    return (
        <div className="flex flex-col max-w-lg mx-auto mt-20">
            <input type="text" className="px-4 py-1 border-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500" 
            onChange={handleQueryChange} 
            onKeyDown={handleKeyDown} 
            value={query}
            ref={inputRef}
            placeholder="Search products"
            >
            </input>
            { debouncedSearch!== "" && searchResults.length > 0 && (
                <ProductLists products={searchResults}
                selectedProductIndex={selectedProductIndex}
                handleProductClick={handleProductClick}
                ></ProductLists>
            )}
        </div>
    )
}
