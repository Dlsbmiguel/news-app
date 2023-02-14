import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-blue-700 font-bold underline-offset-4 text-lg"
      }`}
    >
      {category}
    </Link>
  );
};
