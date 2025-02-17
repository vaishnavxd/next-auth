export default function UserProfile({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Profile</h1>
            <p>Profile Page</p>
            <p>User ID: {params.id}</p>
        </div>
    )
}

