import Link from 'next/link';

export default function NavListItem({ data }) {
  const { href, name } = data;
  return href ? (
    <li>
      <Link href={href}>
        <a>{name}</a>
      </Link>

      <style jsx>{`
        li > a {
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          min-height: 80px;
          padding: 0 15px;
          font-size: 14px;
          text-decoration: none;
        }
      `}</style>
    </li>
  ) : null;
}
