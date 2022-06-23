import styles from "./link-tree.module.scss";

export const LinkTree: React.FC<LinkTreeProps> = (props) => {
  return (
    <ul className={styles.ul}>
      {props.data?.map((datum) => (
        <li key={datum.id}>
          <a href={datum.url}>{datum.label}</a>
        </li>
      ))}
    </ul>
  );
};

interface LinkTreeProps {
  data: LinkTreeData[];
}

export interface LinkTreeData {
  id: number;
  label: string;
  url: string;
}

export default LinkTree;
