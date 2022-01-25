export async function getMultiEasy() {
  return request(
    "https://quizitmultiplayer-default-rtdb.firebaseio.com/quizitmultiplayer.json",
    {
      method: "GET",
      header: { "Content-Type": "application/json" },
    }
  );
}
