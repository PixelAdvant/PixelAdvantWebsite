import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbProps) => {
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol
        className="breadcrumb"
        style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: '0 0 10px 0',
          fontSize: '14px',
          flexWrap: 'wrap',
        }}
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item${isLast ? ' active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {!isLast ? (
                <>
                  <Link to={item.url} style={{ color: '#0d6efd', textDecoration: 'none' }}>
                    {item.name}
                  </Link>
                  <span style={{ margin: '0 8px', color: '#6c757d' }}>/</span>
                </>
              ) : (
                <span style={{ color: '#6c757d' }}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
