import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hola, puedes escribir tu texto en español y te ayudo con las correcciones" />
          <MyMessage text="hola Mundo" />
          <TypingLoader className="fade-in" />
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
        placeHolder="Write here what you want"
        disableCorrections
      />
    </div>
  );
};
