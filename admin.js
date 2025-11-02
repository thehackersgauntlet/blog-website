// Admin functionality

require('dotenv').config();

const SECRET_ADMIN_KEY = process.env.SECRET_ADMIN_KEY

function verifyAdminAccess(userKey) {
    if (userKey === SECRET_ADMIN_KEY) {
        console.log('Admin access granted!');
        return true;
    } else {
        console.log('Access denied: Invalid key');
        return false;
    }
}

// Initialize admin panel
function initializeAdminPanel() {
    const adminContainer = document.getElementById('admin-container');
    if (!adminContainer) return;
    
    adminContainer.innerHTML = `
        <h2>Admin Panel</h2>
        <p>Welcome to the admin panel. Use your secret key to access admin features.</p>
    `;
}
