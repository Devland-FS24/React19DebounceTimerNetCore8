import axios from 'axios'
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import DropDownListItems from './DropDownListItems'
import { useDebounce } from './customdebouncehook'
type DropDownListItem = {
    id: number
    itemType: string
}

export default function AutoCompleteEndPoint() {
    
    const [query, setQuery] = useState("")
    const [dropdownlistitems, setDropdownListItems] = useState<DropDownListItem[]>([])  
    const [selectedDropDownListItemIndex,setSelectedDropDownListItemIndex] = useState<number>(-1)
    const inputRef = useRef<HTMLInputElement>(null)
    const debouncedSearch = useDebounce(query);
    const [searchResults, setSearchResults] = useState<DropDownListItem[]>([])

    useEffect(() => {
        const fetchData = async () => {        
   
              
            if ( query ) {                           
                const { data } = await axios.get("https://localhost:7271/api/DropDownListItemsMaster/GetDropDownListItems?param=" + query)
                setDropdownListItems(data)
              
            } 
        }
        fetchData()
    }, [debouncedSearch]);

    function handleQueryChange(event:
        ChangeEvent<HTMLInputElement>) {       
            setQuery(event.target.value)
            setSearchResults(dropdownlistitems.filter(dropdownlistitem => 
                dropdownlistitem.itemType.toLowerCase().includes(event.
                target.value.toLowerCase())
                )
        );      
    }

    function handleKeyDown(event: 
        KeyboardEvent<HTMLInputElement>){   
        if(event.key === "ArrowUp"){
            setSelectedDropDownListItemIndex(prevIndex => (
                prevIndex === -1 ? searchResults.length - 1: prevIndex-1
            ))           
        }else if(event.key === "ArrowDown"){
            setSelectedDropDownListItemIndex(prevIndex => (
                prevIndex === searchResults.length - 1 ? 
                -1: prevIndex + 1
            ))
        }else if(event.key === "Enter"){
            if(selectedDropDownListItemIndex !== -1){
                const selectedDropDownListItem = searchResults[selectedDropDownListItemIndex]
                alert(`You selected ${selectedDropDownListItem.itemType}`)
                setQuery("")
                setSelectedDropDownListItemIndex(-1)
                setSearchResults([])
            }
        }      
    }

    function handleDropDownListItemClick(dropdownlistitem: DropDownListItem){
        alert(`You selected ${dropdownlistitem.itemType}`)
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
            placeholder="Search Items"
            >
            </input>
            { debouncedSearch!== "" && searchResults.length > 0 && (
                <DropDownListItems dropdownlistitems={searchResults}
                    selectedDropDownListItemIndex={selectedDropDownListItemIndex}
                    handleDropDownListItemClick={handleDropDownListItemClick}
                ></DropDownListItems>
            )}
        </div>
    )
}
