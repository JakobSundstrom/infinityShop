// Function to handle the scrollbar click event
function handleScrollbarClick(event) {
    // Get the viewport element
    const viewport = document.getElementById("viewport");

    // Get the click position relative to the scrollbar
    const clickPosition = event.clientY - event.currentTarget.getBoundingClientRect().top;

    // Calculate the scroll position based on the click position inside the scrollbar
    const scrollHeight = viewport.scrollHeight - viewport.clientHeight;
    const scrollTo = (clickPosition / event.currentTarget.clientHeight) * scrollHeight;

    // Scroll the viewport to the calculated position
    viewport.scrollTo({ top: scrollTo, behavior: "smooth" });
}
