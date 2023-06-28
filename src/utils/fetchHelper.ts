import tokenHandler from "@/utils/tokenHandler";
interface FetchProps {
  path: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  payload?: string | object;
}
export const appFetch = async ({ path, method, payload }: FetchProps) => {
  const { token } = tokenHandler.getToken();
  if (!token) throw new Error("no valid token");
  const response = await fetch(`${process.env.TAOTIFY_BACKEND_URL}${path}`, {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then((r) => r.json());
  return response;
};
