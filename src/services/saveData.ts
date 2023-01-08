import axios from "axios"

interface objectSaved {
    name: string
    source: string
    owner: string | null
}


const saveData = async (data:objectSaved):Promise<boolean>=>{
    const {name,source, owner} = data;
    try {
        const response = await axios.post("http://localhost:4000/api/V0/saveCat",data)
        console.log(response)
        if(response.status == 200){
            return true
        }
    } catch (error) {
        return false
    }
    return false
}

export default saveData;