let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function logout() {
    firebase.auth().signOut().then(() => {
        localStorage.clear(); // Clear localStorage if needed
        sessionStorage.clear(); // Clear session storage
        window.location.href = 'homepage.html';
    });
}
function checkAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = 'homepage.html'; // Redirect if user not logged in
        }
    });
}
// Call this function in every restricted HTML page
checkAuth();
window.addEventListener('popstate', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'homepage.html';
    });
});
