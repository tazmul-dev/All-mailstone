import Link from "next/link";


const Card = ({user}) => {
    
    return (
           <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/user/${user.id}`} className="btn">User Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;