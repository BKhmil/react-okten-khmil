// в загальному ідея наступна:
// у мене в голові завжди є думка про те що моя функція має бути суперуніверсальною
// тому я не писав звичайний фетч прям у компоненті

// оскільки я бажав універсальності - маю дженерік, яким типізую тип повертаємого значення та тип результуючої змінної
export default async function getData<T>(url: string): Promise<T | string> {
    // стосовно результуючої змінної
    // я звик по можливості писати функції так, щоб був один return
    let result: T | string;

    try {
        const response = await fetch(url);

        // ось тут можливо можна було обійтись лише такою перевіркою, без блоку try/catch
        //
        // if (!response.ok) {
        //     result = `Error: ${response.status} - ${response.statusText}`;
        // } else {
        // }
            result = await response.json();
    } catch (e) {
        // тут чомусь типізація на пряму (e: Error) не хотіла працювати, тому зробив через alias
        const error = e as Error;

        result = error.message;
    }

    return result;
}