export function smooth_scroll(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target.getAttribute("href") || "";
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}