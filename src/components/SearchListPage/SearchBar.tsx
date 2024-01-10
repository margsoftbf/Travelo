const SearchBar = () => {
    // Funkcja do obsługi zdarzenia wyszukiwania
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Logika do obsługi wyszukiwania
    };
  
    return (
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input type="text" placeholder="Search" className="flex-1 p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
      </form>
    );
  };
  
  export default SearchBar;