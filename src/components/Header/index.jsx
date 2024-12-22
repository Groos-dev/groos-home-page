function Header() {
  return (
      <div className="p-6 max-w-sm mx-auto bg-red-50 rounded-xl shadow-lg items-center flex gap-x-4 mt-6 ">
        <div className="shrink-0">
          <img className="size-12" src="/src/assets/chat.svg" alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
        </div>
  );
}
export default Header;
