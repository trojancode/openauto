import User from "../model/User"

export const AddUser = async ({ name, email }: { name: string, email: string }) => {
    let existingUser = await User.findOne({ email })
    if (existingUser) {
        throw "Already Registered"
    }
    await new User({ name, email }).save()
    return "User Successfully registered"
}

