import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      <div>font awesome</div>
      <FontAwesomeIcon icon={faIceCream} />
    </main>
  );
}
