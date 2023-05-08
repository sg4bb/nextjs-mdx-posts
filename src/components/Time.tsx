interface Props {
  date: string;
}

const Time = ({ date }: Props) => {
  return (
    <>
      <time>
        {new Date(date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </>
  );
};

export default Time;
