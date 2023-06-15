export function lengthOfLastWord(s: string): number {
    return s.split(/\s+/).filter(item => item.length !== 0).at(-1)?.length ?? 0
};