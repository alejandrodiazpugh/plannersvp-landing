export default function useIntersection(
    element: Ref<null | HTMLElement>,
    className: string
): void {
    if (!element.value) return;
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0, // Adjust this threshold based on your needs
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                element.value?.classList.add(className);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(element.value);
}
