interface DemoProps {
  audioUrl: string;
}

const Demo = ({ audioUrl }: DemoProps) => {
  return (
    <audio role="audio" controls>
      <source src={audioUrl} type="audio/mpeg" />
      Demo
    </audio>
  );
};

export default Demo;

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=33894312&level=exhigh`
  );
  const data = await res.json();
  const audioUrl = data.data[0].url;
  return {
    props: { audioUrl },
  };
}
