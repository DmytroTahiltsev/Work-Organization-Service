export function toArray(enumme: any) {
    return Object.keys(enumme).map(key => enumme[key]);
}