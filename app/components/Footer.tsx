import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Link href="/privacy-policy" className="text-white">
        プライバシーポリシー
      </Link>
    </div>
  );
};

export default Footer;
