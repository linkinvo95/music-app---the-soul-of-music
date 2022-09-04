
function Search() {
  return (
<div className='bg-[#0b1828] fixed pt-4 ml-[224px] w-full h-[103px]'>
    <div
      className="
      search_com      
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
                      animate-pulse 
                      "
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
             <img src='img/search.svg' className='w-8 animate-pulse'/>
             {/* <span className='font-medium text-sm'>Filters</span> */}
             </div>
             </div>
             
    </div>
    <div className='ml-[1350px] mt-2'>
            <button className='btn_auth text-white mr-5 mb-1 rounded-full h-[40px] min-w-[120px] '>Register</button>
            <button className='btn_auth text-white rounded-full h-[40px] min-w-[120px]'>Sign In</button>
        </div>
    </div>
  );
}

export default Search;