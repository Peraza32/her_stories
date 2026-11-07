export default function NavBar() {
  return (
    <div className="flex justify-center sticky top-0 w-full border border-dusty-rose-500 bg-vista-white-400">
      <div className="grow-3 border border-dusty-rose-400 px-6 py-6">
        <p className="mx-30">Title | Slogan</p>
      </div>
      <div className=" flex justify-center gap-10 px-6 py-4 grow-1 border border-dusty-rose-400">
        <button className="p-2 border border-black">Opcion 1</button>
        <button className="p-2 border border-black">Opcion 2</button>
        <button className="p-2 border border-black">Opcion 3</button>
        <button className="p-2 border border-black">Opcion 4</button>
      </div>
    </div>
  );
}
