import { User } from "@/state/api";
import Image from "next/image";

type Props = {
  user: User;
};
const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`/p1.jpeg`}
          alt="Profile Picture"
          width={50}
          height={50}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
export default UserCard;
