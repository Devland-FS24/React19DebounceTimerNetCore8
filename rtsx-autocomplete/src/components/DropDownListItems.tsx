import { useEffect } from 'react'

type DropDownListItem = {
    id: number
    itemType: string
}
type DropDownListItemProps = {
    selectedDropDownListItemIndex: number
    dropdownlistitems: DropDownListItem[];
    handleDropDownListItemClick: (dropdownlistitem: DropDownListItem) => void
}

export default function DropDownListItemLists({dropdownlistitems, 
    selectedDropDownListItemIndex,handleDropDownListItemClick }:DropDownListItemProps) {  
        function scrollActiveDropDownListItemIntoView(index: number)
        {
            const activeDropDownListItem = document.getElementById(`dropdownlistitem-${index}`)
            if(activeDropDownListItem){
                activeDropDownListItem.scrollIntoView({
                    block: "nearest",
                    inline: "start",
                    behavior: "smooth",    
                });
            }
        }
        useEffect(() => {   
            if(selectedDropDownListItemIndex !== -1){
                scrollActiveDropDownListItemIntoView(selectedDropDownListItemIndex)
            }      
        },[selectedDropDownListItemIndex])

  return (
    <div className="bg-white max-h-96 overflow-y-scroll resultDropDownListItemContainer">        
        {dropdownlistitems.map((dropdownlistitem,index) => (
            <div            
                 key={dropdownlistitem.id} 
                 id={`dropdownlistitem-${index}`}
                 className={`${selectedDropDownListItemIndex === 
                    index ? "bg-gray-200" : ""} py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer`}
                 onClick={() => handleDropDownListItemClick(dropdownlistitem)}
            >
                <p>{dropdownlistitem.itemType}</p>             
            </div>
        ))}
    </div>
  )
}
