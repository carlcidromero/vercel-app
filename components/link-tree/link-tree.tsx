const LinkTree: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <a>email</a>
        </li>
        <li>
          <a
            href="https://github.com/carlcidromero"
            rel="noreferrer"
            target="_blank"
          >
            github
          </a>
        </li>
        <li>linkedin</li>
      </ul>
    </>
  );
};

interface LinkTreeProps {
  data: {
    children: React.ReactNode | React.ReactNode[];
    url: string;
  };
}

export default LinkTree;
