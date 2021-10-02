import { CopyBlock, dracula } from "react-code-blocks";
import CodeName from "../../components/CodeName/CodeName";
import Header from "../../components/Header/Header";
import UserCard from "../../components/UserCard/UserCard";
import { html } from "./info";

const Masterbrian99Button = () => {
  return (
    <div>
      <div className="max-h-full min-h-screen main-backdrop">
        <div className="container mx-auto">
          <Header />
          <div className="flex flex-col w-full ">
            <UserCard
              cardName={"Yellow Button"}
              githubUserName={"Masterbrian99"}
              twitterUserName={"Masterbrian99"}
              username={"Masterbrian"}
            />
            <div className="flex flex-col items-center justify-center flex-1 my-2 text-black bg-white rounded-lg min-h-30">
              <div>
                <button className="px-4 py-1 bg-yellow-300 rounded-lg shadow-xl hover:text-white">
                  Click me
                </button>
              </div>
            </div>
            <CodeName name={"JSX"} />
            <div className="my-2 text-black rounded-lg">
              <CopyBlock
                text={html}
                language={"jsx"}
                showLineNumbers={true}
                startingLineNumber={true}
                theme={dracula}
                wrapLines={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masterbrian99Button;
