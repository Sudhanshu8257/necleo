"use server";

export async function fetchImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=6",
      { method: "GET" }
    );
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
