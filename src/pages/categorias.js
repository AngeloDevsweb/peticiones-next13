

export default function categorias({data}) {
  return (
    <div>
      {data.map((dat) => (
        <ul key={dat.id}>
          <li>nombre: {dat.name}</li>
          <li>usuario: {dat.username}</li>
          <li>email: {dat.email}</li>
          <li>phone: {dat.phone}</li>
          <br />
        </ul>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
