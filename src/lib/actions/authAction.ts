export async function loginWithApi(email: string, password: string) {
  const res = await fetch(`${process.env.BASE_URL_API}/home/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email_address: email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const data = await res.json();
  return {
    id: data.data.user_id,
    email: data.data.email_address,
    token: data.token, // Bearer token dari API
  };
}
