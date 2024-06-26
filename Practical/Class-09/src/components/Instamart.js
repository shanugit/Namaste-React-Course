import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          className="underline cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  let [visibleSection, setVisibleSection] = useState("about");
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">
        Instamart - {user.name} - {user.mail}
      </h1>
      <Section
        title={"AboutInstamart"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        title={"Details of Instamart"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "details"}
        setIsVisible={() => {
          setVisibleSection("details");
        }}
      />
      <Section
        title={"Career"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          setVisibleSection("career");
        }}
      />
    </div>
  );
};

export default Instamart;
