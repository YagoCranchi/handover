export default function TitleBlock({ children }) {
  return (
    <span className="font-montserrat font-medium leading-[1.5] text-center tracking-[0.3px] text-[#515054] flex-shrink-0 align-stretch titleblock-gradient">
      {children}
    </span>
  );
}
