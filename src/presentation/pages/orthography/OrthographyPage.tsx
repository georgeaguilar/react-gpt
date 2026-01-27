import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TextMessageBoxFile,
  TypingLoader,
} from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessage((prev) => [...prev, { text: text, isGpt: false }]);

    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hola, puedes escribir tu texto en español y te ayudo con las correcciones" />
          {message.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="Esto es de OpenAI" />
            ) : (
              <MyMessage key={index} text={message.text} />
            ),
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      {/* <TextMessageBox
        onSendMessage={handlePost}
        placeHolder="Write here what you want"
        disableCorrections
      /> */}
      <TextMessageBoxFile
        onSendMessage={handlePost}
        placeHolder="Write here what you want"
      />
    </div>
  );
};
