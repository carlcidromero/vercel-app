import LinkTree, { LinkTreeData } from "../../components/link-tree/link-tree";

export const ContactInfo: React.FC = () => {
  return <LinkTree data={contactInfo} />;
};

const contactInfo: LinkTreeData[] = [
  {
    id: 1,
    label: "email",
    url: "mailto:carlcidromero@gmail.com",
  },
  {
    id: 2,
    label: "github",
    url: "https://github.com/carlcidromero/vercel-app",
  },
  {
    id: 3,
    label: "linkedin",
    url: "https://linkedin.com/in/carlcidromero",
  },
];

export default ContactInfo;
