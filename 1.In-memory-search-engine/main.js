function InMemorySearchEngine(){
    this.entities = new Map();

    this.addDocument = function(namespace, ...documents){
        const existing = this.entities.get(namespace);

        if(existing){
            this.entities.set(namespace,[...existing, ...documents])
        }else{
            this.entities.set(namespace,[...documents])
        }
    }

    this.search = function(namespace, filterFuc, orderBy){
        const documents = this.entities.get(namespace);

        const filtered = documents.filter(filterFuc);

        if(orderBy){
            const {key, asc} = orderBy;

            return filtered.sort((a,b)=>{
                if(asc){
                    return a[key] - b[key];
                }else{
                    return b[key] - a[key];
                }
            });
        }

        return filtered;
    }
}


const searchEngine = new InMemorySearchEngine();

searchEngine.addDocument(
    'Movies',
    {name: 'Avengers', rating: 8.5, year: 2017},
    {name: 'KFG-2', rating: 8.5, year: 2022},
    {name: 'Appu', rating: 9.5, year: 2002},
    {name: 'Gandhada Gudi', rating: 8.9, year: 2022},
    {name: 'Bettada Hoovu', rating: 8.6, year: 1985}
)

const result = searchEngine.search('Movies', (e)=>e.rating > 8.5, {
    key: "year",
    asc: true
})

console.log(result)