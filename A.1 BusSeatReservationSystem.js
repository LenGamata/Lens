class BusSeatReservationSystem:
    def __init__(self):
        # Data structures
        self.ticket_persons = {"user1": "pass123", "admin": "adminpass"}  # Dictionary for user auth
        self.seats = [["Available" for _ in range(4)] for _ in range(5)]  # 2D array for seat layout

    def authenticate_ticket_person(self, username, password):
        """Authentication function using dictionary lookup."""
        return self.ticket_persons.get(username) == password

    def display_seats(self):
        """Display seat layout."""
        print("\nCurrent Seat Layout:")
        for row in self.seats:
            print(" | ".join(row))
        print("\n")

    def reserve_seat(self, row, col):
        """Reserve seat using array indexing."""
        if 0 <= row < 5 and 0 <= col < 4:
            if self.seats[row][col] == "Available":
                self.seats[row][col] = "Reserved"
                print("Seat reserved successfully!")
            else:
                print("Seat already reserved.")
        else:
            print("Invalid seat number.")

    def customer_interface(self):
        """Customer interaction loop."""
        while True:
            self.display_seats()
            try:
                row = int(input("Enter row (1-5): ")) - 1
                col = int(input("Enter column (1-4): ")) - 1
                self.reserve_seat(row, col)
            except ValueError:
                print("Invalid input. Use numbers only.")
            cont = input("Reserve another seat? (yes/no): ").strip().lower()
            if cont != 'yes':
                break

    def ticket_person_interface(self):
        """Ticket person authentication and seat view."""
        username = input("Username: ")
        password = input("Password: ")
        if self.authenticate_ticket_person(username, password):
            print("Access granted!")
            while True:
                self.display_seats()
                quit_choice = input("Press 'q' to quit: ").strip().lower()
                if quit_choice == 'q':
                    break
        else:
            print("Invalid credentials.")

    def main(self):
        """Main function with user selection."""
        while True:
            user_type = input("Are you a TICKET PERSON or CUSTOMER? ").strip().lower()
            if user_type == "ticket person":
                self.ticket_person_interface()
            elif user_type == "customer":
                self.customer_interface()
            else:
                print("Invalid choice.")
            if input("Restart program? (yes/no): ").strip().lower() != 'yes':
                print("Thank you for using the system!")
                break


reservation_system = BusSeatReservationSystem()
reservation_system.main()
