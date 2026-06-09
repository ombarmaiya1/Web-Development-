import LoginCard from "../components/LoginCard";

function Login() {
  return (
    <>
      <div
        className="
        // min-h-[calc(100vh-68px)]
        bg-[url('https://cravings.ricr.in/foodTable.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-start
        px-4
        md:px-20
      "
      >
        <LoginCard />
      </div>
    </>
  );
}

export default Login;
