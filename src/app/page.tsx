import { Header } from '~/components/home-layout/header';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen ">
      <Header />
      <h1 className="font-bold text-3xl">Welcome to Parver</h1>
      <p className="w-80 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
        tempore at blanditiis ad mollitia cupiditate labore eligendi nobis
        quisquam?
      </p>
    </main>
  );
}
