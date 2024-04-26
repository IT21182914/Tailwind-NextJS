import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent">
  
        <div className="">
       Header
        </div>
        <div className="flex">
          <div className="grow">Main Content</div>
          <div className="flex flex-col">
            <div>Side Bar</div>
            <div>Menu</div>
          </div>
        </div>

    </div>


  );
}
