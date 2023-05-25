import Link from "next/link";

const MainItems = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mr-4" />{" "}
        <p className="hidden sm:inline my-2 text-sm mx-4">{title}</p>
      </Link>
    </div>
  );
};

export default MainItems;
