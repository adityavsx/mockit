import { User } from "@nextui-org/react";

export default function UserAvatar() {
    return (
        <User
            name=""
            className="cursor-pointer"
            avatarProps={{
                src: "https://pbs.twimg.com/profile_images/1805325506943803392/g7UXsQit_400x400.jpg"
            }}
            onClick={() => {
                console.log('user-clicked');
            }}
        />
    );
}