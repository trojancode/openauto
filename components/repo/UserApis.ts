import { CustomFetch } from "./api"

export const AddUserAPI = ({ name, email }: { name: string, email: string }) => {
    return CustomFetch(<any>{
        url: "waitinglist",
        method: "POST",
        body: { name, email }
    })
}