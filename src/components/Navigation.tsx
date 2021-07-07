type NavProps = {
  link: string;
};

function Navigation({ link }: NavProps) {
  return <div>{link}</div>;
}

export default Navigation;
