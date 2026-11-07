export default function Banner() {
  return (
    <div className="flex flex-col gap-4 border border-dusty-rose-400 w-2/3 p-4 bg-[url(https://wallpapers.com/wallpapers/pretty-aesthetic-computer-8fknn1duntcluo18.html)] bg-no-repeat">
      <div className="flex gap-4    ">
        <strong className="border border-black p-2 bg-deep-red-500 text-white">
          FEATURED
        </strong>
        <p className="border border-black p-2">Category</p>
      </div>

      <h4 className="text-4xl">Principal Article Title goes here</h4>
      <p className="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div className="flex gap-4">
        <p className="underline">Author</p>
        <p>Time to read: 6 minutes</p>
        <a href="#" className="underline">
          Link to read story{" "}
        </a>
      </div>
    </div>
  );
}
