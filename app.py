import hashlib

# User data dictionary to store registered users and their passwords
users = {}

def register():
    username = input("Enter a username: ")
    password = input("Enter a password: ")

    # Hash the password before storing it
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    
    users[username] = password_hash
    print("Registration successful!")

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check if the user exists
    if username in users:
        # Verify the hashed password
        stored_password_hash = users[username]
        input_password_hash = hashlib.sha256(password.encode()).hexdigest()
        if stored_password_hash == input_password_hash:
            print("Login successful! Welcome, " + username)
        else:
            print("Login failed. Incorrect password.")
    else:
        print("Login failed. User does not exist.")

while True:
    print("\nSelect an option:")
    print("1. Register")
    print("2. Login")
    print("3. Quit")
    choice = input("Enter your choice: ")

    if choice == '1':
        register()
    elif choice == '2':
        login()
    elif choice == '3':
        break
    else:
        print("Invalid choice. Please select a valid option.")

print("Goodbye!")
