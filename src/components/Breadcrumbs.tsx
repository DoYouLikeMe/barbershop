import Link from "next/link";

type BreadcrumbsLink =
  | { name: string; linkPath: string }
  | { name: string; linkPath?: undefined };

type BreadcrumbsProps = {
  path: BreadcrumbsLink[];
};

export default function Breadcrumbs({ path }: BreadcrumbsProps) {
  return (
    <ul className="breadcrumbs-list">
      {path.map((link, index, array) => {
        const isLastItem = index === array.length - 1;
        const hasLinkPath = link.linkPath;

        if (hasLinkPath && !isLastItem) {
          return (
            <li className="breadcrumbs-list__item" key={link.name}>
              <Link className="breadcrumbs-list__link" href={link.linkPath}>
                {link.name}
              </Link>
            </li>
          );
        }

        return (
          <li className="breadcrumbs-list__item" key={link.name}>
            {link.name}
          </li>
        );
      })}
    </ul>
  );
}
