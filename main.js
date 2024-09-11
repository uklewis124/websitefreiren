var username = 'admin';
var password = 'admin';

function login(username=0, password=0) {
    let running = true;
    while (running) {
        if (username == 0 || password == 0) {
            // Function to ask for new input
        }
        else {
            if (username == 'admin' && password == 'admin') {
                console.log('Login successful');
                running = false;
            }
            else {
                console.log('Login failed');
                running = false;
            }
        }
    }
}