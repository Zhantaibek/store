export async function fetchRates() {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
