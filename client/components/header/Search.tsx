import {MdOutlineShortText} from 'react-icons/md'

function Search() {
  return (
    <div
      className="
      search_com
      fixed
    bg-[#1a1a1a]
    rounded-full
    overflow-hidden
    p-1.5 px-5 pr-8 flex items-center
    "
    >
      <div
        className="h-4 w-4 
                      rounded-full
                      border-2
                      flex-shrink-0
                      animate-pulse "
      />
      <input type='text' 
             className='bg-[#172533] text-[#868d94]
              border-none lg:w-full focus:ring-0 
              outline-none
             placeholder-[#868d94] ml-2 text-ls'
             placeholder="Search..."
             />
             <div className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto hover:divide-white">

             <div className='flex items-center space-x-1.5 text-[#cecece] pl-4'>
             <MdOutlineShortText className='text-2x1 animate-pulse'/>
             <span className='font-medium text-sm'>Filters</span>
             </div>

             </div>
    </div>
  );
}

export default Search;