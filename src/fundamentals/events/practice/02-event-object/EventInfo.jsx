const EventInfo = () => {
  const handleEvent = (event) => {
    console.log(event);
  };
  return (
    <div>
      <button onClick={handleEvent}>Handle Event Button</button>
    </div>
  );
};
export default EventInfo;
