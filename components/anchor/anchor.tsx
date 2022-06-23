interface AnchorProps {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Anchor: React.FC<AnchorProps> = (props) => {
  if (!props.onClick) return <a href={props.href}>{props.children}</a>;

  if (props.onClick)
    return (
      <a href={props.href} onClick={(event) => props.onClick?.(event)}>
        {props.children}
      </a>
    );

  return null;
};

export default Anchor;
