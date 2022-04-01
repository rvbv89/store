console.log(Object.values(results).includes("electronics"));

_.filter(source, isMatch && { category: `${filterValue}` }).map((i) => i);

const isCat = (result) => {
  if (result.category === `${filterValue}`) {
    isMatch;
  }
};

useEffect(() => {
  (func) => {
    if (filterValue === "") {
      setResultsFilter(_.filter(source, func));
    } else {
      setResultsFilter(_.filter(source, { category: `${filterValue}` }, func));
    }
  };
}, [filterValue]);

const isMatch = (result) => {
  const re = new RegExp(_.escapeRegExp(data.value), "i");
  if (filterValue === "") {
    re.test(result.title);
  } else {
    const result = result.filter(
      (result) => result.category === `${filterValue}`
    );
    console.log(result);
  }
};


// const source = searchContext.searchState.source
//     source.filter(item=> {
//       const regex = new RegExp(`${action.payload}`, 'ig');
//       return(
//         item.category.match(regex))

const results = ()=>{
  if(filteredSource = []){
    return _.filter(searchContext.searchState.source, isMatch)
  } else {
return _.filter(searchContext.searchState.filteredSource, isMatch)
  }
}


const source = searchContext.searchState.source;
const regex = new RegExp(data.value, "i");
console.log(regex);
const filteredSource = source.filter((filteredSource) =>
  filteredSource.category.match(regex)
);