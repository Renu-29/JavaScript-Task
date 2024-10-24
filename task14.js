function generateTimestamps() {
    const currentDate = new Date();

    // dd/mm/yyyy format
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    console.log(`Date (dd/mm/yyyy): ${formattedDate}`);

    // hh.mm.ss format
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}.${minutes}.${seconds}`;
    console.log(`Time (hh.mm.ss): ${formattedTime}`);

    // Simulate a past post timestamp (for example, 45 minutes ago)
    const postDate = new Date(currentDate.getTime() - (1000 * 60 * 45)); // 45 minutes ago
    const relativeTime = timeAgo(postDate);
    console.log(`Relative Time: ${relativeTime}`);
}

// Function to calculate "X minutes ago", "X months ago", etc.
function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;
    if (months < 12) return `${months} months ago`;
    return `${years} years ago`;
}

// Call the function to generate timestamps
generateTimestamps();
