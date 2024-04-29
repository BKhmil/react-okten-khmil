export default async function getData<T>(url: string): Promise<T | string> {
    let result: T | string;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            result = `Error: ${response.status} - ${response.statusText}`;
        } else {
            result = await response.json();
        }
    } catch (e) {
        const error = e as Error;

        result = error.message;
    }

    return result;
}