import Image from "next/image";

const Logo = () => {
  return (
    <Image
      width={100}
      height={100}
      alt="logo"
      src={"/logo.svg"}
      className="mx-auto"
    />
  );
};

export default Logo;
