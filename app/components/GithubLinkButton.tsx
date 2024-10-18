import Link from "next/link";
import Image from "next/image";

interface GithubLinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const GithubLinkButton: React.FC<GithubLinkButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full sm:w-auto my-6"
    >
      <button className="group relative flex items-center justify-start overflow-hidden rounded-md border border-gray-800 bg-white px-10 font-medium text-black transition hover:shadow-lg hover:-translate-y-1">
        <div className="relative z-10 flex items-center">
          <Image
            src="/github-mark.svg"
            alt="GitHub Mark"
            width={32}
            height={32}
          />
          <span className="ml-2 text-lg">{children}</span>
        </div>
        <div className="absolute inset-0 flex h-full w-full justify-start transform -skew-x-12 -translate-x-full">
          <div className="relative h-full w-8 bg-black/20"></div>
        </div>
      </button>
    </Link>
  );
};

export default GithubLinkButton;
