type User = {
    id: number,
    name: string,
    email: string,
    website: string,
    address: {
        city: string,
        street: string,
        suite: string,
        zipcode: string,
    }
    company: {
        name: string,
    }
}

export function getUsers() {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        .then(res => res.json())
        .then(data => data as User[])
}