import Card from '@/card/Card';


const userPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log(users)
    return (
        <div>
           <div className='grid grid-cols-3 gap-4 container mx-auto'>
             {
                users.map(user => <Card user={user} key={user.id}></Card>

                )
            }
           </div>
        </div>
    );
};

export default userPage;