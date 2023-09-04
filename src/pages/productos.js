export default function productos({ users }) {
  return (
    <div>
      <ul className="centrar">
        {users.map((user) => (
          <div key={user.id}>
            <li>nombre: {user.name}</li>
            <li>usuario: {user.username}</li>
            <li>email: {user.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
