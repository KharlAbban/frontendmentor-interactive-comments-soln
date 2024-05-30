export function getCommentsFromStorage () {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    return comments.length > 0 ? comments : undefined;
}

export function sendCommentsToStorage (comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
}