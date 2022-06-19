interface AnchorProps {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Anchor: React.FC<AnchorProps> = (props) => {
  return (
    <a href={props.href} onClick={(event) => props.onClick(event)}>
      {props.children}
    </a>
  );
};

export default Anchor;
