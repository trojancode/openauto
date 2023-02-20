export const CustomFetch = ({ url, body, method }: { url: string; body: any; method: string }) => {
    return fetch((process.env.NEXT_PUBLIC_BASE_URL || "") + url, {
        body, method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
}