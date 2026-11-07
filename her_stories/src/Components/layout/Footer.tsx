export default function Footer() {
  return (
    <div className="grid grid-cols-3 justify-items-start  border border-black w-full p-4 bg-blackish-500 text-white">
      <div className=" col-span-2 flex flex-col gap-4 border border-black w-full">
        <strong>Title of Page</strong>
        <p>Slogan goes here</p>
      </div>
      <div className="justify-self-end self-center  flex flex-col gap-4 border border-black w-full">
        <p>Date of Creation</p>
        <p> All rights reserved</p>
      </div>
    </div>
  );
}
