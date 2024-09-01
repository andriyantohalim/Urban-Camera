function submitSupportForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (validateEmail(email) && feedback.trim() !== '') {
        window.location.href = `mailto:6124286+andriyantohalim@users.noreply.github.com?subject=Support%20Request&body=${encodeURIComponent(feedback)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
    } else {
        alert('Please provide a valid email and feedback.');
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}