// Restraut searching 
export const FilterData = (searchValue, allRestro) => {
        let restrauts = allRestro;
        searchValue = searchValue.toLowerCase()
        return restrauts.filter((restraut) => restraut?.info?.name.toLowerCase().includes(searchValue))
    };