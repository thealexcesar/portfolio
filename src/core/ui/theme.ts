export function toggleTheme() {
    const root: HTMLElement = document.documentElement;
    const currentTheme: string | null = root.getAttribute('data-theme');
    const isLight: boolean = currentTheme === 'light';
    const themeAttr: string = isLight? 'dark' : 'light'

    root.setAttribute('data-theme', themeAttr );
    localStorage.setItem('data-theme', themeAttr);
}

export function setThemeFromLocalStorage(root: HTMLElement = document.documentElement) {
    if (typeof document !== 'undefined') {
        const preferredTheme: string | null = localStorage.getItem('data-theme');
        root = document.documentElement;

        if (preferredTheme === null) {
            const prefersDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
            localStorage.setItem('data-theme', prefersDark.matches ? 'dark' : 'light');
        } else {
            root.setAttribute('data-theme', preferredTheme);
        }
    }
}
