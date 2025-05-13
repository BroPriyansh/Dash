const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search by name or email"
    className="p-2 border rounded w-full md:w-1/2"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
)

export default SearchBar
