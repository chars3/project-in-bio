import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="ProjectInBio Logo" />
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
};

export default Header;
