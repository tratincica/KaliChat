import classes from "./Messages.module.css";

const Messages = (props) => {
  const { messages } = props;

  const renderMessage = (message) => {
    const { member, text } = message;
    const { currentMember } = props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? `${classes["Messages-message"]} ${classes.currentMember}`
      : classes["Messages-message"];
    return (
      <li key={Math.random()} className={className}>
        <span
          className={classes.avatar}
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className={classes["Message-content"]}>
          <div className={classes.username}>{member.clientData.username}</div>
          <div className={classes.text}>{text}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className={classes["Messages-list"]}>
      {messages.map((m) => renderMessage(m))}
    </ul>
  );
};

export default Messages;
