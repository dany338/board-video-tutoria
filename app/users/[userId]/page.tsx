interface UserIdPageProps {
  params: {
    userId: string;
  }
}

export default function Page({
  params,
}: UserIdPageProps) {
  return (
    <div>
      <h1>User ID: {params.userId}</h1>
    </div>
  );
}