import axios from "axios";

export interface orphanCatsQuery {
    name: string
    source: string
}

const findOrphanCats = async ():Promise<Array<orphanCatsQuery>>=>{
    try {
        const response = await axios.get("http://localhost:4000/api/V0/all-cats/orphans") 
        console.log({response})
        if(response.status == 200){
            return response.data.data as Array<orphanCatsQuery>   
        }
    } catch (error) {
        return ([{
            name:"an error",
            source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
        },
        {
            name:"an error",
            source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
        },
        {
            name:"an error",
            source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
        },
        {
            name:"an error",
            source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
        }])
    }
    return ([{
        name:"an error",
        source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
    },
    {
        name:"an error",
        source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
    },
    {
        name:"an error",
        source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
    },
    {
        name:"an error",
        source:"https://media.tenor.com/thrNXFAGzk4AAAAM/capoo-bugcat.gif"
    }])
}

export default findOrphanCats;