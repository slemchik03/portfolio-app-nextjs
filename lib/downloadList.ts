import { supabase } from "./supabaseClient"

export default async function downloadList(from: string, list: string) {
    try {
        const { data } = await supabase
            .storage
            .from(from)
            .list(list)

        const result = Promise.all(data.map(async ({ name }) => {
            const item = await supabase
                .storage
                .from(from)
                .download(`${list}/${name}`)

            return URL.createObjectURL(item.data)
        }))

        return result
    } catch (error) {
        console.log(error);
        
        return []
    }
}